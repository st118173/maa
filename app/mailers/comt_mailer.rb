class ComtMailer < ActionMailer::Base
  def comt_created(current_user,program_user,content,event_name)
    @current_user = current_user
    @program_user =program_user
    @content =content
    @event_name = event_name

    mail(
        to: program_user.email,
        from: 'maaaapkichaaya@gmail.com',
        subject: 'Comment Created',

    )

  end

end