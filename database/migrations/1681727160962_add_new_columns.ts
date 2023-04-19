import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'jobs'

  public async up () {
    this.schema.alterTable(this.tableName, (table) => {
      table.string("job_title").notNullable(),
      table.string("job_description").notNullable(),
      table.string("contant_number").notNullable(),
      table.string("contanct_email").notNullable,
      table.json("location").notNullable()
    })
  }

  public async down () {
    this.schema.alterTable(this.tableName, (table) => {
    })
  }
}
