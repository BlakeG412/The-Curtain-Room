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
        if user && user.authenticate(params[:password])
            session[:user_id] = user.id
            render json: {success: true, id: user.id}
        else
            render json: {success: false, id: nil}
            render json: {error: "Invalid Username or Password!"}
        end
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

    def getuser
        user = User.find(session[:user_id])
        render json: {success: true, id: user.id}
    end

    def user_params
        params.require(:user).permit(:firstname, :lastname, :age, :username, :password)
    end
end
