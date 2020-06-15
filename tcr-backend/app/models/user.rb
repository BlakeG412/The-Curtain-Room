class User < ApplicationRecord
    has_secure_password

    has_many :reviews
    has_many :doctors, through: :reviews
    has_many :likes
    has_many :reviews, through: :likes
end
