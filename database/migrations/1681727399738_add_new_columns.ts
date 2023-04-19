import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'jobs'

  public async up () {
    this.schema.alterTable(this.tableName, (table) => {
      table.text('job_description').notNullable().alter();
    })
  }

  public async down () {
    this.schema.alterTable(this.tableName, (table) => {
      table.text('job_description').notNullable().alter();
    })
  }
}
