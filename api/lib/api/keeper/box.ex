defmodule Api.Keeper.Box do
  use Ecto.Schema
  import Ecto.Changeset

  alias Api.{Keeper.Participant, Keeper.Box, Accounts.User}


  schema "boxes" do
    field :title, :string

    has_many :participants, Api.Keeper.Participant
    has_many :positions, Api.Keeper.Position
    timestamps()
  end

  def changeset(box, attrs) do
    box
    |> cast(attrs, [:title])
    |> validate_required([:title])
  end

  def user_allowed?(%Box{} = box, %User{} = user) do
    box.participants
    |> Enum.any?(&(&1.user_id == user.id))
  end

  def total(box) do
    box.positions
    |> Enum.reduce(Money.new(0), &(Money.add(&1, &2)))
  end
end
