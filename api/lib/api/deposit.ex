defmodule Api.Deposit do
  use Ecto.Schema
  import Ecto.Changeset


  schema "deposits" do
    field :amount, :integer
    belongs_to :participant, Api.Participant
    belongs_to :boxes, Api.Box
    timestamps()
  end

  @doc false
  def changeset(deposit, attrs) do
    deposit
    |> cast(attrs, [:amount])
    |> validate_required([:amount])
  end
end
