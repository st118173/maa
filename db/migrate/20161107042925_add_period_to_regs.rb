class AddPeriodToRegs < ActiveRecord::Migration[5.0]
  def change
    add_column :regs, :period, :string , :default => "Month"
  end
end
