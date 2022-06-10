import {getModelForClass, prop} from '@typegoose/typegoose'

class User {

  @prop({required: true})
  public name? : string

  @prop({require: true})
  public message : string
}


const UserMode = getModelForClass(User)

export default UserMode
