defmodule Api.Repo.Migrations.CreateParticipants do
  use Ecto.Migration

  def change do
    create table(:participants) do
      add :balance, :integer
      add :user_id, references(:users)
      timestamps()
    end

  end
end
