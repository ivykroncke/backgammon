class PiecesCreator

  def self.call(user_id, row_id, piece_count)
    new(user_id: user_id, row_id: row_id, piece_count: piece_count).call
  end

  def initialize(user_id:, row_id:, piece_count:)
    @user_id = user_id
    @row_id = row_id
    @piece_count = piece_count
  end

  def call
    Array(1..@piece_count).each do | piece, index|
      puts "Creating piece #{index}"
      Piece.create(user_id: @user_id, row_id: @row_id)
    end
  end

end
