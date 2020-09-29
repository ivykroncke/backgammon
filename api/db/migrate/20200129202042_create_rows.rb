class CreateRows < ActiveRecord::Migration[5.1]
  def change
    create_table :rows do |t|
      t.integer :game_id
      t.integer :user_id
    end
  end
end
