# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Project.destroy_all
p "Projects destroyed"

# users :
project = Project.create!(name:'SimplyRest', description:'SAAS for restaurant owner')
project2 = Project.create!(name:'What the truck', description:'Market place for renting a foodtruck for event')
p "projects created"
