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

  it 'should save doctor with valid attributes' do
    doctor = Doctor.new(name: 'Ben Cruise', bio: 'A top notch doctor', photo: 'https://unsplash.com/photos/man-in-white-suit-jacket-7bMdiIqz_J4.jpg', specialization_id: @specialization1.id)
    expect(doctor.valid?).to eq true
  end

  it 'should not save doctor if specialization is missing' do
    doctor = Doctor.new(name: 'Ben Cruise', bio: 'A top notch doctor', photo: 'https://unsplash.com/photos/man-in-white-suit-jacket-7bMdiIqz_J4.jpg')
    expect(doctor.valid?).to eq false
  end
end
