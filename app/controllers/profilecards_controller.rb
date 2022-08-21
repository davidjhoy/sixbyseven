class ProfilecardsController < ApplicationController
    def index
        
        render json: Article.where(ClientID: params[:id]), status: :ok
    end
end
