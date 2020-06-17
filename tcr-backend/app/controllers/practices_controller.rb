class PracticesController < ApplicationController
    def index
        practices = Practice.all 
        render json: practices
    end

    def show
        practice = Practice.find_by(id: params[:id])
        render json: practice
    end
end
