class AddAnotherPaperclipToProgram < ActiveRecord::Migration[5.0]
  def change
    add_attachment :memberdetails, :proof
  end
end
