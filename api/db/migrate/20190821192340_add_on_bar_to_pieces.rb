class AddOnBarToPieces < ActiveRecord::Migration
  def change
    add_column :pieces, :on_bar, :boolean, default:false
  end
end
