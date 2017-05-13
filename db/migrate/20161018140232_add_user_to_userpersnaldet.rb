class AddUserToUserpersnaldet < ActiveRecord::Migration[5.0]
  def change
    add_reference :userpersnaldets, :user, foreign_key: true
  end
end
