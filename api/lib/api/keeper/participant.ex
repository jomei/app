defmodule Api.Keeper.Participant do
  use Ecto.Schema
  import Ecto.Changeset


  schema "participants" do
    field :balance, Money.Ecto.Type, default: 0
    belongs_to :box, Api.Keeper.Box
    belongs_to :user, Api.Account.User

    timestamps()
  end

  @doc false
  def changeset(participant, attrs) do
    participant
    |> cast(attrs, [])
    |> validate_required([])
  end
end
