# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
 Specialization.create(name: 'General Surgery')
 Specialization.create(name: 'Pediatrics')
 puts 'specialization seeds done  ..'
 puts 'Doctors seeding .....'
 
 Doctor.create(
    name: 'Dr. John Smith',
    bio: 'John is a general surgeon with over 20 years experience.', 
    photo: 'https://img.freepik.com/free-vector/doctor_1196-269.jpg',
    specialization_id: 1
  )
  
  Doctor.create(
    name: 'Dr. Sarah Lee',
    bio: 'Sarah is a pediatrician who loves working with children.',
    photo: 'https://img.freepik.com/free-vector/doctor_1196-269.jpg', 
    specialization_id: 2
  )
  puts 'Doctors seeds done  ..'
  puts 'Users seeding  ..'
  User.create(
    email: "benawi@example.com",
    encrypted_password: "password123", 
    username: "benawi"
  )
  puts 'Users seeds done  ..'
  puts 'reservation seeding  ..'
  Reservation.create(
    user_id: 1,
    doctor_id: 3,
    reservation_time: DateTime.new(2023,10,22,11,00),
    comments: "Need prescription refill", 
  )
  puts 'reservation seeds done  ..'