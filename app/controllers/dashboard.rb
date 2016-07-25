CloudMonitor::App.controllers :dashboard do
  
  get :index do
    
    input_hash.to_json
  end

end
