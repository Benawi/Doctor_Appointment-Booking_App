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
    name: 'John Smith',
    bio: 'John is a general surgeon with over 20 years experience.', 
    photo: 'https://example.com/john_smith.jpg',
    specialization_id: 1
  )
  
  Doctor.create(
    name: 'Sarah Lee',
    bio: 'Sarah is a pediatrician who loves working with children.',
    photo: 'https://example.com/sarah_lee.jpg', 
    specialization_id: 2
  )
  puts 'Doctors seeds done  ..'
