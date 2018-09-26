defmodule Api.Keeper.Box do
  use Ecto.Schema
  import Ecto.Changeset

  alias Api.{Keeper.Participant, Keeper.Box, Accounts.User}


  schema "boxes" do
    field :title, :string

    has_many :participants, Api.Keeper.Participant
    timestamps()
  end

  def changeset(box, attrs) do
    box
    |> cast(attrs, [:title])
    |> validate_required([:title])
  end

  def changeset(%Box{} = box, %Participant{} = participant, attrs) do
    changeset(box, attrs)
    |> put_assoc(:participants, [participant])
  end

  def total(%Box{} = box) do
    box.participants
    |> Enum.reduce(0, fn p, acc -> acc + Participant.total_deposit(p) end)
  end

  def user_allowed?(%Box{} = box, %User{} = user) do
    box.participants
    |> Enum.any?(&(&1.user_id == user.id))
  end
end
