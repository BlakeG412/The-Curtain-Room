class ReviewsController < ApplicationController
    def index
        reviews = Review.all 
        render json: reviews, include: [:doctor, :user, likes: {include: :user}]
    end

    def show
        review = Review.find_by(id: params[:id])
        render json: review, include: [:user, {doctor: {include: :practice}}, likes: {include: :user}]
    end

    def create
        review = Review.create({
            user_id: params[:user_id],
            doctor_id: params[:doctor_id],
            description: params[:description]
        })

        render json: {success: true, id: review.id}
    end

    def destroy
        review = Review.find(params[:id])
        review.destroy
    end

    private

    def review_params
        params.require(:review).permit(:doctor_id, :user_id, :description)
    end
end
