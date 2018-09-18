defmodule ApiWeb.BoxView do
  use ApiWeb, :view

  alias ApiWeb.BoxView
  alias Api.{Keeper.Box, Keeper.Participant}
require IEx
  def render("box.json", %{box: box}) do
    deposits = box.deposits
               |> Enum.filter(&(&1.amount != 0))
               |> Enum.map(&(ApiWeb.DepositView.render("show.json", %{deposit: &1})))
    %{title: box.title, deposits: deposits}
  end

  def render("created.json", %{box: box}) do
    %{data: %{id: box.id, title: box.title}}
  end

  def render("index.json", %{participants: participants}) do
    %{data: render_many(participants, BoxView, "from_participant.json")}
  end

  def render("from_participant.json", %{box: p}) do
    IEx.pry
    %{
      id: p.box.id,
      title: p.box.title,
      total: Box.total(p.box),
      user_debt: Participant.total_debt(p)
    }
  end
end