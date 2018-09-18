defmodule Api.Keeper.Participant do
  use Ecto.Schema
  import Ecto.Changeset

  alias Api.{Accounts.User, Keeper.Box, Keeper.Debt, Keeper.Deposit, Keeper.Participant}


  schema "participants" do
    belongs_to :user, User
    belongs_to :box, Box

    has_many :deposits, Deposit
    has_many :debts, Debt

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

  def total_debt(%Participant{} = p)do
    p.debts
    |> Enum.map(&(&1.amount)) #todo: currency
    |> Enum.reduce(0, fn debt, acc -> debt.amount + acc end)
  end

  def total_deposit(%Participant{} = p) do
    p.deposits
    |> Enum.map(&(&1.amount)) #todo: currency
    |> Enum.reduce(0, fn deposit, acc -> deposit.amount + acc end)
  end
end
