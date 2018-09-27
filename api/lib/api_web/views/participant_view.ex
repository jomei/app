defmodule ApiWeb.ParticipantView do
  use ApiWeb, :view

  alias ApiWeb.{ParticipantView, DepositView, DebtView}
  alias Api.{Keeper.Box, Keeper.Participant}
  require IEx

  def render("show.json", param) do
    %{data: render("participant.json", param)}
  end

  def render("participant.json", %{participant: p}) do
    %{
      debts: render_many(p.debts, DebtView, "show.json"),
      deposits: render_many(p.deposits, DepositView, "show.json")
    }
  end

  def render("with_box.json", %{participant: p}) do
    render("participant.json", %{participant: p})
    |> Map.merge(%{box: %{id: p.box.id, title: p.box.title, total: Box.total(p.box)}})
  end

  def render("index.json", %{participants: participants}) do
    %{data: render_many(participants, ParticipantView, "with_box.json")}
  end

end