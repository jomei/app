defmodule Api.Repo.Migrations.AddIsPaidToPosition do
  use Ecto.Migration

  def change do
    alter table(:positions) do
      add :is_paid, :bool
    end
  end
end
