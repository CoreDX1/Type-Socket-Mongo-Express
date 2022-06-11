import UserMode from './models/User'
import userModel from './models/User'

export default (io:any) => {
  io.on('connection', (socket:any) => {
    const emitUser = async () => {
      const user = await userModel.find()
      io.emit('message_user', user)
    }
    emitUser()

    socket.on('message_chat', (data:any) => {
      const newMesage = async () => {
        const message = await userModel.create({
          name: data.name,
          message: data.message,
          date: data.date
        })
        message.save()
        const newdata = await UserMode.find()
        io.sockets.emit('message_user', newdata)
      }
      newMesage()
  })
  })  
}
