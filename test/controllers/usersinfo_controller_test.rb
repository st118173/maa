require 'test_helper'

class UsersinfoControllerTest < ActionDispatch::IntegrationTest
  include Devise::Test::IntegrationHelpers
  test "should get User" do
    sign_in users(:one)
    get usersinfo_User_url
    assert_response :success
  end

  test "should get userlist" do
    sign_in users(:one)
    get usersinfo_userlist_url
    assert_response :success
  end

  test "should get userstat" do
    sign_in users(:one)
    get usersinfo_userstat_url
    assert_response :success
  end

end
