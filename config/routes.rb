Rails.application.routes.draw do
  mount Rswag::Ui::Engine => '/api-docs'
  mount Rswag::Api::Engine => '/api-docs'
  get 'root/index'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  root 'root#index'
  namespace :api do 
    namespace :v1 do
      get '/users', to: 'users#index'
      get '/user/name', to: 'users#show'
      post '/user/add', to: 'users#create'
      delete '/user/:id', to: 'users#destroy'
      patch '/user/:id', to: 'users#update'

      # Doctor Routes 

      get '/doctors', to: 'doctors#index' do
      get :photo, on::member
      end 
      get '/doctors/:id', to: 'doctors#show' do
        get :photo, on::member
      end
      post '/doctors', to: 'doctors#create'
      delete '/doctors/:id', to: 'doctors#destroy'
      patch '/doctors/update/:id', to: 'doctors#update'

    # Reservation routes
    
      get '/reservations', to: 'reservations#index'
      post '/reservations/:id', to: 'reservations#show'
      post '/reservation/add', to: 'reservations#create'
      patch '/reservation/:id', to: 'reservations#update'
      delete  '/reservation/:id', to: 'reservations#destroy'
    end
  end
end 

