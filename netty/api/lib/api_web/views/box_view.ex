defmodule ApiWeb.BoxView do
  use ApiWeb, :view

  alias ApiWeb.{BoxView, ParticipantView, PositionView}
  alias Api.{Keeper.Box}
  require IEx

  def render("show.json", %{box: box, participants: participants, positions: positions}) do
    render(BoxView, "without_participants.json", %{box: box, positions: positions})
    |> Map.put(:participants,
         Enum.map(participants, fn p ->
           render(ParticipantView, "without_box.json", %{participnant: p, postions: positions, user: p.user})
         end)
       )
  end

  def render("without_participants.json", %{box: box, positions: positions}) do
    %{
      title: box.title,
      total: Box.total(positions),
      positions: render_many(positions, PositionView, "show.json")
    }
  end

  def render("created.json", _) do
    %{status: :ok}
  end
end