defmodule ApiWeb.Router do
  use ApiWeb, :router

  pipeline :api do
    plug :accepts, ["json"]
  end

  scope "/api", ApiWeb do
    pipe_through :api
  end

  scope "/api/v1", ApiWeb do
    pipe_through :api

    resources "/users", UserController, only: [:create, :show]
  end
end
