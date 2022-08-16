class UsersController < ApplicationController
    def index
        render json: User.all
    end

    def show
        user = User.find(params[:id])
        render json: user, status: :ok
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
        render json: user, status: :accepted
    end

    def destroy
        user = User.find(params[:id])
        user.destroy
        head :no_content    

    end

    private 

    def user_params
    params.permit(:name, :location, :about, :photo)

    end

end




   