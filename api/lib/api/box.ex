defmodule Api.Box do
  use Ecto.Schema
  import Ecto.Changeset


  schema "boxes" do
    field :name, :string
    has_many :deposits, Api.Deposit
    has_many :debts, Api.Debt

    timestamps()
  end

  @doc false
  def changeset(box, attrs) do
    box
    |> cast(attrs, [:name])
    |> validate_required([:name])
  end
end
