class Api::UsersController < ApplicationController
    before_action :set_User, only: [:show, :update, :destroy]
    def index
        render json: User.all
      end
  
      def show
        render json: @user
      end
  
      def create 
        @user = User.new(user_params)
        if @user.save
          render json: @user
        else
          # todo err
        end
      end
      
      def update
        if @user.update(user_params)
          render json: @user
        else
          # todo err
        end
  
      end
  
      def destroy
        render json: @user.destroy
      end
        private
        
  
        def user_params
        params.require(:user).permit(:username, :age)
        end
  
      def set_User
        @user = User.find(params[:id])
      end
    
end
