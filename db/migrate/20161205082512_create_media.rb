class CreateMedia < ActiveRecord::Migration[5.0]
  def change
    create_table :media do |t|
      t.string :file_name
      t.timestamps
    end
  end
end
