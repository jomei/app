defmodule Api.Keeper.Debt do
  use Ecto.Schema
  import Ecto.Changeset


  schema "debts" do
    field :amount, Money.Ecto.Type
    belongs_to :deposit, Api.Keeper.Deposit
    belongs_to :participant, Api.Keeper.Participant
    timestamps()
  end

  @doc false
  def changeset(debt, attrs) do
    debt
    |> cast(attrs, [:amount])
    |> validate_required([:amount])
  end
end
