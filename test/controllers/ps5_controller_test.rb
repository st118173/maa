require 'test_helper'

class Ps5ControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get ps5_index_url
    assert_response :success
  end

  test "should get home" do
    get ps5_home_url
    assert_response :success
  end

end
