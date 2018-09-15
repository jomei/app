defmodule ApiWeb.Router do
  use ApiWeb, :router

  alias ApiWeb.Guardian

  pipeline :api do
    plug :accepts, ["json"]
  end

  pipeline :jwt_authenticated do
    plug Guardian.AuthPipeline
  end

  scope "/api", ApiWeb do
    pipe_through :api
  end

  scope "/api/v1", ApiWeb do
    pipe_through :api

    post "/sign_up", UserController, :create
    post "/sign_in", UserController, :sign_in
  end

  scope "/api/v1", ApiWeb do
    pipe_through [:api, :jwt_authenticated]

    resources "/boxes", BoxController
  end
end
