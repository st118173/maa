class AddCardToUser < ActiveRecord::Migration[5.0]
  def change
    add_reference :users, :card, foreign_key: true
  end
end
