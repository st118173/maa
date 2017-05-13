class CreateRegs < ActiveRecord::Migration[5.0]
  def change
    create_table :regs do |t|
      t.string :member_role
      t.string :full_name
      t.string :company
      t.string :email
      t.string :telephone, :limit => 13

      t.timestamps
    end
  end
end
