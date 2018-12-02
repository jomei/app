defmodule ApiWeb.BoxView do
  use ApiWeb, :view

  alias ApiWeb.{BoxView, ParticipantView}
  alias Api.{Keeper.Box, Keeper.Participant}
  require IEx

  def render("show.json", %{box: box}) do
    render("without_participants.json", %{box: box})
    |> Map.put(:participants, render_many(box.participants, ParticipantView, "show.json"))
  end

  def render("without_participants.json", %{box: box}) do
    %{
      title: box.title,
      total: Box.total(box),
    }
  end

  def render("created.json", _) do
    %{status: :ok}
  end
end