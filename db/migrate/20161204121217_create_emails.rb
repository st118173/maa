class CreateEmails < ActiveRecord::Migration[5.0]
  def change
    create_table :emails do |t|
      t.string :name
      t.string :email
      t.string :phone, :limit => 13
      t.string :message
      t.timestamps
    end
  end
end
