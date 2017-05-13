class MaaAddressesController < ApplicationController
  before_action :set_maa_address, only: [:show, :edit, :update, :destroy]
  before_filter :check_role ,except: :index
  def check_role
    if user_signed_in? && current_user.role_id ==nil
      redirect_to new_reg_path

    end
  end
  # GET /maa_addresses
  # GET /maa_addresses.json
  def index
    @maa_addresses = MaaAddress.all
  end

  # GET /maa_addresses/1
  # GET /maa_addresses/1.json
  def show
  end

  # GET /maa_addresses/new
  def new
    @maa_address = MaaAddress.new
  end

  # GET /maa_addresses/1/edit
  def edit
  end

  # POST /maa_addresses
  # POST /maa_addresses.json
  def create
    @maa_address = MaaAddress.new(maa_address_params)

    respond_to do |format|
      if @maa_address.save
        format.html { redirect_to @maa_address, notice: 'Maa address was successfully created.' }
        format.json { render :show, status: :created, location: @maa_address }
      else
        format.html { render :new }
        format.json { render json: @maa_address.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /maa_addresses/1
  # PATCH/PUT /maa_addresses/1.json
  def update
    respond_to do |format|
      if @maa_address.update(maa_address_params)
        format.html { redirect_to @maa_address, notice: 'Maa address was successfully updated.' }
        format.json { render :show, status: :ok, location: @maa_address }
      else
        format.html { render :edit }
        format.json { render json: @maa_address.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /maa_addresses/1
  # DELETE /maa_addresses/1.json
  def destroy
    @maa_address.destroy
    respond_to do |format|
      format.html { redirect_to maa_addresses_url, notice: 'Maa address was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_maa_address
      @maa_address = MaaAddress.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def maa_address_params
      params.require(:maa_address).permit(:postal_address)
    end
end
