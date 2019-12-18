class Api::GamesController < ApplicationController
    before_action :authorize_request, except: :create
  
    def index
      render json: current_user.games, status: :ok
    end

  end
