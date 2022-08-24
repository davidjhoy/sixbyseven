class UseradditionalController < ApplicationController

    def index
        @user = User.find(params[:id])
        render json: UserSerializer.new(@user).serializable_hash[:data][:attributes]
     
    end

end
