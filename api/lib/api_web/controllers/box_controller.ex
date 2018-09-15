defmodule ApiWeb.BoxController do
  use ApiWeb, :controller

  action_fallback ApiWeb.FallbackController

  alias Api.{Keeper, Keeper.Box, Accounts.User}

  def create(conn, %{"box" => box_params}) do
    with {:ok, %User{} = user} <- Guardian.Plug.current_resource(conn),
         {:ok, %Box{} = box} <- Keeper.create_box(user, box_params) do
      conn |> render("created.json", %{box: box})
    end
  end

  def update(conn, %{"id" => id, "box" => box_params}) do

  end

  def index(conn, _params) do
    with {:ok, %User{} = user} <- Guardian.Plug.current_resource(conn) do
      conn |> render("boxes.json", %{boxes: Keeper.get_participants(user)})
    end
  end
end