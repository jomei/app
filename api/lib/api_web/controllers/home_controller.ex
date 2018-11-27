defmodule ApiWeb.HomeController do
  use ApiWeb, :controller

  alias Api.{Keeper, Accounts}

  require IEx

  def show(conn, _) do
    with user <- Guardian.Plug.current_resource(conn),
         contacts <- Accounts.get_contacts(user),
         participants <- Keeper.get_participants(user) do
      conn |> render("show.json", %{user: user, participants: participants, contacts: contacts})
    end
  end
end