class Card < ApplicationRecord
  belongs_to :reg
  belongs_to :mdo

  #belongs_to :course
  has_one :card_transaction

  # These attributes won't be stored
  attr_accessor :card_number, :card_verification

  before_create :validate_card
 # before_save :set_card_number



  def purchase
    response = if reg.member_role == "Member"
                 GATEWAY.recurring(price_in_cents, credit_card, purchase_options)
               else
                 GATEWAY.purchase(price_in_cents, credit_card, purchase_options)
               end

    create_card_transaction(action: 'purchase', amount: price_in_cents, response: response)
    reg.update_attribute(:purchased_at, Time.now) if response.success?
    response.success?

  end
  def donate
    response = GATEWAY.purchase(donate_in_cents, credit_card, donate_options)
    create_card_transaction(action: 'purchase', amount: donate_in_cents, response: response)
    mdo.update_attribute(:purchased_at, Time.now) if response.success?
    response.success?

  end
    def index
    #course = Course.all
    reg = Reg.all
    mdo = Mdo.all
  end
  def donate_in_cents
    if mdo.amount?
      if mdo.amount != nil
        app = mdo.amount.to_d * 100
      end
    else
      app = 663 * 100
    end

  end
  def price_in_cents


        if reg.member_role == "Volunteer"
        app = 50
        elsif reg.member_role == "Member"
          app = 100 #per month
        end
      end


  private
  def donate_options
    {
        ip: ip_address,
        billing_address: {
            name:      "Flaying Cakes",
            address1:  "123 5th Av.",
            city:      "New York",
            state:     "NY",
            country:   "US",
            zip:       "10001"
        }
    }
  end


  def purchase_options
    values = {
        ip: ip_address,
        billing_address: {
            name:      "Flaying Cakes",
            address1:  "123 5th Av.",
            city:      "New York",
            state:     "NY",
            country:   "US",
            zip:       "10001"
        }
    }
    if reg.member_role == "Member"
      values.merge(
          period: "Month",
          frequency: 1,
          cycles: 12,
          description: "Member",
          start_date: Time.now
      )
    else
      values
    end
  end

  def validate_card
    unless credit_card.valid?
      credit_card.errors.full_messages.each do |message|
        errors.add :base, message
      end
    end
  end

  def credit_card
    @credit_card ||= ActiveMerchant::Billing::CreditCard.new(
        type:                card_type,
        number:              card_number,
        verification_value:  card_verification,
        month:               card_expires_on.month,
        year:                card_expires_on.year,
        first_name:          first_name,
        last_name:           last_name
    )
  end
end
