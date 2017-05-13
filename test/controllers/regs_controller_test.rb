require 'test_helper'

class RegsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @reg = regs(:one)
  end

  test "should get index" do
    get regs_url
    assert_response :success
  end

  test "should get new" do
    get new_reg_url
    assert_response :success
  end

  test "should create reg" do
    assert_difference('Reg.count') do
      post regs_url, params: { reg: { company: @reg.company, email: @reg.email, full_name: @reg.full_name, member_role: @reg.member_role, telephone: @reg.telephone } }
    end

    assert_redirected_to reg_url(Reg.last)
  end

  test "should show reg" do
    get reg_url(@reg)
    assert_response :success
  end

  test "should get edit" do
    get edit_reg_url(@reg)
    assert_response :success
  end

  test "should update reg" do
    patch reg_url(@reg), params: { reg: { company: @reg.company, email: @reg.email, full_name: @reg.full_name, member_role: @reg.member_role, telephone: @reg.telephone } }
    assert_redirected_to reg_url(@reg)
  end

  test "should destroy reg" do
    assert_difference('Reg.count', -1) do
      delete reg_url(@reg)
    end

    assert_redirected_to regs_url
  end
end
