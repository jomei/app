defmodule ApiWeb.HomeView do
  use ApiWeb, :view

  alias ApiWeb.{UserView, ParticipantView}

  def render("show.json", %{user: user, participants: participants}) do
    %{
      user: render_one(user, UserView, "show.json"),
      participants: Enum.map(
        participants, fn p ->
          render(ParticipantView, "show.json", %{participant: p, positions: p.box.positions, box: p.box, user: user})
        end
      )
    }
  end
end