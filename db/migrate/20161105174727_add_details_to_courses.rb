class AddDetailsToCourses < ActiveRecord::Migration[5.0]
  def change
    add_column :courses, :details, :text
  end
end
