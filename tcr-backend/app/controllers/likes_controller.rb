class LikesController < ApplicationController
    def index
        likes = Like.all 
        render json: likes
    end

    # def show
    # end

    def create
        # byebug
        like = Like.create({
            user_id: params[:user_id],
            review_id: params[:review_id],
        })
        render json: like, include: :user
    end

    def destroy
        like = Like.find(params[:id])
        like.destroy
    end
end
