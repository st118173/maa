class AddParamsStatusTransactionIdPurchasedAtToMdos < ActiveRecord::Migration[5.0]
  def change
    add_column :mdos, :notification_params, :text
    add_column :mdos, :status, :string
    add_column :mdos, :transaction_id, :string
    add_column :mdos, :purchased_at, :datetime
  end
end
