class CreateMaaAddresses < ActiveRecord::Migration[5.0]
  def change
    create_table :maa_addresses do |t|
      t.string :postal_address

      t.timestamps
    end
  end
end
