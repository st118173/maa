class Reg < ApplicationRecord
  belongs_to :user
  has_one :card
  attr_accessor :form_first, :form_second, :form_third, :form_fourth

  accepts_nested_attributes_for :card
  validates  :full_name, :company, :email, :telephone, presence: true
  validates_presence_of :amount, :unless => :member_role?

  serialize :notification_params, Hash
  def paypal_url(return_path)
    values = {
        business: "ait@test.com",
        cmd: "_xclick",
        upload: 1,
        return: "#{Rails.application.secrets.app_host}#{return_path}",
        invoice: id,
        # qamount: course.price,
        #item_name: course.name,
        #item_number: course.id,
        quantity: '1',
        notify_url: "#{Rails.application.secrets.app_host}/hook"
    }
    values = if member_role == "Member"

                          values.merge(
                              cmd: "_xclick-subscriptions",
                              a3: 100,#amount
                              p3: 1,#no of periods
                              t3: period #period = "Month"
                          )
                        else
                          values.merge(
                              cmd: "_xclick",
                              amount: 50,
                              item_number: id ,

                          )
                        end

               "#{Rails.application.secrets.paypal_host}/cgi-bin/webscr?" + values.to_query
  end
  def payment_method
    if card.nil? then "paypal"; else "card"; end
  end
end

