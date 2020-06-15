class CreateOffices < ActiveRecord::Migration[6.0]
  def change
    create_table :offices do |t|
      t.string :street_address
      t.string :city
      t.string :state
      t.integer :zip_code
      t.timestamps
    end
  end
end
