CloudMonitor::App.controllers :system_report do
  
  get :node_report, :map => "/system_report/report/:node_id" do
    report = SystemInfo.where(:node_id => params[:node_id]).limit(1).last
    if report
      report.to_json
    else
      Hash.to_json
    end
  end

end
