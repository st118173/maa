module UserpersnaldetsHelper
	def username
		@username = Userpersnaldet.all
      	@username = @username.find(current_user.id)
      	@username = @username.Name
	end
end
