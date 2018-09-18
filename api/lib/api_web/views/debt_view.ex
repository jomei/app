defmodule ApiWeb.DebtView do
  use ApiWeb, :view

  def render("show.json", %{debt: debt}) do
    %{
      amount: debt.amount.amount,
      currency: debt.amount.currency
    }
  end
end