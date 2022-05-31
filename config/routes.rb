Rails.application.routes.draw do
  
  resources :cards
  resources :users
  resources :categories
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }

  delete '/logout', to: 'sesssions#destroy'

  post "/login", to: "sesssions#create"
  get "/userInSession", to: "sesssions#logged_user"
  post "/owen", to:"sesssions#create"  
end
