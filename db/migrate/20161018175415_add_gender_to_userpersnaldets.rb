class AddGenderToUserpersnaldets < ActiveRecord::Migration[5.0]
  def change
    add_column :userpersnaldets, :gender, :boolean
  end
end
