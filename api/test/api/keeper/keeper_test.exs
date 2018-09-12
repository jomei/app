defmodule Api.KeeperTest do
  use Api.DataCase

  alias Api.Keeper

  describe "participants" do
    alias Api.Keeper.Participant

    @valid_attrs %{}
    @update_attrs %{}
    @invalid_attrs %{}

    def participant_fixture(attrs \\ %{}) do
      {:ok, participant} =
        attrs
        |> Enum.into(@valid_attrs)
        |> Keeper.create_participant()

      participant
    end

    test "list_participants/0 returns all participants" do
      participant = participant_fixture()
      assert Keeper.list_participants() == [participant]
    end

    test "get_participant!/1 returns the participant with given id" do
      participant = participant_fixture()
      assert Keeper.get_participant!(participant.id) == participant
    end

    test "create_participant/1 with valid data creates a participant" do
      assert {:ok, %Participant{} = participant} = Keeper.create_participant(@valid_attrs)
    end

    test "create_participant/1 with invalid data returns error changeset" do
      assert {:error, %Ecto.Changeset{}} = Keeper.create_participant(@invalid_attrs)
    end

    test "update_participant/2 with valid data updates the participant" do
      participant = participant_fixture()
      assert {:ok, participant} = Keeper.update_participant(participant, @update_attrs)
      assert %Participant{} = participant
    end

    test "update_participant/2 with invalid data returns error changeset" do
      participant = participant_fixture()
      assert {:error, %Ecto.Changeset{}} = Keeper.update_participant(participant, @invalid_attrs)
      assert participant == Keeper.get_participant!(participant.id)
    end

    test "delete_participant/1 deletes the participant" do
      participant = participant_fixture()
      assert {:ok, %Participant{}} = Keeper.delete_participant(participant)
      assert_raise Ecto.NoResultsError, fn -> Keeper.get_participant!(participant.id) end
    end

    test "change_participant/1 returns a participant changeset" do
      participant = participant_fixture()
      assert %Ecto.Changeset{} = Keeper.change_participant(participant)
    end
  end
end
