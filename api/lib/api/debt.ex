defmodule Api.Debt do
  use Ecto.Schema
  import Ecto.Changeset


  schema "debts" do
    field :amount, :integer
    belongs_to :participant, Api.Participant
    belongs_to :boxes, Api.Box
    timestamps()
  end

  @doc false
  def changeset(debt, attrs) do
    debt
    |> cast(attrs, [:amount])
    |> validate_required([:amount])
  end
end
