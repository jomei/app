defmodule ApiWeb.AuthController do
  use ApiWeb, :controller

  action_fallback ApiWeb.FallbackController

  alias Api.Accounts
  alias Api.Accounts.User
  alias Api.Guardian

  def sign_up(conn, %{"auth" => user_params}) do
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

  def current() do

  end
end