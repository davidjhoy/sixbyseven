class ArticleSerializer < ActiveModel::Serializer
  attributes :id, :substance, :date, :sample_text, :title, :user_id, :likes, :tiptap
end
