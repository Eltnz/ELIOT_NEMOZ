Rails.application.routes.draw do
  root to: 'pages#home'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  resources :projects, only: [:index, :show]

  get '/contact', to: 'contacts#new', as: 'new_message'
  post 'contacs', to: 'contacs#create', as: 'create_message'

end

