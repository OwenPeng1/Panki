# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

owen = User.create(username:"Owen", password: "Peng")
sam = User.create(username:"Sam", password: "Woobly")

science = Category.create(name:"Science")
math = Category.create(name:"Math")
sports = Category.create(name:"Sports")
history = Category.create(name:"History")
miscellaneous = Category.create(name:"Miscellaneous")

Card.create(question: "What is the powerhouse of the cell?",
            answer: "Mitochondria",
            count: 0,
            user_id:owen.id, 
            category_id:science.id)

Card.create(question: "What area of the brain is responsible for memory?",
            answer: "Hippocampus",
            count: 0,
            user_id:sam.id, 
            category_id:science.id)

Card.create(question: "What is the square root of 64?",
            answer: "8",
            count: 0,
            user_id:owen.id, 
            category_id:math.id)

Card.create(question: "How many points to do you get for a free throw?",
            answer: "One",
            count: 0,
            user_id:owen.id, 
            category_id:sports.id)

Card.create(question: "Who was the first president of the United States?",
            answer: "George Washington",
            count: 0,
            user_id:owen.id, 
            category_id:history.id)

Card.create(question: "Who is the best instructor at Flatiron School?",
            answer: "Sam Boahen",
            count: 0,
            user_id:owen.id, 
            category_id:miscellaneous.id)

Card.create(question: "What is the chemical structure of water?",
            answer: "H20",
            count: 0,
            user_id:owen.id, 
            category_id:science.id)

Card.create(question: "What is 75 + 25?",
            answer: "100",
            count: 0,
            user_id:owen.id, 
            category_id:math.id)

Card.create(question: "Which president wrote the Emancipation Proclamation?",
            answer: "Abraham Lincoln",
            count: 0,
            user_id:owen.id, 
            category_id:history.id)