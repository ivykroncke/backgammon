class GameCreator
    
    def self.call(user_id)
        new(user_id: user_id).call
    end

    def initialize(user_id:)
        @user_id = user_id
    end

    def call
        RowsCreator.call(game.id, @user_id)
        game
    end

    private

    def game
        @game ||= Game.create!(creator_id: @user_id)
    end

end
