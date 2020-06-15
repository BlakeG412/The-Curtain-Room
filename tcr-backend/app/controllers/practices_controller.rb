class PracticesController < ApplicationController
    def index
        practices = Practice.all 
        render json: practices, except: [:created_at, :updated_at]
    end

    def show
        practice = Practice.find_by(id: params[:id])
        render json: practice, except: [:created_at, :updated_at]
    end
end
