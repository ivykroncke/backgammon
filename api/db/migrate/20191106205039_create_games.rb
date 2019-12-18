class CreateGames < ActiveRecord::Migration[5.1]
  def change
    create_table :games do |t|
      t.boolean :complete, default: false
      t.integer :creator_id
      t.integer :opponent_id
    end
  end
end
