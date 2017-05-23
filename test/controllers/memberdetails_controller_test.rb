require 'test_helper'

class MemberdetailsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @memberdetail = memberdetails(:one)
  end

  test "should get index" do
    get memberdetails_url
    assert_response :success
  end

  test "should get new" do
    get new_memberdetail_url
    assert_response :success
  end

  test "should create memberdetail" do
    assert_difference('Memberdetail.count') do
      post memberdetails_url, params: { memberdetail: { bloodgroup: @memberdetail.bloodgroup, fathername: @memberdetail.fathername, fullname: @memberdetail.fullname, phnumber: @memberdetail.phnumber } }
    end

    assert_redirected_to memberdetail_url(Memberdetail.last)
  end

  test "should show memberdetail" do
    get memberdetail_url(@memberdetail)
    assert_response :success
  end

  test "should get edit" do
    get edit_memberdetail_url(@memberdetail)
    assert_response :success
  end

  test "should update memberdetail" do
    patch memberdetail_url(@memberdetail), params: { memberdetail: { bloodgroup: @memberdetail.bloodgroup, fathername: @memberdetail.fathername, fullname: @memberdetail.fullname, phnumber: @memberdetail.phnumber } }
    assert_redirected_to memberdetail_url(@memberdetail)
  end

  test "should destroy memberdetail" do
    assert_difference('Memberdetail.count', -1) do
      delete memberdetail_url(@memberdetail)
    end

    assert_redirected_to memberdetails_url
  end
end
