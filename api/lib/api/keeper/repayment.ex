defmodule Api.Keeper.Repayment do
  use Ecto.Schema
  import Ecto.Changeset


  schema "repayments" do
    field :amount, Money.Ecto.Type
    belongs_to :from_participant, Api.Keeper.Participant
    belongs_to :to_participant, Api.Keeper.Participant
    timestamps()
  end

  @doc false
  def changeset(debt, attrs) do
    debt
    |> cast(attrs, [:amount])
    |> validate_required([:amount, :from_participant, :to_participant])
  end
end
