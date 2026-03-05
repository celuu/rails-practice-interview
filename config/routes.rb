Rails.application.routes.draw do
  resources :donations do
    get :donation_summary, on: :collection
  end
  resources :churches
  resources :users
  resources :tasks
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
