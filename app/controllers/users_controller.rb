class UsersController < ApplicationController
    skip_before_action :verify_authenticity_token
    def index
        render json: User.all
    end

    def create
        new_user = User.create!(user_create_params)
        render json: new_user
    end

    def user_create_params
        params.require(:user).permit(:username, :password)
    end

    def show
        # current_user = User.find_by(id: params[:id])
        # render json: current_user
        render json: User.first
    end
end
