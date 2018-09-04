defmodule Api.Account.User do
  use Ecto.Schema
  import Ecto.Changeset


  schema "users" do
    field :email, :string
    field :first_name, :string
    field :last_name, :string
    field :password, :string

    has_many :participants, Api.Participant

    timestamps()
  end

  @doc false
  def changeset(user, attrs \\ %{}) do
    user
    |> cast(attrs, [:email, :first_name, :last_name, :password])
    |> validate_required([:email, :password])
    |> unique_constraint(:email)
  end

  def registration_changeset(user, params) do
    user
    |> changeset(params)
    |> cast(params, ~w(password)a, [])
    |> validate_length(:password, min: 6, max: 100)
    |> hash_password
  end

  defp hash_password(changeset) do
    case changeset do
      %Ecto.Changeset{valid?: true,
        changes: %{password: password}} ->
        put_change(changeset,
          :password,
          Comeonin.Bcrypt.hashpwsalt(password))
      _ ->
        changeset
    end
  end
end
