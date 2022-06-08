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

    get '/users', to:'users#index' # return all dishes

    post '/users', to:'users#create' # create one dish
 
    get '/users/:id', to: 'users#show' # returns one dish
   
    put '/users/:id', to: 'users#update' # update one dish
 
    delete '/users/:id', to: 'users#destroy' # destroy one dish
  end
  


end
