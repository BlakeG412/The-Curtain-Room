class Review < ApplicationRecord
    belongs_to :doctor
    belongs_to :user
    has_many :likes
    has_many :users, through: :likes
end
