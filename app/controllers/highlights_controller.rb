class HighlightsController < ApplicationController


    def index
        render json: Article.order(likes: :desc).limit(4), status: :ok
    end
end
