defmodule ApiWeb.ParticipantView do
  use ApiWeb, :view

  alias ApiWeb.{ParticipantView, DepositView, DebtView}
  alias Api.{Keeper.Box, Keeper.Participant}
  require IEx

  def render("show.json", param) do
    %{data: render("participant.json", param)}
  end


end