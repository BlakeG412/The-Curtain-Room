# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Doctor.destroy_all
User.destroy_all
Review.destroy_all
Office.destroy_all
Practice.destroy_all

p1 = Practice.create({medicine: 'Oral'})
p2 = Practice.create({medicine: 'Pediatric'})
o1 = Office.create({street_address: '2607 Talina Way', city: 'Houston', state: 'Texas', zip_code: 77080})
o2 = Office.create({street_address: '3456 Patterson Dr', city: 'Austin', state: 'Texas', zip_code: 77099})
u1 = User.create({firstname: 'Blake', lastname: 'Gaal', age: 21, username: 'blakeg', password: 'blakeg'})
d1 = Doctor.create({firstname: 'George', lastname: 'Gaal', phone_number: 7136905977, office_id: o1.id, practice_id: p1.id})
d2 = Doctor.create({firstname: 'Nicholas', lastname: 'Fiore', phone_number: 8327680121, office_id: o2.id, practice_id: p2.id})
r1 = Review.create({doctor_id: d1.id, user_id: u1.id, description: "review of office visit"})
