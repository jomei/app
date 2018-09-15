# This file is responsible for configuring your application
# and its dependencies with the aid of the Mix.Config module.
#
# This configuration file is loaded before any dependency and
# is restricted to this project.
use Mix.Config

# General application configuration
config :api,
  ecto_repos: [Api.Repo]

# Configures the endpoint
config :api, ApiWeb.Endpoint,
  url: [host: "localhost"],
  secret_key_base: "vi5kmqNy/4jkcAiwY08Y/NX+cYHVggOa+bTpSncLSzlW/VvBcDiybpjeNju8ub9R",
  render_errors: [view: ApiWeb.ErrorView, accepts: ~w(json)],
  pubsub: [name: Api.PubSub,
           adapter: Phoenix.PubSub.PG2]

# Configures Elixir's Logger
config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:user_id]

# Secret key. You can use `mix guardian.gen.secret` to get one
config :api, Api.Guardian,
       issuer: "api",
       secret_key: "6hcdpjsK5rcK1XscnlILzKzqo85Ya3p5ZpNBr+fx9XbfrLl6SSqGLA/D45UBxVUz"

config :money,
       default_currency: :RUR,
       separator: ".",
       delimeter: ",",
       symbol: false,
       symbol_on_right: false,
       symbol_space: false


# Import environment specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.
import_config "#{Mix.env}.exs"
