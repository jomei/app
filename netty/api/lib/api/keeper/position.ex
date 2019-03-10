defmodule Api.Keeper.Position do
  use Ecto.Schema
  import Ecto.Changeset

  alias Api.{Keeper.Box, Keeper.Participant}


  schema "positions" do
    field :title, :string
    field :paid_by, :integer
    field :assigned_to, :integer
    field :amount, Money.Ecto.Type
    field :is_paid, :boolean, default: false
    belongs_to :box, Box

    timestamps()
  end

  def changeset(participant, attrs \\ %{}) do
    participant
    |> cast(attrs, [])
    |> validate_required([:title, :amount])
  end

end
