CloudMonitor::App.controllers "api/v1" do
  
  set :protect_from_csrf, false
  
  post :push_info do
    input_hash = JSON.parse(request.body.read)
    # input_hash = {:token => "1234", :cpu_used => "10%", :mem_used => "20%", :bandwidth_up => "20kbps", :bandwidth_down => "40kbps", :top_process_cpu => [], :top_process_memory => []};
    p  SystemInfo.upload_report(input_hash)
    p  input_hash
    input_hash.to_json
  end

end
