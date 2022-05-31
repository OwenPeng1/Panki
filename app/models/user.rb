class User < ApplicationRecord
    has_many :cards
    has_many :categories, through: :cards
end
