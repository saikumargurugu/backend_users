import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

type Address={
  "city":string,
  "state": string,
  "country": string,
  "street": string,
  "postCode": string
}

export default class Job extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column()
  public jobTitle: string

  @column()
  public jobDescription: string
  
  @column()
  public contantNumber: string
  
  @column()
  public contanctEmail: string

  @column()
  public location: Address
  
  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
