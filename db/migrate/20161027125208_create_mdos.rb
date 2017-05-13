class CreateMdos < ActiveRecord::Migration[5.0]
  def change
    create_table :mdos do |t|
      t.string :amount
      t.string :full_name
      t.string :company
      t.string :email
      t.string :telephone , :limit => 13

      t.timestamps
    end
  end
end
