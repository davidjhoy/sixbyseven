class ArticlesController < ApplicationController

    def index
        render json: Article.all
        byebug
    end

    def show
        article = Article.find(params[:id])
        render json: article, status: :ok
    end

    def create
        article = Article.create(article_params)
    
        if article.valid?
            # session[:realtor_id] = realtor.id
            render json: article, status: :ok
         
        
       else
            
            render json: {errors: article.errors.full_messages}, status: :unprocessable_entity
       end
       
    end

    def update
        article = Article.find(params[:id])
        article.update(article_params)
        render json: article, status: :accepted
    end

    def destroy
        article = Article.find(params[:id])
        article.destroy
        head :no_content    

    end

    private 

    def article_params
    params.permit(:title, :date, :sample_text, :likes, {tiptap: {} }, :substance, :user_id, :article, :Rank, :id, :ClientID, :article, :author)

    end
end
