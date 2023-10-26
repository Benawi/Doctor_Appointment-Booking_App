class CreateDoctors < ActiveRecord::Migration[7.0]
  def change
    create_table :doctors do |t|
      t.string :name
      t.text :bio
      t.string :photo
      t.references :specialization, foreign_key: true

      t.timestamps
    end
  end
end
