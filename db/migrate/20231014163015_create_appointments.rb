class CreateAppointments < ActiveRecord::Migration[7.0]
  def change
    create_table :appointments do |t|
      t.references :user, null: false, foreign_key: true
      t.references :doctor, null: false, foreign_key: true
      t.datetime :appointment_time
      t.float :duration
      t.boolean :confirmed
      t.timestamps
    end
  end
end
