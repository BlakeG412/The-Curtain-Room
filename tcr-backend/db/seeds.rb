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
Practice.destroy_all
Like.destroy_all

p1 = Practice.create({medicine: 'Dental'})
p2 = Practice.create({medicine: 'Pediatric'})
p3 = Practice.create({medicine: 'Orthdontics'})
p4 = Practice.create({medicine: 'Podiatry'})

u1 = User.create({firstname: 'Blake', lastname: 'Gaal', age: 21, username: 'blakeg', password: 'blakeg'})
u2 = User.create({firstname: 'Sam', lastname: 'Flynn', age: 23, username: 'samf', password: 'samf'})

d1 = Doctor.create({firstname: 'George', lastname: 'Gaal', phone_number: 7136905977, street_address: '2607 Talina Way', city: 'Houston', state: 'Texas', zip_code: 77080, practice_id: p1.id})
d2 = Doctor.create({firstname: 'Nicholas', lastname: 'Fiore', phone_number: 8327680121, street_address: '3456 Patterson Dr', city: 'Austin', state: 'Texas', zip_code: 77099, practice_id: p2.id})
d3 = Doctor.create({firstname: 'Georgeii', lastname: 'Gaala', phone_number: 7136905977, street_address: '2607 Talina Way', city: 'Houston', state: 'Texas', zip_code: 77080, practice_id: p1.id})
d4 = Doctor.create({firstname: 'Nickolas', lastname: 'Miore', phone_number: 8327680121, street_address: '3456 Patterson Dr', city: 'Austin', state: 'Texas', zip_code: 77099, practice_id: p4.id})
d5 = Doctor.create({firstname: 'Meorge', lastname: 'Taal', phone_number: 7136905977, street_address: '2607 Talina Way', city: 'Houston', state: 'Texas', zip_code: 77080, practice_id: p1.id})
d6 = Doctor.create({firstname: 'Ticholas', lastname: 'Feore', phone_number: 8327680121, street_address: '4565 Robin Wheel Cr', city: 'Austin', state: 'Texas', zip_code: 77099, practice_id: p3.id})
d7 = Doctor.create({firstname: 'Geordge', lastname: 'Gahl', phone_number: 7136905977, street_address: '2607 Talina Way', city: 'Houston', state: 'Texas', zip_code: 77080, practice_id: p2.id})
d8 = Doctor.create({firstname: 'Nicholai', lastname: 'Foore', phone_number: 8327680121, street_address: '3456 Patterson Dr', city: 'Austin', state: 'Texas', zip_code: 77099, practice_id: p3.id})

r1 = Review.create({doctor_id: d1.id, user_id: u1.id, description: "review of office visit"})
r2 = Review.create({doctor_id: d2.id, user_id: u2.id, description: "Office visit for check up"})

# l1 = Like.create({user_id: u1.id, review_id: r1.id})
l2 = Like.create({user_id: u1.id, review_id: r2.id})
