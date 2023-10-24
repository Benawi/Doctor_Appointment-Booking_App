require 'rails_helper'

RSpec.describe Doctor, type: :model do
  before(:each) do
    @specialization1 = Specialization.create(name: 'Dermatologist')
    @specialization2 = Specialization.create(name: 'Pediatrician')
  end

  it 'should not save doctor without parameters' do
    doctor = Doctor.new
    expect(doctor.valid?).to eq false
  end

end
