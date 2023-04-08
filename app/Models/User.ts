import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class User extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column()
  public firstName: string


  @column()
  public lastName: string
  
  @column()
  public age: number
  
  @column()
  public email: string

  @column()
  public phoneNumber: string
  
  @column()
  public isAdmin: boolean
  
  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
