class Api::AnimalsController < ApplicationController
  before_action :set_animal, only: [:show, :update, :destroy]

    def index
      render json: Animal.all
    end

    def show
      render json: @Animal
    end

    def create 
      @Animal = Animal.new(animal_params)
      if @Animal.save
        render json: @Animal
      else
        # todo err
      end
    end
    
    def update
      if @animal.update(animal_params)
        render Json: @animal
      else
        # todo err
      end
    end
    def destroy
      render json: @animal.destroy
    end

    def animal_params
      prams.require(:dish).permit(:name, :price, :description)
    end

    def set_animal
      @animal = Animal.find(params[:id])
    end




end
