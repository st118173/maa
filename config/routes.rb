Rails.application.routes.draw do
  mount RailsAdmin::Engine => '/admin', as: 'rails_admin'
  resources :emails
  get 'ps/ps4'

  get 'ps/ps5'

  authenticated :user do

      root 'userpersnaldets#new'

    end
get 'home/home'
  root 'home#home'
  resources :mdos
  resources :maa_addresses
  resources :regs
  resources :userpersnaldets
  captcha_route


  #root 'messages#index'
  resources :messages, only: [:create, :destroy, :index, :new]
  resources :programs do
    resources :comts

  end

  resources :media_contents, only: [:create]

  delete 'delete_media', to: "media_contents#delete_media"
  delete 'delete_all', to: 'media_contents#delete_all'
  devise_for :users, :controllers => { registrations: 'registrations' }
  get 'usersinfo/userlist'
 #root 'programs#index'
  authenticated :user do
    #root 'programs#index'
  end
  unauthenticated :user do
    devise_scope :user do
      get "/" => "devise/sessions#new"
    end
  end
   #root 'courses#index'
  get 'courses/show'
  resources :courses do
    member do
      get 'upload', to: 'courses#upload'
      patch 'upload', to: 'courses#do_upload'
      get 'resume_upload', to: 'courses#resume_upload'
      patch 'update_status', to: 'courses#update_status'
      get 'reset_upload', to: 'courses#reset_upload'
    end
  end

  match ':controller(/:action(/:id))', :via => [:get,:patch,:post]
  get 'usersinfo/User'

  get 'usersinfo/uerlist'

  get 'usersinfo/userstat'

  #get 'usersinfo/show' => 'usersinfo/userlist'


  #root 'usersinfo#userstat'
  resources :usersinfo
  resources :project


  #root 'usersinfo#userlist'
  #get 'usersinfo/ban'
  #get 'usersinfo/unban'
  post "/regs/:id" => "regs#show"
  post "/hook" => "regs#hook"
  post "/mdos/:id" => "mdos#show"
  post "/hook" => "mdos#hook"
  get "myprofile" => "application#profile", :as => :myprofile

  get 'project/home'
 #root 'project#home'
  #root 'regs#index'
 #root 'mdos#index'

  #root 'userpersnaldets#index'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
