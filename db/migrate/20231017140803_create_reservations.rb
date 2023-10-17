class CreateReservations < ActiveRecord::Migration[7.0]
  def change
    create_table :reservations do |t|
      t.references :user, foreign_key: true
      t.references :doctor, foreign_key: true
      t.datetime :reservation_time
      t.text :comments

      t.timestamps
    end
  end
end
