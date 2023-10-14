class CreateBookings < ActiveRecord::Migration[7.0]
  def change
    create_table :bookings do |t|
      t.datetime :appointment_time
      t.boolean :booked
      t.references :doctor, null: false, foreign_key: true
  
      t.timestamps
    end
  end
end
