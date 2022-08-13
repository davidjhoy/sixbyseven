class AddRichTextToArticles < ActiveRecord::Migration[7.0]
  def change
    add_column :articles, :rich_text, :jsonb
  end
end
