defmodule ApiWeb.Router do
  use ApiWeb, :router

  # Our pipeline implements "maybe" authenticated. We'll use the `:ensure_auth` below for when we need to make sure someone is logged in.
  pipeline :auth do
    plug Api.Account.Pipeline
  end

  # We use ensure_auth to fail if there is no one logged in
  pipeline :ensure_auth do
    plug Guardian.Plug.EnsureAuthenticated
  end

  pipeline :browser do
    plug :accepts, ["html"]
    plug :fetch_session
    plug :fetch_flash
    plug :protect_from_forgery
    plug :put_secure_browser_headers
  end

  pipeline :api do
    plug :accepts, ["json"]
#    plug Guardian.Plug.VerifySession
#    plug Guardian.Plug.LoadResource
  end

  scope "/", ApiWeb do
    pipe_through [:browser]

    get "/", PageController, :index

    resources "/users", Account.UserController, only: [:show, :new, :create]
    resources "/auth", Account.AuthController, only: [:new, :create, :delete]
  end

  # Other scopes may use custom stacks.
  # scope "/api", ApiWeb do
  #   pipe_through :api
  # end
end
