class EmailMailer < ActionMailer::Base
  def email_created(person_name,person_email,person_phone,message)
    @name = person_name
    @email = person_email
    @phone = person_phone
    @message = message
    mail(

        to: 'st118173@ait.asia',
        from: @email,
        subject:  "#{@name} has asked a question to MAC",

    )

  end

end