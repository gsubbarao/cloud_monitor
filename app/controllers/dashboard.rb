CloudMonitor::App.controllers :dashboard do
  
  get :index, :map => "/" do
    
    render 'dashboard/index'
  end

end
