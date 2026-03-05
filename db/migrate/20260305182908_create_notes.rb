class CreateNotes < ActiveRecord::Migration[7.0]
  def change
    create_table :notes do |t|
      t.string :title, null: false
      t.text :content
      t.boolean :archived, default: false

      t.timestamps
    end
  end
end
