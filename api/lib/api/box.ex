defmodule Api.Box do
  use Ecto.Schema
  import Ecto.Changeset


  schema "boxes" do
    field :title, :string

    timestamps()
  end

  @doc false
  def changeset(box, attrs) do
    box
    |> cast(attrs, [:title])
    |> validate_required([:title])
  end
end
