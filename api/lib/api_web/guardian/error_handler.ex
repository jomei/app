defmodule ApiWeb.Guardian.ErrorHandler do
  import Plug.Conn

  require IEx
  def auth_error(conn, {type, _reason}, _opts) do
    IEx.pry
    body = Poison.encode!(%{error: to_string(type)})
    send_resp(conn, 401, body)
  end
end