defmodule Api.Repo.Migrations.ParticipantsBelongsToBox do
  use Ecto.Migration

  def change do
    alter table(:participants) do
      add :box_id, references(:boxes)
    end
  end
end
