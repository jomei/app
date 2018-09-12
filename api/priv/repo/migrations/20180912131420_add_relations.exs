defmodule Api.Repo.Migrations.AddRelations do
  use Ecto.Migration

  def change do
    alter table(:participants) do
      add :user_id, references(:users)
    end

    alter table(:deposits) do
      add :participant_id, references(:participants)
      add :box_id, references(:boxes)
    end

    alter table(:debts) do
      add :participant_id, references(:participants)
      add :deposit_id, references(:deposits)
    end
  end
end
