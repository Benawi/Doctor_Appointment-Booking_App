class CreateDoctors < ActiveRecord::Migration[7.0]
  def change
    create_table :doctors do |t|
      t.string :docname
      t.string :location
      t.references :specializations, null: false, foreign_key: true

      t.timestamps
    end
    add_index :doctors, :docname, unique: true
  end
end
