defmodule Api.Repo.Migrations.CreateParticipants do
  use Ecto.Migration

  def change do
    create table(:participants) do
      add :balance, :integer, default: 0
      timestamps()
    end

  end
end
