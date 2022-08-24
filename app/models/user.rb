class User < ApplicationRecord
    has_many :articles 
    has_many :comments, through: :articles
    has_one_attached :image
    validates :clientID, uniqueness: true

    
    def image_url
        Rails.application.routes.url_helpers.rails_blob_path(image, only_path: true)
    end
end


