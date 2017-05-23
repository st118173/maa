json.extract! memberdetail, :id, :fullname, :fathername, :phnumber, :bloodgroup, :created_at, :updated_at
json.url memberdetail_url(memberdetail, format: :json)