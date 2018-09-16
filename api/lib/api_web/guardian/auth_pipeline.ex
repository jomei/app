defmodule ApiWeb.Guardian.AuthPipeline do
  use Guardian.Plug.Pipeline, otp_app: :api,
                              module: Api.Guardian,
                              error_handler: ApiWeb.Guardian.ErrorHandler

  plug Guardian.Plug.VerifySession
  plug Guardian.Plug.VerifyHeader, realm: "Bearer"
  plug Guardian.Plug.EnsureAuthenticated
  plug Guardian.Plug.LoadResource
end