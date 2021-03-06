Rails.application.routes.draw do
  default_url_options :host => 'localhost:3000'
  resources :likes
  resources :practices
  resources :reviews
  resources :users
  resources :doctors
  post('/login', to: 'auth#login')
  get('/getuser', to: 'users#getuser')
  delete('/logout', to: 'auth#logout')
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
