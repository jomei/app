defmodule ApiWeb.BoxController do
  use ApiWeb, :controller

  action_fallback ApiWeb.FallbackController

  alias Api.{Keeper, Keeper.Box, Accounts.User}
  require IEx
  def create(conn, %{"box" => box_params}) do
    with user <- Guardian.Plug.current_resource(conn),
         {:ok, %{box: %Box{} = box}} <- Keeper.create_box(user, box_params) do
      conn |> render("created.json", %{box: box})
    end
  end

  def update(conn, %{"id" => id, "box" => box_params}) do

  end

  def index(conn, _params) do
    with user <- Guardian.Plug.current_resource(conn) do
      conn |> render("index.json", %{participants: Keeper.get_participants(user)})
    end
  end

  def show(conn, %{"id" => box_id}) do
    with user <- Guardian.Plug.current_resource(conn),
         {:ok, box} <- Keeper.get_box!(box_id, user) do
      conn |> render("show.json", %{box: box})
    end
  end
end