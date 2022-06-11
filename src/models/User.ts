import {getModelForClass, prop} from '@typegoose/typegoose'

class User {

  @prop({required: true})
  public name? : string

  @prop({required: true})
  public message : string

  @prop({required: true})
  public date : string
}


const UserMode = getModelForClass(User)

export default UserMode
