require 'test_helper'

class UserpersnaldetsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @userpersnaldet = userpersnaldets(:one)
  end

  test "should get index" do
    get userpersnaldets_url
    assert_response :success
  end

  test "should get new" do
    get new_userpersnaldet_url
    assert_response :success
  end

  test "should create userpersnaldet" do
    assert_difference('Userpersnaldet.count') do
      post userpersnaldets_url, params: { userpersnaldet: { About_MAC: @userpersnaldet.About_MAC, Address: @userpersnaldet.Address, Age: @userpersnaldet.Age, Contact_Number: @userpersnaldet.Contact_Number, Name: @userpersnaldet.Name } }
    end

    assert_redirected_to userpersnaldet_url(Userpersnaldet.last)
  end

  test "should show userpersnaldet" do
    get userpersnaldet_url(@userpersnaldet)
    assert_response :success
  end

  test "should get edit" do
    get edit_userpersnaldet_url(@userpersnaldet)
    assert_response :success
  end

  test "should update userpersnaldet" do
    patch userpersnaldet_url(@userpersnaldet), params: { userpersnaldet: { About_MAC: @userpersnaldet.About_MAC, Address: @userpersnaldet.Address, Age: @userpersnaldet.Age, Contact_Number: @userpersnaldet.Contact_Number, Name: @userpersnaldet.Name } }
    assert_redirected_to userpersnaldet_url(@userpersnaldet)
  end

  test "should destroy userpersnaldet" do
    assert_difference('Userpersnaldet.count', -1) do
      delete userpersnaldet_url(@userpersnaldet)
    end

    assert_redirected_to userpersnaldets_url
  end
end
