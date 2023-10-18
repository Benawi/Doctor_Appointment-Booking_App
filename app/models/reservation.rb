class Reservation < ApplicationRecord
  belongs_to :user
  belongs_to :doctor
  validates :user_id, :doctor_id, :reservation_time, presence: true
end
