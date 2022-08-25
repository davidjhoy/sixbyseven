class CreateFavoriteds < ActiveRecord::Migration[7.0]
  def change
    create_table :favoriteds do |t|

      t.timestamps
    end
  end
end
