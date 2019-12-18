Rails.application.routes.draw do
  resources :users
  post '/auth/login', to: 'authentication#login'
  post '/auth/signup', to: 'authentication#signup'
  namespace :api, defaults: {format: "json"} do
    resources :games
  end
  get '/*', to: 'application#not_found'
end
