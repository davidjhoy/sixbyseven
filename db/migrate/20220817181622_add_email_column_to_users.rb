class AddEmailColumnToUsers < ActiveRecord::Migration[7.0]
  def change
    add_column :users, :emailList, :string
  end
end
