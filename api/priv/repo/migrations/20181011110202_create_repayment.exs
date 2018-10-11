defmodule Api.Repo.Migrations.CreateRepayment do
  use Ecto.Migration

  def change do
    create table(:repayments) do
      add :amount, :integer
      add :from_participant,  references(:participants)
      add :to_participant,  references(:participants)
      timestamps()
    end
  end
end
