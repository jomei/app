defmodule Api.Repo.Migrations.CreateDeposits do
  use Ecto.Migration

  def change do
    create table(:deposits) do
      add :amount, :integer
      add :title, :string

      timestamps()
    end

  end
end
