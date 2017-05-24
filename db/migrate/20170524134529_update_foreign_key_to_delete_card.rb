class UpdateForeignKeyToDeleteCard < ActiveRecord::Migration[5.0]
  def change
    # remove the old foreign_key
    remove_foreign_key :card_transactions,:cards

    # add the new foreign_key
    add_foreign_key :card_transactions,:cards, on_delete: :cascade
  end
end
