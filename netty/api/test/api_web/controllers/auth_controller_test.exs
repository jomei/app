defmodule ApiWeb.AuthControllerTest do
  use ApiWeb.ConnCase

  @create_attrs %{email: "some@email", password: "1234", password_confirmation: "1234"}

  describe "create user" do
    test "renders user when data is valid", %{conn: conn} do
      conn = post conn, auth_path(conn, :sign_up), auth: @create_attrs
      assert %{"id" => id} = json_response(conn, 201)["data"]

#      conn = get conn, user_path(conn, :show, id)
#      assert json_response(conn, 200)["data"] == %{
#               "id" => id,
#               "email" => "some email",
#               "password_hash" => "some password_hash"}
    end

    test "fails with incorrect email" do

    end
    test "fails with incorrect password" do

    end
  end

end
