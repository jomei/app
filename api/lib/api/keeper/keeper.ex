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

  def create_box(current_user, box_attrs, other_users) do
    Multi.new
    |> Multi.insert(:box, Box.changeset(%Box{}, box_attrs))
    |> Multi.merge(fn %{box: box} ->
      box_related_multi(box.id, current_user.id)
    end)
    |> Repo.transaction()
  end

  def box_related_multi(box_id, user_id) do
    Multi.new
    |> Multi.insert(:participant, %Participant{box_id: box_id, user_id: user_id})
  end

  def get_participant!(id), do: Repo.get!(Participant, id)

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
    |> Repo.preload(participants: [:user], positions: [])

    case Box.user_allowed?(box, user) do
      true -> {:ok, box}
      _ -> {:error, :unauthorized}
    end
  end
end
