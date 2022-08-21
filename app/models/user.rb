class User < ApplicationRecord
    has_many :articles 
    has_many :comments, through: :articles

    validates :clientID, uniqueness: true
end
