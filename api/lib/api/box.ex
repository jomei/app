defmodule Api.Box do
  use Ecto.Schema
  import Ecto.Changeset


  schema "boxes" do
    field :name, :string
    has_many :participants, Api.Participant

    timestamps()
  end

  @doc false
  def changeset(box, attrs) do
    box
    |> cast(attrs, [:name])
    |> validate_required([:name])
  end
end
