defmodule ApiWeb.BoxView do
  use ApiWeb, :view

  alias ApiWeb.{BoxView, ParticipantView}
  alias Api.{Keeper.Box, Keeper.Participant}
  require IEx

  def render("show.json", %{box: box}) do
    %{
      title: box.title,
      total: Box.total(box),
    }
  end
end