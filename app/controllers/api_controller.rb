CloudMonitor::App.controllers "api/v1" do
  
  set :protect_from_csrf, false
  
  post :push_info do
    input_hash = JSON.parse(request.body.read)
    if input_hash["token"]
      node = Cluster.where(:token => input_hash["token"]).last
      if node
        input_hash["node"] = node
        report = SystemInfo.upload_report(input_hash)
        return {:status => true, :node => node}.to_json
      end
    end
    return {:status => false}.to_json
  end

end
