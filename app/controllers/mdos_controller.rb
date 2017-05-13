class MdosController < ApplicationController

  before_action :set_mdo, only: [:show, :edit, :update, :destroy]
  before_filter :check_role ,except: :index
  def check_role
    if user_signed_in? && current_user.role_id ==nil
      redirect_to new_reg_path

    end
  end
  # GET /Donations

  def index
    #@mdo = Mdo.all
    #@mdos = Mdo.all
    @mdos = Mdo.all
    @mdo = Mdo.new
  end

  # GET /Donations/1
  def show
    @mdos = Mdo.all

  end

  # GET /Donations/new
  def new

    #@user_type = params[:user_type]
    @mdo = Mdo.new
    @mdo.build_card
    @ack = CardTransaction.all
    # @course = Course.find_by id: params["course_id"]

  end


  # POST /Donations
  def create

    @mdo = Mdo.new(mdo_params)
    @mdo.card.ip_address = request.remote_ip
    if @mdo.save
      #redirect_to @mdo.paypal_url(mdo_path(@mdo))
      case params[:payment]
        when "paypal"
          redirect_to @mdo.paypalurl(mdo_path(@mdo))
        when "card"
          if @mdo.card.donate
            redirect_to mdo_path(@mdo), notice: @mdo.card.card_transaction.message
          else
            redirect_to mdo_path(@mdo), alert: @mdo.card.card_transaction.message
          end
    else
      render :new
    end
    end
    end



  protect_from_forgery except: [:hook]
  def hook
    params.permit! # Permit all Paypal input params
    status = params[:payment_status]
    if status == "Completed"
      @mdo = Mdo.find params[:invoice]
      @mdo.update_attributes notification_params: params, status: status, transaction_id: params[:txn_id], purchased_at: Time.now
    end
    render nothing: true
  end


  private
  # Use callbacks to share common setup or constraints between actions.
  def set_mdo
    @mdo = Mdo.find(params[:id])
  end

  # Never trust parameters from the scary internet, only allow the white list through.
  def mdo_params
    params.require(:mdo).permit(:amount, :full_name, :company, :email, :telephone,
                                         card_attributes: [
                                             :first_name, :last_name, :card_type, :card_number,
                                             :card_verification, :card_expires_on])
  end


end
