class MemberdetailsController < ApplicationController
  before_action :set_memberdetail, only: [:show, :edit, :update, :destroy]
  before_action :authenticate_user!
  # GET /memberdetails
  # GET /memberdetails.json
  def index
    #@memberdetails = Memberdetail.all
    @memberdetails = Memberdetail.paginate(:page => params[:page], :per_page => 5)
    respond_to do |format|
      format.html
      format.csv { send_data @memberdetails.to_csv }
      format.xls
    end
  end

  # GET /memberdetails/1
  # GET /memberdetails/1.json
  def show

  end

  # GET /memberdetails/new
  def new
    @memberdetail = Memberdetail.new
  end

  # GET /memberdetails/1/edit
  def edit
  end

  # POST /memberdetails
  # POST /memberdetails.json
  def create
    @memberdetail = Memberdetail.new(memberdetail_params)

    respond_to do |format|
      if @memberdetail.save
        format.html { redirect_to memberdetails_path, notice: 'Memberdetail was successfully created.' }
        #format.json { render :show, status: :created, location: @memberdetail }
      else
        format.html { render :new }
        format.json { render json: @memberdetail.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /memberdetails/1
  # PATCH/PUT /memberdetails/1.json
  def update
    respond_to do |format|
      if @memberdetail.update(memberdetail_params)
        format.html { redirect_to @memberdetail, notice: 'Memberdetail was successfully updated.' }
        format.json { render :show, status: :ok, location: @memberdetail }
      else
        format.html { render :edit }
        format.json { render json: @memberdetail.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /memberdetails/1
  # DELETE /memberdetails/1.json
  def destroy
    @memberdetail.destroy
    respond_to do |format|
      format.html { redirect_to memberdetails_url, notice: 'Memberdetail was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_memberdetail
      @memberdetail = Memberdetail.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def memberdetail_params
      params.require(:memberdetail).permit(:fullname, :fathername, :phnumber, :bloodgroup, :image,:proof)
    end
end
