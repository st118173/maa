json.extract! email, :id, :name, :email, :phone, :message, :created_at, :updated_at
json.url email_url(email, format: :json)