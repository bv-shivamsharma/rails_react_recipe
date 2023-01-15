Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
	
	match "/app/*foo" => 'dash#mui', via: [:get, :post]
	match "/app/mui" => 'dash#mui', via: [:get, :post]
end
