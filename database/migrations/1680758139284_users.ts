import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'users'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
      table.string("first_name").notNullable(),
      table.string("last_name").notNullable(),
      table.integer("age").notNullable(),
      table.string("email").notNullable,
      table.string("phone_number").notNullable(),
      table.boolean("is_admin").notNullable()
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
