require 'test_helper'

class CoursesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @course = courses(:one)
  end

  test "should get index" do
    get courses_url
    assert_response :success
  end

  test "should get new" do
    get new_course_url
    assert_response :success
  end

  test "should create course" do
    assert_difference('Course.count') do
      post courses_url, params: { course: { name: @course.name, status: @course.status, upload_content_type: @course.upload_content_type, upload_file_name: @course.upload_file_name, upload_file_size: @course.upload_file_size, upload_updated_at: @course.upload_updated_at, visible: @course.visible } }
    end

    assert_redirected_to course_url(Course.last)
  end

  test "should show course" do
    get course_url(@course)
    assert_response :success
  end

  test "should get edit" do
    get edit_course_url(@course)
    assert_response :success
  end

  test "should update course" do
    patch course_url(@course), params: { course: { name: @course.name, status: @course.status, upload_content_type: @course.upload_content_type, upload_file_name: @course.upload_file_name, upload_file_size: @course.upload_file_size, upload_updated_at: @course.upload_updated_at, visible: @course.visible } }
    assert_redirected_to course_url(@course)
  end

  test "should destroy course" do
    assert_difference('Course.count', -1) do
      delete course_url(@course)
    end

    assert_redirected_to courses_url
  end
end
