class ProgramMailer < ActionMailer::Base
def program_created(current_user,event_name)
  @current_user = current_user
  @event_name =event_name
  mail(

      to: 'st118173@ait.asia',
      from: @current_user.email,
      subject: 'Event Created',

  )

end

end