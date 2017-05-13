class RegsController < ApplicationController
  before_action :set_reg, only: [:show, :edit, :update, :destroy]
  before_action :authenticate_user!
  #before_filter :check_role ,except: :index
  def check_role
    if user_signed_in? && current_user.role_id ==nil
      redirect_to new_reg_path

    end
  end
  # GET /registrations
  def index
    @reg = Reg.all


  end

  # GET /regioistrations/1
  def show
    @regs = Reg.all

  end

  # GET /registrations/new
  def new
    @user_type = params[:user_type]
    @reg = Reg.new
    @reg.build_card
    @ack = CardTransaction.all
    # @course = Course.find_by id: params["course_id"]

  end


  # POST /registrations
  def create
    @reg = Reg.new(reg_params)

    @reg.card.ip_address = request.remote_ip
    @reg.user_id = current_user.id
    if @reg.save
      user = User.find(current_user.id)
      role_name = @reg.member_role
      if user_signed_in?
        user.card_id = current_user.reg.card.id
        user.save
      end

      if role_name == "Member"
        user.role_id = 2
      else
        user.role_id = 3
      end
      user.save
      case params[:payment]
        when "paypal"
          redirect_to @reg.paypal_url(reg_path(@reg))
        when "card"
          if @reg.card.purchase
            redirect_to reg_path(@reg), notice: @reg.card.card_transaction.message
          else
            redirect_to reg_path(@reg), alert: @reg.card.card_transaction.message
          end
      end
    else
      render :new
    end

  end


  protect_from_forgery except: [:hook]
  def hook
    params.permit! # Permit all Paypal input params
    status = params[:payment_status]
    if status == "Completed"
      @reg = Reg.find params[:invoice]
      @reg.update_attributes notification_params: params, status: status, transaction_id: params[:txn_id], purchased_at: Time.now
    end
    render nothing: true
  end


  private
  # Use callbacks to share common setup or constraints between actions.
  def set_reg
    @reg = Reg.find(params[:id])
  end

  # Never trust parameters from the scary internet, only allow the white list through.
  def reg_params
    params.require(:reg).permit(:full_name,:user_id, :company, :email, :telephone, :member_role,:amount,
                                         card_attributes: [
                                             :first_name, :last_name, :card_type, :card_number,
                                             :card_verification, :card_expires_on])

  end

end
