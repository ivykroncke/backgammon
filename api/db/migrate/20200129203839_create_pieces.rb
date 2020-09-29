class CreatePieces < ActiveRecord::Migration[5.1]
  def change
    create_table :pieces do |t|
      t.integer :row_id
      t.integer :user_id
      t.boolean :on_bar, default: false
    end
  end
end
