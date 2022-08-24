class UsersController < ApplicationController
    def index
        render json: User.all
    end

    def show
        render json: User.where(clientID: params[:id]), status: :ok
     
    end

    def create
        
        user = User.create(user_params)
        if user.valid?
            # session[:realtor_id] = realtor.id
            render json: user, status: :ok
       
        
       else
            render json: {errors: user.errors.full_messages}, status: :unprocessable_entity
       end
    end

    def update
        user = User.find(params[:id])
        user.update(user_params)
        image_url = rails_blob_path(user.image)
        render json: {user: user, image_url: image_url}, status: :accepted
    end

    def destroy
        user = User.find(params[:id])
        user.destroy
        head :no_content    

    end

    private 

    def user_params
    params.permit(:name, :location, :about, :photo, :clientID, :user, :image)

    end

end




   