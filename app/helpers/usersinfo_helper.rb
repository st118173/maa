module UsersinfoHelper
  def check_role(user_id)
    user = User.find(user_id)
    role = Role.all
    current_role = user.role.id
    if current_role == 2
      current_role = "Demote"
    elsif current_role == 3
      current_role = "Promote"
    end

  end

  def check_status(user_id)
    user = User.find(user_id)
    current_status = user.is_active
    if current_status == 1
      current_status = "Suspend"
    else
      current_status = "Release"
    end


  end
end
