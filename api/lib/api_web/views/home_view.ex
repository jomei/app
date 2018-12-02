defmodule ApiWeb.HomeView do
  use ApiWeb, :view

  alias ApiWeb.{UserView, ParticipantView}

  def render("show.json", %{user: user, participants: participants}) do
    %{
      user: render_one(user, UserView, "show.json"),
      participants: render_many(participants, ParticipantView, "with_box.json")
    }
  end
end