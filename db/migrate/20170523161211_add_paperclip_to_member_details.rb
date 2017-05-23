class AddPaperclipToMemberDetails < ActiveRecord::Migration[5.0]
  add_attachment :memberdetails, :image
end
