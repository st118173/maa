class Program < ApplicationRecord
  validates :Event_Name,:event_details, presence: true
  mount_uploader :file_name, MediaUploader
  has_many :comts
  belongs_to :user
  has_attached_file :photo, styles: { medium: "300x300>", thumb: "100x100>" }
  validates_attachment_content_type :photo, :content_type => ["image/jpg", "image/jpeg", "image/png", "image/gif"]

end
