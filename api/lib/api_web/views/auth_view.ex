defmodule ApiWeb.AuthView do
  use ApiWeb, :view
  alias ApiWeb.{AuthView, UserView}

  def render("sign_up.json", %{user: user, token: token}) do
    %{
      user: render_one(user, UserView, "show.json"),
      token: token
    }
  end

  def render("token.json", %{token: token}) do
    %{token: token}
  end
end
