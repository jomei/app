defmodule ApiWeb.Account.AuthController do
  use ApiWeb, :controller

  import Comeonin.Bcrypt, only: [checkpw: 2, dummy_checkpw: 0]

  alias Api.Account.User
  alias Api.Account.Guardian

  def new(conn, _) do
    changeset = Api.Account.change_user(%User{})
    maybe_user = Guardian.Plug.current_resource(conn)
    if maybe_user do
      redirect(conn, to: "/boxes")
    else
      render(conn, "new.html", changeset: changeset, action: auth_path(conn, :create))
    end
  end

  def create(conn, %{"session" => %{"email" => email, "password" => password}}) do
    Api.Account.authenticate_user(email, password)
    |> login_reply(conn)
  end

  def logout(conn, _) do
    conn
    |> Guardian.Plug.sign_out()
    |> redirect(to: "/login")
  end

  defp login_reply({:ok, user}, conn) do
    require IEx; IEx.pry
    conn
    |> put_flash(:success, "Welcome back!")
    |> Guardian.Plug.sign_in(user)
    |> redirect(to: "/")
  end

  defp login_reply({:error, reason}, conn) do
    conn
    |> put_flash(:error, to_string(reason))
    |> redirect(to: "/login")
  end

end