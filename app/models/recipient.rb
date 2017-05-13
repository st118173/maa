class Recipient < ApplicationRecord
  belongs_to :message
  belongs_to :user

  validates :user_id, presence: true

end
