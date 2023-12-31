Rails.application.routes.draw do

  devise_for :users do
    delete '/users/sign_out' => 'devise/sessions#destroy'
  end

 

  mount Rswag::Ui::Engine => '/api-docs'
  mount Rswag::Api::Engine => '/api-docs'
  get 'root/index'
  resources :users, only: [:index] do
  end
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
      get '/specializations', to: 'specializations#index'
  
      # Doctor Routes 

      get '/doctors', to: 'doctors#index' do
      resources :doctors, only: [:index, :show, :destroy]
      get :photo, on::member
      end 
      get '/doctors/:uuid', to: 'doctors#show' do
      resources :doctors, only: [:index, :show, :destroy]
        get :photo, on::member
      end
      post '/create-doctors', to: 'doctors#create'
      delete '/doctors/:uuid', to: 'doctors#destroy'
      resources :doctors, only: [:index, :show, :destroy]
      patch '/doctors/update/:id', to: 'doctors#update'
  
    # Reservation routes
    
      get '/reservations', to: 'reservations#index'
      post '/reservations/:id', to: 'reservations#show'
      post '/reserve-form', to: 'reservations#create'
      patch '/reservation/:id', to: 'reservations#update'
      delete  '/reservation/:id', to: 'reservations#destroy'
  
    end
  end
end