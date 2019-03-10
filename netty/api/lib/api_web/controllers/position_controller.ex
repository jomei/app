defmodule ApiWeb.PositionController do
  use ApiWeb, :controller

  action_fallback ApiWeb.FallbackController

  alias Api.{Keeper, Keeper.Box, Accounts.User}

  def create(conn, %{"position" => position_params}) do
    with {:ok, position} <- Keeper.create_position(position_params) do
      conn |> render("show.json", %{position: position})
    end
  end

  def update(conn, %{"id" => position_id, "assigned_to" => assigned_to_id}) do
    with {:ok, p} <- Keeper.get_position!(position_id),
         {:ok, position} <- Keeper.assign_position(p, assigned_to_id) do
      conn |> render("show.json", %{position: position})
    end
  end
end