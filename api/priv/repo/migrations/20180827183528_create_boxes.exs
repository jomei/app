defmodule Api.Repo.Migrations.CreateBoxes do
  use Ecto.Migration

  def change do
    create table(:boxes) do
      add :name, :string

      timestamps()
    end

  end
end
