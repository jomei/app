defmodule ApiWeb.ParticipantView do
  use ApiWeb, :view

  alias ApiWeb.{ParticipantView, BoxView}
  alias Api.{Keeper.Box, Keeper.Participant}
  require IEx


  def render("with_box.json", %{participant: participant}) do
    %{
      box: render_one(participant.box, BoxView, "without_participants.json"),
      paid_amount: Participant.paid_amount(participant),
      assignee_amount: Participant.assignee_amount(participant)
    }
  end

  def render("without_box.json", %{participant: participant}) do


  end


end