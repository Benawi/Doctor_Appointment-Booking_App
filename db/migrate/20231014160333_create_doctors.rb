class CreateDoctors < ActiveRecord::Migration[7.0]
  def change
    create_table :doctors do |t|

      t.timestamps
    end
  end
end
