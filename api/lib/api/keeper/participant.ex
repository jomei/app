defmodule Api.Keeper.Participant do
  use Ecto.Schema
  import Ecto.Changeset


  schema "participants" do

    timestamps()
  end

  @doc false
  def changeset(participant, attrs) do
    participant
    |> cast(attrs, [])
    |> validate_required([])
  end
end
