class CreatUsers < ActiveRecord::Migration[7.0]
  def change
      create_table :users do |t|
       ## Database authenticatable
       t.string :email,              null: false, default: ""
       t.string :encrypted_password, null: false, default: ""
       t.timestamps
       end
  end
end 