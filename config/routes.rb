Rails.application.routes.draw do
  devise_for :admins
  root 'static_pages#index'

  namespace :api do
    namespace :v1 do
      resources :candidates, only: [:show, :create]
      resources :admin, only: [:show]
    end
  end
end
