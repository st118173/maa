class CreateComts < ActiveRecord::Migration[5.0]
  def change
    create_table :comts do |t|
      t.text :content
      t.integer :program_id

      t.timestamps
    end
  end
end
