defmodule Api.Keeper.Box do
  use Ecto.Schema
  import Ecto.Changeset

  alias Api.{Keeper.Participant, Keeper.Box}


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

  def changeset(box, participant, attrs) do
    changeset(box, attrs)
    |> put_assoc(:participants, [participant])
  end

  def total(%Box{} = box) do
    box.deposits
    |> Enum.map &(&1.amount) #todo: currency
    |> Enum.reduce(0, fn deposit, acc -> acc + deposit.amount end)
  end
end
