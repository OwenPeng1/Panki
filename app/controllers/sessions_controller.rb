class SesssionsController < ApplicationController
    include ActionController::Cookies
    def create
        byebug
        user = User.find_by(username: params[:username])
        if user&.autheticate(params[:password])
            session[:user_id] = user.id
            render json: user
        else 
            render json: {error: "Invalid Password or Username"}
        end
    end

    def destroy
        session.delete(:user_id)
        render json: {}
    end

    def logged_user
        user = User.find_by(id: session[:user_id])
        render json: user
    end
end