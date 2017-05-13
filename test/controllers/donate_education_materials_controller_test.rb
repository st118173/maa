require 'test_helper'

class DonateEducationMaterialsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @donate_education_material = donate_education_materials(:one)
  end

  test "should get index" do
    get donate_education_materials_url
    assert_response :success
  end

  test "should get new" do
    get new_donate_education_material_url
    assert_response :success
  end

  test "should create donate_education_material" do
    assert_difference('DonateEducationMaterial.count') do
      post donate_education_materials_url, params: { donate_education_material: { address: @donate_education_material.address, contact: @donate_education_material.contact, email: @donate_education_material.email, name: @donate_education_material.name, text_donation: @donate_education_material.text_donation } }
    end

    assert_redirected_to donate_education_material_url(DonateEducationMaterial.last)
  end

  test "should show donate_education_material" do
    get donate_education_material_url(@donate_education_material)
    assert_response :success
  end

  test "should get edit" do
    get edit_donate_education_material_url(@donate_education_material)
    assert_response :success
  end

  test "should update donate_education_material" do
    patch donate_education_material_url(@donate_education_material), params: { donate_education_material: { address: @donate_education_material.address, contact: @donate_education_material.contact, email: @donate_education_material.email, name: @donate_education_material.name, text_donation: @donate_education_material.text_donation } }
    assert_redirected_to donate_education_material_url(@donate_education_material)
  end

  test "should destroy donate_education_material" do
    assert_difference('DonateEducationMaterial.count', -1) do
      delete donate_education_material_url(@donate_education_material)
    end

    assert_redirected_to donate_education_materials_url
  end
end
