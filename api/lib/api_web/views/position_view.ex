defmodule ApiWeb.PositionView do
  use ApiWeb, :view

  def render("show.json", %{position: p}) do
    %{
      title: p.title,
      paid_by: p.paid_by,
      assigned_to: p.assigned_to,
      amount: p.amount
    }
  end
end