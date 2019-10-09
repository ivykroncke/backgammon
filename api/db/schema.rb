# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20190821195743) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "board_rows", force: :cascade do |t|
    t.integer "game_id"
    t.integer "position"
  end

  create_table "games", force: :cascade do |t|
    t.boolean "complete",   default: false
    t.integer "player1_id"
    t.integer "player2_id"
  end

  create_table "jwt_blacklist", force: :cascade do |t|
    t.string "jti"
  end

  add_index "jwt_blacklist", ["jti"], name: "index_jwt_blacklist_on_jti", using: :btree

  create_table "pieces", force: :cascade do |t|
    t.integer "board_row_id"
    t.integer "player_id"
    t.boolean "on_bar",       default: false
  end

  create_table "users", force: :cascade do |t|
    t.string   "email",                  default: "", null: false
    t.string   "encrypted_password",     default: "", null: false
    t.string   "first_name",             default: ""
    t.string   "last_name",              default: ""
    t.integer  "wins",                   default: 0
    t.integer  "losses",                 default: 0
    t.string   "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",          default: 0,  null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.inet     "current_sign_in_ip"
    t.inet     "last_sign_in_ip"
    t.datetime "created_at",                          null: false
    t.datetime "updated_at",                          null: false
  end

  add_index "users", ["email"], name: "index_users_on_email", unique: true, using: :btree
  add_index "users", ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true, using: :btree

end
