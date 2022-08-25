class ProfilecardsController < ApplicationController
    def index
        
        render json: Article.where(user_id: params[:id].split(',')), status: :ok
    end
end
