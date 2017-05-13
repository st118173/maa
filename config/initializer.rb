Commentator.configure do |config|
  # config.owner_class = "User"
  # config.current_commenter_method = :current_user
  config.authorize_method = :authorize_comment
end