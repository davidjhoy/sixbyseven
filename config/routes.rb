Rails.application.routes.draw do
  resources :favoriteds
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  resources :articles
  resources :users
  resources :comments

  get '/highlights', to: 'highlights#index'
  get '/profiles/:id', to: 'profilecards#index'
  get '/userc/:id', to: 'useradditional#index' 

end
