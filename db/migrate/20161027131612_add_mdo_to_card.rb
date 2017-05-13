class AddMdoToCard < ActiveRecord::Migration[5.0]
  def change
    add_reference :cards, :mdo, foreign_key: true
  end
end
