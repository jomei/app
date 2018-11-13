defmodule Api.Repo.Migrations.AddRelations do
  use Ecto.Migration

  def change do
    alter table(:participants) do
      add :user_id, references(:users)
      add :box_id, references(:boxes)
    end

    alter table(:positions) do
      add :box_id, references(:boxes)
    end
  end
end
