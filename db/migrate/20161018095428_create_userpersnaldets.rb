class CreateUserpersnaldets < ActiveRecord::Migration[5.0]
  def change
    create_table :userpersnaldets do |t|
      t.string :Name
      t.integer :Age, :limit => 3
      t.string :Contact_Number,  :limit => 12
      t.string :Address
      t.string :About_MAC

      t.timestamps
    end
  end
end
