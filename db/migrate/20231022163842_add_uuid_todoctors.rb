class AddUuidTodoctors < ActiveRecord::Migration[7.0]
    def change 
      add_column :doctors, :uuid, :uuid, default: 'gen_random_uuid()'
      
      Doctor.find_each do |doctor|
        doctor.uuid = SecureRandom.uuid 
        doctor.save! 
      end
    end
end