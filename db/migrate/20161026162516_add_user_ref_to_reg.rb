class AddUserRefToReg < ActiveRecord::Migration[5.0]
  def change
    add_reference :regs, :user, foreign_key: true
  end
end
