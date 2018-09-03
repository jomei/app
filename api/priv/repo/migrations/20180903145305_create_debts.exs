defmodule Api.Repo.Migrations.CreateDebts do
  use Ecto.Migration

  def change do
    create table(:debts) do
      add :amount, :integer
      add :participant_id, references(:participants)
      add :box_id, references(:boxes)
      timestamps()
    end

  end
end
