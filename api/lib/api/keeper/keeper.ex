defmodule Api.Keeper do

  import Ecto.Query, warn: false
  alias Api.Repo

  alias Api.{Keeper.Participant, Keeper.Box, Keeper.Deposit, Keeper.Debt}
  alias Api.Accounts.User

  alias Ecto.Multi

  require IEx

  def get_participants(user) do
    user
    |> Ecto.assoc(:participants)
    |> Repo.all
    |> Repo.preload(box: [participants: [deposits: [:debts], debts: []]], debts: [])
  end

  def create_box(%User{} = user, attrs \\ %{}) do
    Multi.new
    |> Multi.insert(:participant, Participant.changeset(%Participant{}, user, %{}))
    |> Multi.merge(fn (%{participant: participant}) -> create_box_with_participant(participant, attrs) end)
    |> Repo.transaction()
  end

  def get_participant!(id), do: Repo.get!(Participant, id)

  def create_participant(%User{} = user, attrs \\ %{}) do
    %Participant{}
    |> Participant.changeset(user, attrs)
    |> Repo.insert()
  end

  def update_participant(%Participant{} = participant, attrs) do
    participant
    |> Participant.changeset(attrs)
    |> Repo.update()
  end

  def delete_participant(%Participant{} = participant) do
    Repo.delete(participant)
  end

  def change_participant(%Participant{} = participant) do
    Participant.changeset(participant, %{})
  end

  defp create_box_with_participant(participant, attrs) do
    Multi.new
    |> Multi.insert(:box, Box.changeset(%Box{}, participant, attrs))
  end
end
