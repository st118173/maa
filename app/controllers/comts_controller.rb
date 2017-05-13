class ComtsController < ApplicationController
  before_filter :check_role

  def create
  @program = Program.find(params[:program_id])
    @comt =  @program.comts.create(comts_params)
  ComtMailer.comt_created(current_user,@program.user,@comt.content,@program.Event_Name).deliver
    redirect_to program_path(@program)
  end
  private
  def comts_params

    params.require(:comt).permit(:content)
  end

end