class RenameColumnInArticles < ActiveRecord::Migration[7.0]
  def change
    rename_column :articles, :text, :substance
  end
end
