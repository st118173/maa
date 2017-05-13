class CreatePrograms < ActiveRecord::Migration[5.0]
  def change
    create_table :programs do |t|
      t.string :Event_Name
      t.string :event_details
      t.integer :media_id
      t.integer :user_id
      t.timestamps
    end
  end
end
