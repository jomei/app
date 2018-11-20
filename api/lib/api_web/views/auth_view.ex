defmodule ApiWeb.AuthView do
  use ApiWeb, :view
  alias ApiWeb.{AuthView, UserView}

  def render("auth.json", %{user: user, token: token}) do
    %{
      user: render_one(user, UserView, "show.json"),
      token: token
    }
  end

end
