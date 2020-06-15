class CreateDoctors < ActiveRecord::Migration[6.0]
  def change
    create_table :doctors do |t|
      t.string :firstname
      t.string :lastname
      t.integer :phone_number
      t.belongs_to :office
      t.belongs_to :practice
      t.timestamps
    end
  end
end
