class Doctor < ApplicationRecord
  has_many :reservations, dependent: :destroy
  belongs_to :specialization

  def specialization_name
    specialization.name
  end
end
