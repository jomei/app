defmodule Api.Repo.Migrations.AddPositions do
  use Ecto.Migration

  def change do
    create table(:positions) do
      add :title, :string
      add :amount, :integer
      add :assigned_to, :integer
      add :paid_by, :integer

      timestamps()
    end
  end
end
