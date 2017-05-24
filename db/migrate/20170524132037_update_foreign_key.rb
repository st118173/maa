class UpdateForeignKey < ActiveRecord::Migration[5.0]
  def change
    # remove the old foreign_key
    remove_foreign_key :regs, :users

    # add the new foreign_key
    add_foreign_key :regs, :users, on_delete: :cascade

  end

end
