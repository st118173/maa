class CreateDonateEducationMaterials < ActiveRecord::Migration[5.0]
  def change
    create_table :donate_education_materials do |t|
      t.string :name
      t.string :email
      t.string :address
      t.integer :contact
      t.string :text_donation

      t.timestamps
    end
  end
end
