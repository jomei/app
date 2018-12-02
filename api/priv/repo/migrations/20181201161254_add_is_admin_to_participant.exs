defmodule Api.Repo.Migrations.AddIsAdminToParticipant do
  use Ecto.Migration

  def change do
    alter table(:participants) do
      add :is_admin, :bool
    end
  end
end
