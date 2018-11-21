defmodule Api.Keeper do

  import Ecto.Query, warn: false
  alias Api.Repo

  alias Api.{Keeper.Participant, Keeper.Box}
  alias Api.Accounts.User

  alias Ecto.Multi

  require IEx

  def get_participants(user) do
    user
    |> Ecto.assoc(:participants)
    |> Repo.all
    |> Repo.preload(box: [:positions])
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

  def get_box!(box_id, user) do
    box = Box
    |> Repo.get(box_id)
#    |> Repo.preload(participants: [deposits: [:debts], debts: [], box: []])

    case Box.user_allowed?(box, user) do
      true -> {:ok, box}
      _ -> {:error, :unauthorized}
    end
  end

  defp create_box_with_participant(participant, attrs) do
    Multi.new
    |> Multi.insert(:box, Box.changeset(%Box{}, participant, attrs))
  end
end
