class UseradditionalController < ApplicationController

    def index
        render json: User.find(params[:id]), status: :ok
     
    end

end
