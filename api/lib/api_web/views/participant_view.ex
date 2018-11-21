defmodule ApiWeb.ParticipantView do
  use ApiWeb, :view

  alias ApiWeb.{ParticipantView, BoxView}
  alias Api.{Keeper.Box, Keeper.Participant}
  require IEx


  def render("show.json", %{participant: participant}) do
    %{
      box: render_one(participant.box, BoxView, "show.json"),
      paid_amount: Participant.paid_amount(participant),
      assignee_amount: Participant.assignee_amount(participant)
    }
  end


end