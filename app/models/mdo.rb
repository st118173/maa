require 'csv'

class Mdo < ApplicationRecord
  #belongs_to :user
  has_one :card

  accepts_nested_attributes_for :card
  #validates  :full_name, :company, :email, :telephone, presence: true
  #validates_presence_of :amount

  serialize :notification_params, Hash
  def paypalurl(return_path)
    values = {
        business: "ait@test.com",
        cmd: "_xclick",
        upload: 1,
        return: "#{Rails.application.secrets.app_host}#{return_path}",
        invoice: id,
        amount: amount.to_d,
        item_name: "Donation",
        item_number: id,
        quantity: '1',
        notify_url: "#{Rails.application.secrets.app_host}/hook"
          }
          "#{Rails.application.secrets.paypal_host}/cgi-bin/webscr?" + values.to_query
        end

  def payment_method
    if card.nil? then "paypal"; else "card"; end
  end
  def self.to_csv(options = {})
    desired_columns = ["id", "amount", "full_name", "company",'email','telephone','status','transcation_id','purchased_at']
    CSV.generate(options) do |csv|
      csv << desired_columns
      all.each do |donate|
        csv << donate.attributes.values_at(*desired_columns)
      end
    end
  end

end

