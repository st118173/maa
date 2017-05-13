class AddAttachmentPhotoToPrograms < ActiveRecord::Migration[5.0]
  def self.up
    change_table :programs do |t|
      t.attachment :photo
    end
  end

  def self.down
    remove_attachment :programs, :photo
  end
end
