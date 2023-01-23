Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
	
	match "/app/mui" => 'dash#mui', via: [:get, :post]
	match "/app/semantic" => 'dash#semantic', via: [:get, :post]

	root :to => 'dash#semantic'
end
