class CardsController < ApplicationController
    def index
        render json: Card.all
    end

    def card_create_params
        params.permit(:question, :answer, :category_id, :user_id, :count)
    end

    def create
        new_card = Card.create!(card_create_params)
        render json: new_card
    end

    def update
        new_card = Card.find_by!(id:params[:id])
        new_card.update(card_create_params)
        render json: new_card
    end

    def destroy
        card = Card.find_by!(id:params[:id])
        card.destroy
        render json: {}
    end

end
