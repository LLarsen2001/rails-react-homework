Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  namespace :api do 
    get '/animals', to:'animals#index' # return all dishes

    post '/animals', to:'animals#create' # create one dish
 
    get '/animals/:id', to: 'animals#show' # returns one dish
   
    put '/animals/:id', to: 'animals#update' # update one dish
 
    delete '/animals/:id', to: 'animals#destroy' # destroy one dish

  end
  


end
