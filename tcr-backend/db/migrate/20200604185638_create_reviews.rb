class CreateReviews < ActiveRecord::Migration[6.0]
  def change
    create_table :reviews do |t|
      t.belongs_to :doctor
      t.belongs_to :user
      t.text :description
      t.timestamps
    end
  end
end
