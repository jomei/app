defmodule Api.Repo.Migrations.ParticipantsBelongsToUsers do
  use Ecto.Migration

  def change do
    alter table(:participants) do
      add :user_id, references(:users)
    end
  end
end
