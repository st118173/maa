class AddUserToCardTransaction < ActiveRecord::Migration[5.0]
  def change
    add_reference :card_transactions, :user, foreign_key: true
  end
end
