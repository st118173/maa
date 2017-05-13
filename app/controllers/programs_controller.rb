class ProgramsController < ApplicationController
  before_action :set_program, only: [:show, :edit, :update, :destroy]
  before_action :authenticate_user!
  before_filter :check_role ,except: :index
  def check_role
    if user_signed_in? && current_user.role_id ==nil
      redirect_to new_reg_path

    end
  end
  # GET /programs
  # GET /programs.json
  def index
    @programs = Program.all
    #@zap = current_user.id
    #@success = CardTransaction.find(1)
  end


  # GET /programs/1
  # GET /programs/1.json
  def show
  end

  # GET /programs/new
  def new
    @program = Program.new
  end

  # GET /programs/1/edit
  def edit
  end

  # POST /programs
  # POST /programs.json
  def create
    @user= current_user
    @program = @user.programs.new(program_params)

    respond_to do |format|
      if @program.save
        ProgramMailer.program_created(current_user,@program.Event_Name).deliver
        format.html { redirect_to @program, notice: 'Program was successfully created.' }
        format.json { render :show, status: :created, location: @program }
      else
        format.html { render :new }
        format.json { render json: @program.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /programs/1
  # PATCH/PUT /programs/1.json
  def update
    respond_to do |format|
      if @program.update(program_params)
        format.html { redirect_to @program, notice: 'Program was successfully updated.' }
        format.json { render :show, status: :ok, location: @program }
      else
        format.html { render :edit }
        format.json { render json: @program.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /programs/1
  # DELETE /programs/1.json
  def destroy
    @program.destroy
    respond_to do |format|
      format.html { redirect_to programs_url, notice: 'Program was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
  # Use callbacks to share common setup or constraints between actions.
  def set_program
    @program = Program.find(params[:id])
  end

  # Never trust parameters from the scary internet, only allow the white list through.
  def program_params
    params.require(:program).permit(:Event_Name,:event_details,:photo)

  end
  protected
  def profile
    @account = current_account
  end
end
