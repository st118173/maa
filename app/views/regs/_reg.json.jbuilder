json.extract! reg, :id, :member_role, :full_name, :company, :email, :telephone, :created_at, :updated_at
json.url reg_url(reg, format: :json)