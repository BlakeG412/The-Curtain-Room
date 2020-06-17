class LikesController < ApplicationController
    def create
        like = Like.new(like_params)
        if like.valid?
            like.save
            render json: like
        else
            # 
        end
    end

    def destroy
        like = Like.find(params[:id])
        like.destroy
    end

    private
    
    def like_params
        params.require(:like).permit(:user_id, :review_id)
    end
end
