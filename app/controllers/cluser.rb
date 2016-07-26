CloudMonitor::App.controllers :cluster do
  
  get :list do
    clusters = Cluster.all
    clusters.to_json
  end

  get :node_info, :map => "/cluster/:cluster_id" do
    cluster = Cluster.find(params[:cluster_id])
    cluster.to_json
  end

  post :create do
    input_hash = JSON.parse(request.body.read)
    input_hash["token"] = SecureRandom.hex
    cluster = Cluster.create!(input_hash)

    if cluster.invalid?
      {:status=> false, :token => input_hash[:token]}.to_json
    else
      {:status=> true, :id => cluster._id, :token => input_hash["token"]}.to_json
    end
  end

  delete :delete_node, :map => "/cluster/:cluster_id" do

  end

end
