class UsersinfoController < ApplicationController
  before_action :authenticate_user!, except: [:index, :show]
  before_filter :check_role ,except: :index
  def check_role
    if user_signed_in? && current_user.role_id ==nil
      redirect_to new_reg_path

    end
  end
  @@ban = 0
  def User
    #@success = CardTransaction.all
   if user_signed_in? &&
        if current_user.role_id.nil?
          redirect  new_reg_path
        end
    end
  end
  def show

  end

  def index
    #@success = CardTransaction.all
    @userlist = User.new

  end
  def rolename(id)
    @role_id = id
    @users = User.all
    @roles = Role.find(@role_id)
    @rolename = @roles.name
    return @rolename

  end
  helper_method :rolename

  def userlist

    @current_uri = request.env['PATH_INFO']
    @users = User.order(:created_at).reverse_order

    @user_id = @@ban
    us1 = User.where(role_id: 1).count
    @us1 =us1
    us2 = User.where(role_id: 2).count
    @us2 =us2
    us3 = User.where(role_id: 3).count
    @us3 =us3
    @us = @us1 + @us2 + @us3
  end



  def ban_or_unban
    user_id = params[:u_id]
    #@@ban = user_ids
    user = User.find(user_id)
    current_status = user.is_active
    if current_status == 0
      user.is_active = 1
      flash[:notice] = 'User Account is Unbanned successfully'
    else
      user.is_active = 0
      flash[:notice] = 'User Account is Banned please click Release to Unban'
    end
    user.save
    redirect_to usersinfo_userlist_path
  end

  def promote_or_demote
    user_id = params[:u_id]
    user = User.find(user_id)
    role = Role.all
    current_role = user.role.name
    if (current_role == "Volunteer")
      user.role_id = 2
      flash[:notice] = 'User is promoted as Member'
    else
      user.role_id = 3
      flash[:notice] = 'User is demoted as Volunteer'
    end
    user.save
    redirect_to usersinfo_userlist_path
  end

  def destroy
    user_id = params[:u_id]
    user = User.find(user_id)
    user.delete
    redirect_to usersinfo_userlist_path
  end
  def userstat
  end

  private
  def userlist_params
    params.require(:userlist).permit(:email,:is_active)
  end
end