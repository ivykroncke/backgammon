class Game < ApplicationRecord
    belongs_to :creator, class_name: "User"
    has_many :rows
end
