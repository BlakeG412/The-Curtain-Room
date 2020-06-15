class ReviewsController < ApplicationController
    def index
        reviews = Review.all 
        render json: reviews, except: [:created_at, :updated_at]
    end

    def show
        review = Review.find_by(id: params[:id])
        render json: review, except: [:created_at, :updated_at]
    end

    def create
        review = Review.new(review_params)
        if review.valid?
            review.save
            render json: review, except: [:created_at, :updated_at]
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
