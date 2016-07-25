class SystemInfo
  include Mongoid::Document
  include Mongoid::Timestamps # adds created_at and updated_at fields

  field :token, :type => String
  field :cpu_used, :type => String
  field :disk_used, :type => String
  field :mem_used, :type => String
  field :bandwidth_up, :type => String
  field :bandwidth_down, :type => String
  field :top_process_cpu, :type => Array
  field :top_process_memory, :type => Array

  belongs_to :cluster, index: true

  def self.upload_report(report)
     create!(report)
  end

  def self.find_by_token(token)
      find(token) rescue nil
  end
end