class Doctor < ApplicationRecord
    belongs_to :practice
    has_many :reviews
    has_many :users, through: :reviews
end
