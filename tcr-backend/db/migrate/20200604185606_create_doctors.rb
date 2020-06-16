class CreateDoctors < ActiveRecord::Migration[6.0]
  def change
    create_table :doctors do |t|
      t.string :firstname
      t.string :lastname
      t.integer :phone_number
      t.string :street_address
      t.string :city
      t.string :state
      t.integer :zip_code
      t.belongs_to :practice
      t.timestamps
    end
  end
end
