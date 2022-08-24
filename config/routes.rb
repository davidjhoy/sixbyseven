Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  resources :articles
  resources :users
  resources :comments

  get '/highlights', to: 'highlights#index'
  get '/profiles/:id', to: 'profilecards#index'
  get '/userc/:id', to: 'useradditional#index' 
  patch 'rails/active_storage/direct_uploads', to: 'direct_uploads#create'

end
