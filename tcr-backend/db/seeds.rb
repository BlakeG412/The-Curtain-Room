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
p3 = Practice.create({medicine: 'Orthdontic'})
p4 = Practice.create({medicine: 'Podiatric'})
p5 = Practice.create({medicine: 'Dermatologic'})
p6 = Practice.create({medicine: 'Pathologic'})
p7 = Practice.create({medicine: 'Neruologic'})
p8 = Practice.create({medicine: 'Emergency Medical'})
p9 = Practice.create({medicine: 'Psychiatric'})
p10 = Practice.create({medicine: 'Urologic'})

u1 = User.create({firstname: 'Blake', lastname: 'Gaal', age: 21, username: 'blakeg', password: 'blakeg'})
u2 = User.create({firstname: 'Sam', lastname: 'Flynn', age: 23, username: 'samf', password: 'samf'})

d1 = Doctor.create({firstname: 'George', lastname: 'Gaal', phone_number: 7136905977, street_address: '2607 Talina Way', city: 'Houston', state: 'Texas', zip_code: 77080, practice_id: p1.id})
d2 = Doctor.create({firstname: 'Nicholas', lastname: 'Fiore', phone_number: 8327680121, street_address: '3456 Patterson Dr', city: 'Austin', state: 'Texas', zip_code: 77099, practice_id: p2.id})

r1 = Review.create({doctor_id: d1.id, user_id: u1.id, description: "review of office visit"})
r2 = Review.create({doctor_id: d2.id, user_id: u2.id, description: "Office visit for check up"})

# l1 = Like.create({user_id: u1.id, review_id: r1.id})
# l2 = Like.create({user_id: u1.id, review_id: r2.id})
