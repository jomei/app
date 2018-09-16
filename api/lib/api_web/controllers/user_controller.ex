defmodule ApiWeb.UserController do
  use ApiWeb, :controller

  action_fallback ApiWeb.FallbackController

  alias Api.Accounts
  alias Api.Accounts.User
  alias Api.Guardian

  require IEx

  def index(conn, _params) do
    users = Accounts.list_users()
    render(conn, "index.json", users: users)
  end

  def create(conn, %{"user" => user_params}) do
    with {:ok, %User{} = user} <- Accounts.create_user(user_params),
         {:ok, token, _claims} <- Guardian.encode_and_sign(user) do
      conn |> render("sign_up.json", user: user, token: token)
    end
  end

  def sign_in(conn, %{"email" => email, "password" => password}) do
    case Accounts.token_sign_in(email, password) do
      {:ok, token, _claims} ->
        conn |> render("token.json", token: token)
      _ ->
        {:error, :unauthorized}
    end
  end

  # todo: separate user controller and auth
  def show(conn, %{"email" => email}) do

    case Accounts.get_by_email(email) do
      {:ok, user} ->
        conn |> render("show.json", user: user)
      _ -> {:error, :not_found}
    end
  end

  def update(conn, %{"id" => id, "user" => user_params}) do
    user = Accounts.get_user!(id)

    with {:ok, %User{} = user} <- Accounts.update_user(user, user_params) do
      render(conn, "show.json", user: user)
    end
  end

  def delete(conn, %{"id" => id}) do
    user = Accounts.get_user!(id)
    with {:ok, %User{}} <- Accounts.delete_user(user) do
      send_resp(conn, :no_content, "")
    end
  end
end
