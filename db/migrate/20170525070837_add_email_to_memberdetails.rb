class AddEmailToMemberdetails < ActiveRecord::Migration[5.0]
  def change
    add_column :memberdetails, :email, :string
  end
end
