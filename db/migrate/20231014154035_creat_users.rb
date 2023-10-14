class CreatUsers < ActiveRecord::Migration[7.0]
  def change
       ## Database authenticatable
       t.string :email,              null: false, default: ""
       t.string :encrypted_password, null: false, default: ""
       t.timestamps
  end
end
