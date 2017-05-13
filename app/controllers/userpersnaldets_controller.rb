class UserpersnaldetsController < ApplicationController
  before_action :set_userpersnaldet, only: [:show, :edit, :update, :destroy]
  before_action :authenticate_user!
  before_filter :check_role ,except: :index
  def check_role
    if user_signed_in? && current_user.role_id ==nil
      redirect_to new_reg_path

    end
  end
  # GET /userpersnaldets
  # GET /userpersnaldets.json
  def index
    @userpersnaldets = Userpersnaldet.all
    if user_signed_in?
      @det = Userpersnaldet.all
      @dets = @det.find(current_user.id)
    end

  end

  # GET /userpersnaldets/1
  # GET /userpersnaldets/1.json
  def show
    redirect_to programs_path
  end

  # GET /userpersnaldets/new
  def new
    @userpersnaldet = Userpersnaldet.new
  end

  # GET /userpersnaldets/1/edit
  def edit
  end

  # POST /userpersnaldets
  # POST /userpersnaldets.json
  def create
    @userpersnaldet = Userpersnaldet.new(userpersnaldet_params)

    respond_to do |format|
      if @userpersnaldet.save
        format.html { redirect_to @userpersnaldet, notice: 'Your personal data was successfully created.' }
        format.json { render :show, status: :created, location: @userpersnaldet }
      else
        format.html { render :new }
        format.json { render json: @userpersnaldet.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /userpersnaldets/1
  # PATCH/PUT /userpersnaldets/1.json
  def update
    respond_to do |format|
      if @userpersnaldet.update(userpersnaldet_params)
        format.html { redirect_to @userpersnaldet, notice: 'Your personal data was successfully updated.' }
        format.json { render :show, status: :ok, location: @userpersnaldet }
      else
        format.html { render :edit }
        format.json { render json: @userpersnaldet.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /userpersnaldets/1
  # DELETE /userpersnaldets/1.json
  def destroy
    @userpersnaldet.destroy
    respond_to do |format|
      format.html { redirect_to userpersnaldets_url, notice: 'Your personal data was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_userpersnaldet
      @userpersnaldet = Userpersnaldet.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def userpersnaldet_params
      params.require(:userpersnaldet).permit(:Name, :Age ,:gender,:Contact_Number, :Address, :About_MAC,:gender)
    end
end
