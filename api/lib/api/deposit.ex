defmodule Api.Deposit do
  use Ecto.Schema
  import Ecto.Changeset


  schema "deposits" do
    field :amount, Money.Ecto.Type
    field :comment, :string

    timestamps()
  end

  @doc false
  def changeset(deposit, attrs) do
    deposit
    |> cast(attrs, [:amount])
    |> validate_required([:amount])
  end
end
