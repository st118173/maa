# server-based syntax
# ======================
# Defines a single server with a list of roles and multiple properties.
# You can define all roles on a single server, or split them:
set :stage, "production"
# server 'example.com', user: 'deploy', roles: %w{app db web}, my_property: :my_value
# server 'example.com', user: 'deploy', roles: %w{app web}, other_property: :other_value
# server 'db.example.com', user: 'deploy', roles: %w{db}
set :branch, 'master'
set :rails_env,'production'
set :deploy_via, :remote_cache
server '54.202.109.74',
       user: 'deploy',
       roles: %w{web app db},
       ssh_options: {forward_agent: true}


# role-based syntax
# ==================

# Defines a role with one or multiple servers. The primary server in each
# group is considered to be the first unless any  hosts have the primary
# property set. Specify the username and a domain or IP for the server.
# Don't use `:all`, it's a meta role.

# role :app, %w{deploy@example.com}, my_property: :my_value
# role :web, %w{user1@primary.com user2@additional.com}, other_property: :other_value
# role :db,  %w{deploy@example.com}

role :app, %w{deploy@54.202.109.74}
role :web, %w{deploy@54.202.109.74}
role :db,  %w{deploy@54.202.109.74}, :primary => true

# set :default_env,{
#     'BAZOOKA_USER' => ENV['BAZOOKA_USER'],
#
#     "http_proxy" => "http://192.41.170.23:3128",
#     "https_proxy" => "http://192.41.170.23:3128",
#     "ftp_proxy" => "http://192.41.170.23:3128",
#     "rsync_proxy" => "http://192.41.170.23:3128",
#     "no_proxy" => "localhost,127.0.0.1,localaddress,.localdomain.com",
#
#     "HTTP_PROXY" => $http_proxy,
#     "HTTPS_PROXY" => $https_proxy,
#     "FTP_PROXY" => $ftp_proxy,
#     "RSYNC_PROXY" => $rsync_proxy,
#     "NO_PROXY" => $no_proxy
# }

# Configuration
# =============
# You can set any configuration variable like in config/deploy.rb
# These variables are then only loaded and set in this stage.
# For available Capistrano configuration variables see the documentation page.
# http://capistranorb.com/documentation/getting-started/configuration/
# Feel free to add new variables to customise your setup.



# Custom SSH Options
# ==================
# You may pass any option but keep in mind that net/ssh understands a
# limited set of options, consult the Net::SSH documentation.
# http://net-ssh.github.io/net-ssh/classes/Net/SSH.html#method-c-start
#
# Global options
# --------------
#  set :ssh_options, {
#    keys: %w(/home/rlisowski/.ssh/id_rsa),
#    forward_agent: false,
#    auth_methods: %w(password)
#  }
#
# The server-based syntax can be used to override options:
# ------------------------------------
# server 'example.com',
#   user: 'user_name',
#   roles: %w{web app},
#   ssh_options: {
#     user: 'user_name', # overrides user setting above
#     keys: %w(/home/user_name/.ssh/id_rsa),
#     forward_agent: false,
#     auth_methods: %w(publickey password)
#     # password: 'please use keys'
#   }