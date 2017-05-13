require 'test_helper'

class MdosControllerTest < ActionDispatch::IntegrationTest
  setup do
    @mdo = mdos(:one)
  end

  test "should get index" do
    get mdos_url
    assert_response :success
  end

  test "should get new" do
    get new_mdo_url
    assert_response :success
  end

  test "should create mdo" do
    assert_difference('Mdo.count') do
      post mdos_url, params: { mdo: { amount: @mdo.amount, company: @mdo.company, email: @mdo.email, full_name: @mdo.full_name, telephone: @mdo.telephone } }
    end

    assert_redirected_to mdo_url(Mdo.last)
  end

  test "should show mdo" do
    get mdo_url(@mdo)
    assert_response :success
  end

  test "should get edit" do
    get edit_mdo_url(@mdo)
    assert_response :success
  end

  test "should update mdo" do
    patch mdo_url(@mdo), params: { mdo: { amount: @mdo.amount, company: @mdo.company, email: @mdo.email, full_name: @mdo.full_name, telephone: @mdo.telephone } }
    assert_redirected_to mdo_url(@mdo)
  end

  test "should destroy mdo" do
    assert_difference('Mdo.count', -1) do
      delete mdo_url(@mdo)
    end

    assert_redirected_to mdos_url
  end
end
