class CreateMemberdetails < ActiveRecord::Migration[5.0]
  def change
    create_table :memberdetails do |t|
      t.string :fullname
      t.string :fathername
      t.string :phnumber
      t.string :bloodgroup

      t.timestamps
    end
  end
end
