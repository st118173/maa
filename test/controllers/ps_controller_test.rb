require 'test_helper'

class PsControllerTest < ActionDispatch::IntegrationTest
  test "should get ps4" do
    get ps_ps4_url
    assert_response :success
  end

  test "should get ps5" do
    get ps_ps5_url
    assert_response :success
  end

end
