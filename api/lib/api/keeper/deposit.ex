defmodule Api.Keeper.Deposit do
  use Ecto.Schema
  import Ecto.Changeset


  schema "deposits" do
    field :amount, Money.Ecto.Type
    field :title, :string
    belongs_to :participant, Api.Keeper.Participant

    has_many :debts, Api.Keeper.Debt

    timestamps()
  end

  @doc false
  def changeset(deposit, attrs) do
    deposit
    |> cast(attrs, [:amount])
    |> validate_required([:amount])
  end
end
