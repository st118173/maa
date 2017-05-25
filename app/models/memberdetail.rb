require 'csv'
class Memberdetail < ApplicationRecord
  #has_attached_file :image, styles: { small: "64x64", med: "100x100", large: "200x200" }
   has_attached_file :image, styles: { medium: "300x300>", :thumb => "100x100#",
                                       :small  => "150x150>",
                                       :medium => "200x200"  }
   has_attached_file :proof, styles: { medium: "300x300>", :thumb => "100x100#",
                                       :small  => "150x150>",
                                       :medium => "200x200"  }
  validates_attachment_content_type :image, :content_type => ["image/jpg", "image/jpeg", "image/png", "image/gif"]
   def self.to_csv(options = {})
     desired_columns = ["id", "fullname", "fathername", "phnumber",'bloodgroup','image']
     CSV.generate(options) do |csv|
       csv << desired_columns
       all.each do |donate|
         csv << donate.attributes.values_at(*desired_columns)
       end
     end
   end
end
