class Specialization < ActiveRecord::Migration[7.0]
  def change
    t.string :specialization_area

    t.timestamps
  end
end
