class UsersController < ApplicationController
    before_action :define_current_user

    def index
        users = User.all 
        render json: users, include: [:reviews]
    end

    def show
        render json: current_user, include: [:reviews]
    end

    def create
        # user = User.create(user_params)
        user = User.create({
            firstname: params[:firstname],
            lastname: params[:lastname],
            age: params[:age],
            username: params[:username],
            password: params[:password]
        })
        render json: user
    end

    def update
        current_user.update(user_params)
        render json: current_user
    end
    
    def destroy
        current_user.destroy
        render json: current_user
    end

    def user_params
        params.require(:user).permit(:firstname, :lastname, :age, :username, :password)
    end

    def define_current_user
        if params[:id]
            @current_user = User.find(params[:id])
        else
            @current_user = User.new
        end
    end
    
    def current_user
        @current_user
    end
end
