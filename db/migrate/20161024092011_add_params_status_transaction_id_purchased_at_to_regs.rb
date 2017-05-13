class AddParamsStatusTransactionIdPurchasedAtToRegs < ActiveRecord::Migration[5.0]
  def change
    add_column :regs, :notification_params, :text
    add_column :regs, :status, :string
    add_column :regs, :transaction_id, :string
    add_column :regs, :purchased_at, :datetime
  end
end
