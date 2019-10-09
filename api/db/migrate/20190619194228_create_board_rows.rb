class CreateBoardRows < ActiveRecord::Migration
  def change
    create_table :board_rows do |t|
      t.integer :game_id
      t.integer :position
    end
  end
end
