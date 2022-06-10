import {connect} from 'mongoose'
import UserMode from './User'
import UserModel from './User'

async function connectDB(){
  try{
    const db = await connect('mongodb://127.0.0.1:27017/ChatMessage')
    console.log('database is connection', db.connection.db.databaseName)
  }catch(err){
    console.log(err)
  }
}

export async function excuteQueries(){
  // const user = new UserModel({
  //   name: "Juan",
  //   message: "Buenos"
  // })
  // await user.save()
  // console.log(user)
  const getAll = await UserMode.find()
  console.log(getAll)
}


export default connectDB;

