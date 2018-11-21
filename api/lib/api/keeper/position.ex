defmodule Api.Keeper.Position do
  use Ecto.Schema
  import Ecto.Changeset

  alias Api.{Keeper.Box, Keeper.Participant}


  schema "positions" do
    field :paid_by, :integer
    field :assigned_to, :integer
    field :amount, Money.Ecto.Type
    belongs_to :box, Box

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

end
