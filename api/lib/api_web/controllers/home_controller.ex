defmodule ApiWeb.HomeController do
  use ApiWeb, :controller

  alias Api.{Keeper}

  require IEx

  def show(conn, _) do
    with user <- Guardian.Plug.current_resource(conn),
         participants <- Keeper.get_participants(user) do
      conn |> render("show.json", %{user: user, participants: participants})
    end
  end
end