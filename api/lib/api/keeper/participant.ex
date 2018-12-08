defmodule Api.Keeper.Participant do
  use Ecto.Schema
  import Ecto.Changeset

  alias Api.{Accounts.User, Keeper.Box, Keeper.Participant, Keeper.Position}


  schema "participants" do
    belongs_to :user, User
    belongs_to :box, Box

    field :is_admin, :boolean, default: false

    timestamps()
  end

  def changeset(participant, attrs) do
    participant
    |> cast(attrs, [:user_id, :box_id])
    |> assoc_constraint(:box)
    |> assoc_constraint(:user)
    |> validate_required([])
  end

  def changeset(participant, user, attrs) do
    changeset(participant, attrs)
    |> put_assoc(:user, user)
  end

  def paid_positions(participant) do
    participant.box.positions
    |> Enum.filter(&(&1.paid_by == participant.id))
  end

  def paid_amount(participant) do
    participant
    |> paid_positions
    |> Enum.reduce(Money.new(0), &(Money.add(&1, &2)))
  end

  def assigned_positions(participant) do
    participant.box.positions
    |> Enum.filter(&(&1.assigned_to == participant.id))
  end

  def assigned_amount(participant) do
    participant
    |> assigned_positions
    |> Enum.reduce(Money.new(0), &(Money.add(&1, &2)))
  end


end
