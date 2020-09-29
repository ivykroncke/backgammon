class RowsCreator

  def self.call(game_id, user_id)
    new(user_id: user_id, game_id: game_id).call
  end

  def initialize(user_id:, game_id:)
    @user_id = user_id
    @game_id = game_id
  end

  def call
    default_game_rows.each do | row, index |
      puts "Creating row #{index}"
      created_row = create_row(row)
      PiecesCreator.call(@user_id, created_row.id, row["initial_piece_count"])
    end
  end

  private

  def default_game_rows
    @default_game_rows ||= JSON.parse(File.read('./app/models/data/default_game_state.json'))
  end

  def create_row(row)
    user_id = row["row_owner"] == "creator" ? @user_id : nil
    Row.create(game_id: @game_id, user_id: user_id)
  end

end
