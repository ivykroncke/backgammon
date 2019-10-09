Rails.application.routes.draw do
  # The priority is based upon order of creation: first created -> highest priority.
  # See how all your routes lay out with "rake routes".

  # You can have the root of your site routed with "root"

  root to: "welcome#index"

  namespace :api, defaults: {format: "json"} do
    devise_for :users,
        path: '',
        path_names: {
          sign_in: 'login',
          sign_out: 'logout',
          registration: 'signup'
        },
        controllers: {
          sessions: 'sessions',
          registrations: 'registrations'
        } 
    resources :games, only: [:index, :show, :create, :update]
  end

end
