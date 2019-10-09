class CreateJwtBlacklist < ActiveRecord::Migration
  def change
    create_table :jwt_blacklist do |t|
      t.string :jti
    end

    add_index :jwt_blacklist, :jti

  end
end
