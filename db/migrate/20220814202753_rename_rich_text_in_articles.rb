class RenameRichTextInArticles < ActiveRecord::Migration[7.0]
  def change
    rename_column :articles, :rich_text, :tiptap
  end
end
