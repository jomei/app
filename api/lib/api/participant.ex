defmodule Api.Participant do
  use Ecto.Schema
  import Ecto.Changeset


  schema "participants" do
    belongs_to :box, Api.Box

    timestamps()
  end

  @doc false
  def changeset(participant, attrs) do
    participant
    |> cast(attrs, [])
    |> validate_required([])
  end
end
