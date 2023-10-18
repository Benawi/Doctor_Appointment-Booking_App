class Doctor < ApplicationRecord
  has_many :reservations, dependent: :destroy
  belongs_to :specialization
end
