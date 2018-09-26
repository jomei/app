defmodule ApiWeb.BoxView do
  use ApiWeb, :view

  alias ApiWeb.{BoxView, ParticipantView}
  alias Api.{Keeper.Box, Keeper.Participant}
  require IEx

  def render("show.json", params) do
    %{data: render("box.json", params)}
  end

  def render("box.json", %{box: box}) do
    %{
      title: box.title,
      participants: render_many(box.participants, ParticipantView, "participant.json")
    }
  end
end