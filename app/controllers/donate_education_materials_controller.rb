class DonateEducationMaterialsController < ApplicationController
  before_action :set_donate_education_material, only: [:show, :edit, :update, :destroy]
  before_filter :check_role ,except: :index
  def check_role
    if user_signed_in? && current_user.role_id ==nil
      redirect_to new_reg_path

    end
  end
  # GET /donate_education_materials
  # GET /donate_education_materials.json
  def index
    @donate_education_materials = DonateEducationMaterial.all
  end

  # GET /donate_education_materials/1
  # GET /donate_education_materials/1.json
  def show
  end

  # GET /donate_education_materials/new
  def new
    @donate_education_material = DonateEducationMaterial.new
  end

  # GET /donate_education_materials/1/edit
  def edit
  end

  # POST /donate_education_materials
  # POST /donate_education_materials.json
  def create
    @donate_education_material = DonateEducationMaterial.new(donate_education_material_params)

    respond_to do |format|
      if @donate_education_material.save
        format.html { redirect_to @donate_education_material, notice: 'Donate education material was successfully created.' }
        format.json { render :show, status: :created, location: @donate_education_material }
      else
        format.html { render :new }
        format.json { render json: @donate_education_material.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /donate_education_materials/1
  # PATCH/PUT /donate_education_materials/1.json
  def update
    respond_to do |format|
      if @donate_education_material.update(donate_education_material_params)
        format.html { redirect_to @donate_education_material, notice: 'Donate education material was successfully updated.' }
        format.json { render :show, status: :ok, location: @donate_education_material }
      else
        format.html { render :edit }
        format.json { render json: @donate_education_material.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /donate_education_materials/1
  # DELETE /donate_education_materials/1.json
  def destroy
    @donate_education_material.destroy
    respond_to do |format|
      format.html { redirect_to donate_education_materials_url, notice: 'Donate education material was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_donate_education_material
      @donate_education_material = DonateEducationMaterial.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def donate_education_material_params
      params.require(:donate_education_material).permit(:name, :email, :address, :contact, :text_donation)
    end
end
class CardTransactionsController < ApplicationController
  before_action :set_reg
  def create
    @tran = CardTransaction.new(tran_params)
    #@tran.card.ip_address = request.remote_ip
    @tran.user_id = current_user.id
    @tran.save
  end
  private
  def tran_params
    params.require(:cardtransaction).permit(:user_id)
  end

end