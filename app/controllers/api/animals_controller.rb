class Api::AnimalsController < ApplicationController
  before_action :set_animal, only: [:show, :update, :destroy]

    def index
      render json: Animal.all
    end

    def show
      render json: @animal
    end

    def create 
      @animal = Animal.new(animal_params)
      if @animal.save
        render json: @animal
      else
        # todo err
      end
    end
    
    def update
      if @animal.update(animal_params)
        render json: @animal
      else
        # todo err
      end

    end

    def destroy
      render json: @animal.destroy
    end

    def animal_params
      params.require(:animal).permit(:name, :age)
    end

    def set_animal
      @animal = Animal.find(params[:id])
    end




end
