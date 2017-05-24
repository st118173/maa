class UpdateForeignkeys < ActiveRecord::Migration[5.0]
  def change
    # remove the old foreign_key
    remove_foreign_key :cards, :regs

    # add the new foreign_key
    add_foreign_key :cards,:regs, on_delete: :cascade
  end
end
