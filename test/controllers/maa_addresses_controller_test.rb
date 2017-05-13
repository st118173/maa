require 'test_helper'

class MaaAddressesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @maa_address = maa_addresses(:one)
  end

  test "should get index" do
    get maa_addresses_url
    assert_response :success
  end

  test "should get new" do
    get new_maa_address_url
    assert_response :success
  end

  test "should create maa_address" do
    assert_difference('MaaAddress.count') do
      post maa_addresses_url, params: { maa_address: { postal_address: @maa_address.postal_address } }
    end

    assert_redirected_to maa_address_url(MaaAddress.last)
  end

  test "should show maa_address" do
    get maa_address_url(@maa_address)
    assert_response :success
  end

  test "should get edit" do
    get edit_maa_address_url(@maa_address)
    assert_response :success
  end

  test "should update maa_address" do
    patch maa_address_url(@maa_address), params: { maa_address: { postal_address: @maa_address.postal_address } }
    assert_redirected_to maa_address_url(@maa_address)
  end

  test "should destroy maa_address" do
    assert_difference('MaaAddress.count', -1) do
      delete maa_address_url(@maa_address)
    end

    assert_redirected_to maa_addresses_url
  end
end
