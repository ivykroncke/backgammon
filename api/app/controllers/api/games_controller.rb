class Api::GamesController < ApplicationController
  before_action :authorize_request

  def index
    render json: current_user.games, status: :ok
  end

  def create
    game = GameCreator.call(current_user.id)
    render json: game, status: 201
  end
  
end
