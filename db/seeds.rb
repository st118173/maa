# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
# Initial Data for Role
@admin = Role.create(name: "Admin")
@member = Role.create(name: "Member")
@volunteer = Role.create(name: "Volunteer")
# Admin
User.create(email: "st118173@ait.asia", password: "secret123",
            password_confirmation: "secret123", role_id: @admin.id)
# Member
# User.create(email: "jntu784@gmail.com", password: "secret123",
#             password_confirmation: "secret123", role_id: @member.id)
# User.create(email: "volunteer@ait.asia", password: "secret123",
#             password_confirmation: "secret123", role_id: @volunteer.id)
