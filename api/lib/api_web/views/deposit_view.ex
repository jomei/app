defmodule ApiWeb.DepositView do
  use ApiWeb, :view

  def render("show.json", %{deposit: deposit}) do
    %{
      amount: deposit.amount.amount,
      currency: deposit.amount.currency
    }
  end
end