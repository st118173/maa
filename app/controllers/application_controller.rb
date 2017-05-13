class ApplicationController < ActionController::Base
  layout "application"
  # reset captcha code after each request for security
  after_filter :reset_last_captcha_code!



  #before_action :authenticate_user!, :except => [:index, :show]
  protect_from_forgery with: :exception
  before_filter :get_pages
  protected

  def get_pages
    @emails ||= Email.all
  end
  def disable_nav
    @disable_nav = true
  end
  def configure_permitted_parameters
    # devise_parameter_sanitizer.for(:sign_up) { |u| u.permit( :email, :password) }
    devise_parameter_sanitizer.permit(:sign_up, keys: [:email, :password])
    devise_parameter_sanitizer.permit(:account_update, keys: [:email, :password, :current_password, :date_of_birth])
    #devise_parameter_sanitizer.for(:account_update) { |u| u.permit( :email, :password, :current_password, :date_of_birth) }
  end

  def after_sign_up_path_for(resource)
    case resource
      when @user then
        if request.referrer.to_s.include? "sign_up"
          new_reg_path
        else
          root_path
        end
when current_user.email='st11873@ait.asia' then programs_path
    end
  end
  def after_sign_out_path_for(resource_or_scope)
    root_path
  end
end
