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

    post "/sign_up", AuthController, :sign_up
    post "/sign_in", AuthController, :sign_in
    post "/logout", AuthController, :logout
  end

  scope "/api/v1", ApiWeb do
    pipe_through [:api, :jwt_authenticated]

    post "/get_user", UserController, :show
    resources "/boxes", BoxController
    resources "/participants", ParticipantController
    get "/home", HomeController, :show
  end
end
