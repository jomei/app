defmodule ApiWeb.BoxController do
  use ApiWeb, :controller

  action_fallback ApiWeb.FallbackController

  alias Api.{Keeper, Keeper.Box, Accounts.User}

  def create(conn, %{"box" => box_params, "users" => users}) do
    with user <- Guardian.Plug.current_resource(conn),
         {:ok, _} <- Keeper.create_box(user, box_params, users) do

      conn |> render("created.json")
    end
  end


  def index(conn, %{"id" => box_id}) do
    with user <- Guardian.Plug.current_resource(conn),
         {:ok, box} <- Keeper.get_box!(box_id, user) do
      conn |> render("show.json", %{box: box, position: box.positions, participants: box.participants})
    end
  end
end