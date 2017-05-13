require 'test_helper'

class ProgramsControllerTest < ActionDispatch::IntegrationTest
  include Devise::Test::IntegrationHelpers
  include Warden::Test::Helpers
  Warden.test_mode!
  setup do
    @program = programs(:one)

  end

  test "should get index" do

    get programs_url
    assert_response :success
  end

  test "should get new" do
    sign_in users(:one)
    get new_program_url
    assert_response :success
    #li.write_attribute :cart, cart
  end

  test "should create program" do
    sign_in users(:one)
    assert_difference('Program.count') do
      post programs_url, params: { program: { Event_Name: @program.Event_Name } }

    end

    assert_redirected_to program_url(Program.last)
  end

  test "should not create program" do
    sign_in users(:one)
    assert_no_difference('Program.count') do
      post programs_url, params: { program: { Event_Name: "" } }

    end
  end

  test "should show program" do
    sign_in users(:one)
    get program_url(@program)
    assert_response :success
  end

  test "should get edit" do

    sign_in users(:one)
    get edit_program_url(@program)
    assert_response :success
  end

  test "should update program" do
    sign_in users(:one)
    patch program_url(@program), params: { program: { Event_Name: @program.Event_Name } }
    assert_redirected_to program_url(@program)
  end
  test "should not update program" do
    sign_in users(:one)
    patch program_url(@program), params: { program: { Event_Name: "" } }
    #assert_redirected_to program_url(@program ='nil')
  end

  test "should destroy program" do

     sign_in users(:one)
      assert_difference('Program.count', -1) do
      delete program_url(@program)
    end

    assert_redirected_to programs_url
  end
end
