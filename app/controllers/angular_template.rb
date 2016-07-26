CloudMonitor::App.controllers :angular_template do

  get :get_templete, :map => '/angular_template/:template' do
    template_name = params[:template]
    render "angular_templates/#{template_name}", :layout => false
  end

end