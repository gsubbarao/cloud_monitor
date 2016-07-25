class Cluser
  include Mongoid::Document
  include Mongoid::Timestamps # adds created_at and updated_at fields

  field :name, :type => String
  field :token, :type => String
  field :shutdown_cpu_load, :type => String 

  has_many :system_infos, validate: false

end