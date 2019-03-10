defmodule ApiWeb.ParticipantView do
  use ApiWeb, :view

  alias ApiWeb.{ParticipantView, BoxView, UserView}
  alias Api.{Keeper.Box, Keeper.Participant}
  require IEx

  def render("show.json", %{participant: p, positions: positions, box: box, user: user}) do
    render(ParticipantView, "without_box.json", %{participant: p, positions: positions, user: user})
    |> Map.put(:box, render(BoxView, "without_participants.json", %{box: box, positions: positions}))
  end

  def render("without_box.json", %{participant: p, positions: positions, user: user}) do
    %{
      paid_amount: Participant.paid_amount(p, positions),
      assigned_amount: Participant.assigned_amount(p, positions),
      user: render_one(user, UserView, "show.json"),
      is_admin: p.is_admin
    }
  end

end