class AddAmountToRegs < ActiveRecord::Migration[5.0]
  def change
    add_column :regs, :amount, :float
  end
end
