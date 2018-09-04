defmodule Api.Participant do
  use Ecto.Schema
  import Ecto.Changeset


  schema "participants" do
    field :balance, :integer, default: 0 #todo: add money type
    belongs_to :user, Api.Account.User
    has_many :deposits, Api.Deposit
    has_many :debts, Api.Debt
    timestamps()
  end

  @doc false
  def changeset(participant, attrs) do
    participant
    |> cast(attrs, [:balance])
    |> validate_required([:balance])
  end
end
