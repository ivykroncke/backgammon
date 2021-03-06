class User < ApplicationRecord
  has_secure_password
  has_many :games, foreign_key: "creator_id"
  has_many :pieces
  has_many :rows

  # validates :email, presence: true, uniqueness: true
  # validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }
  validates :email, presence: true, uniqueness: true
  validates :password,
            length: { minimum: 6 },
            if: -> { new_record? || !password.nil? }

end
