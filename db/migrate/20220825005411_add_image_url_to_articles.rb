class AddImageUrlToArticles < ActiveRecord::Migration[7.0]
  def change
    add_column :articles, :ImageUrl, :string
  end
end
