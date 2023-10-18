class User < ApplicationRecord
    has_many :reservations, dependent: :destroy
  
    validates :name, presence: true, length: { minimum: 3, maximum: 50 }
    validates :email, uniqueness: true
end
  