class UsersController < ApplicationController
    def index
        users = User.all 
        render json: users, include: [:likereviews, reviews: {include: :doctor}]
    end

    def show
        user = User.find_by(id: params[:id])
        render json: user, include: [reviews: {include: :doctor}]
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
        user = User.find(params[:id])
        user.update(user_params)
        render json: user
    end
    
    def destroy
        user = User.find(params[:id])
        user.destroy
    end

    def user_params
        params.require(:user).permit(:firstname, :lastname, :age, :username, :password)
    end

    # def define_current_user
    #     if params[:id]
    #         @current_user = User.find(params[:id])
    #     else
    #         @current_user = User.new
    #     end
    # end
    
    # def current_user
    #     @current_user
    # end
end
