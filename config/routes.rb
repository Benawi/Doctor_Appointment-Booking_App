Rails.application.routes.draw do
  devise_for :users
  get 'root/index'
  resources :users, only: [:index] do
  end
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  root 'users#index'
end
