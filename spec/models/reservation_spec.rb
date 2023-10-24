require 'rails_helper'

RSpec.describe Doctor, type: :model do
  before(:each) do

    @user1 = User.create(username: 'toyman', email: 'falako@mail.com', password: 'toyman123', password_confirmation: 'toyman123')
    @user2 = User.create(username: 'Lizzy', email: 'elizabeth@mail.com', password: 'lily123', password_confirmation: 'lily123')

    @specialization1 = Specialization.create(name: 'Dermatologist')
    @specialization2 = Specialization.create(name: 'Pediatrician')
    @doctor1 = Doctor.create(name: 'Ben Cruise', bio: 'A top notch doctor', photo: 'https://unsplash.com/photos/man-in-white-suit-jacket-7bMdiIqz_J4.jpg', specialization_id: @specialization1.id)
    @doctor2 = Doctor.create(name: 'Jene Cartwright', bio: 'A top notch doctor', photo: 'https://unsplash.com/photos/man-in-white-suit-jacket-7bMdiIqz_J4.jpg', specialization_id: @specialization2.id)
  end

  it 'should not save a reservation without parameters' do
    reservation = Reservation.new
    expect(reservation.valid?).to eq false
  end

  it 'should save a reservation with valid attributes' do
    user = User.first
    doctor = Doctor.first
    reservation = Reservation.new(user: user, doctor: doctor, reservation_time: Time.now, comments: 'Valid reservation')
    expect(reservation.valid?).to eq true
  end

  it 'should not save a reservation if user is missing' do
    doctor = Doctor.first
    reservation = Reservation.new(doctor: doctor, reservation_time: Time.now, comments: 'Missing user')
    expect(reservation.valid?).to eq false
  end

  it 'should not save a reservation if doctor is missing' do
    user = User.first
    reservation = Reservation.new(user: user, reservation_time: Time.now, comments: 'Missing doctor')
    expect(reservation.valid?).to eq false
  end

  it 'should return the user associated with the reservation' do
    user = User.first
    doctor = Doctor.first
    reservation = Reservation.create(user: user, doctor: doctor, reservation_time: Time.now, comments: 'User association')
    expect(reservation.user).to eq user
  end
 
end
