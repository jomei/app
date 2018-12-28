defmodule ApiWeb.PositionController do
  use ApiWeb, :controller

  action_fallback ApiWeb.FallbackController

  alias Api.{Keeper, Keeper.Box, Accounts.User}

  def create(conn, %{"position" => position_params}) do
    with user <- Guardian.Plug.current_resource(conn)
         {:ok, position} <- Keeper.create_position(position_params) do

      conn |> render("show.json", %{position: position})
    end
  end


  def show(conn, %{"id" => box_id}) do
    with user <- Guardian.Plug.current_resource(conn),
         {:ok, box} <- Keeper.get_box!(box_id, user) do
      conn |> render("show.json", %{box: box, position: box.positions, participants: box.participants})
    end
  end
end