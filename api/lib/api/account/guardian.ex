defmodule Api.Account.Guardian do
  use Guardian, otp_app: :api
  alias Api.Account
  alias Api.Account.User

  def subject_for_token(%User{} = user, _claims) do
    {:ok, to_string(user.id)}
  end

  def resource_from_claims(%{"sub" => id}) do
    case Account.get_user!(id) do
      nil -> {:error, :resource_not_found}
      user -> {:ok, user}
    end
  end
end