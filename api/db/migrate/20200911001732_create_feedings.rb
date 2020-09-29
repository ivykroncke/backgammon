class CreateFeedings < ActiveRecord::Migration[5.1]
  def change
    create_table :feedings do |t|
      t.string :string

      t.timestamps
    end
  end
end
