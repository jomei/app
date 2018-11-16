defmodule ApiWeb.AuthView do
  use ApiWeb, :view
  alias ApiWeb.AuthView

  def render("sign_up.json", %{user: user, token: token}) do
    %{
      user: user,
      token: token
    }
  end

  def render("token.json", %{token: token}) do
    %{token: token}
  end
end
