class ReviewsController < ApplicationController
    def index
        reviews = Review.all 
        render json: reviews, include: [:doctor, :user]
    end

    def show
        review = Review.find_by(id: params[:id])
        render json: review, include: [:doctor, :user]
    end

    def create
        review = Review.new(review_params)
        if review.valid?
            review.save
            render json: review
        else
            render json: {message: 'Please complete all form entries'}
        end
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
