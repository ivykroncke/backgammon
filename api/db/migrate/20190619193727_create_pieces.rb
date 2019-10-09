class CreatePieces < ActiveRecord::Migration
  def change
    create_table :pieces do |t|
      t.integer :board_row_id
      t.integer :player_id
    end
  end
end
