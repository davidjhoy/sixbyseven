class ProfilecardsController < ApplicationController
    def index
        
        render json: Article.where(ClientID: params[:id]).limit(10), status: :ok
    end
end
