class CommentsController < ApplicationController

    def index
        render json: Comment.all
    end

    def show
        comments = Comment.where(article_id: params[:id])
        render json: comments, status: :ok
    end

    def create
        comment = Comment.create(comment_params)
       
        if comment.valid?
            # session[:realtor_id] = realtor.id
            render json: comment, status: :ok
       
        
       else
            
            render json: {errors: comment.errors.full_messages}, status: :unprocessable_entity
       end
       
    end

    def update
        comment = Comment.find(params[:id])
        comment.update(comment_params)
        render json: comment, status: :accepted
    end

    def destroy
        comment = Comment.find(params[:id])
        comment.destroy
        head :no_content    

    end

    private 

    def comment_params
    params.permit(:user_id, :article_id, :text, :like_count, :comment)

    end
end
