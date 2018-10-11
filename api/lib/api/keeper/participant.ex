defmodule Api.Keeper.Participant do
  use Ecto.Schema
  import Ecto.Changeset

  alias Api.{Accounts.User, Keeper.Box, Keeper.Debt, Keeper.Deposit, Keeper.Participant, Keeper.Repayment}


  schema "participants" do
    belongs_to :user, User
    belongs_to :box, Box

    has_many :deposits, Deposit
    has_many :debts, Debt
    has_many :repayments_from, Repayment
    has_many :repayments_to, Repayment

    timestamps()
  end

  def changeset(participant, attrs) do
    participant
    |> cast(attrs, [])
    |> validate_required([])
  end

  def changeset(participant, user, attrs) do
    changeset(participant, attrs)
    |> put_assoc(:user, user)
  end

  def total_deposit(%Participant{} = p) do
    p.deposits
    |> Enum.map(&(&1.amount)) #todo: currency
    |> Enum.reduce(0, fn deposit, acc -> deposit.amount + acc end)
  end
end
