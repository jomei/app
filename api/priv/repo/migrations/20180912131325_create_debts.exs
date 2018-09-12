defmodule Api.Repo.Migrations.CreateDebts do
  use Ecto.Migration

  def change do
    create table(:debts) do
      add :amount, :integer

      timestamps()
    end

  end
end
