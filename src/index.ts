import express,{Application} from 'express'
import routes from './routes/index.routes'
import morgan from 'morgan'
import userData from './models/MongoDB'
import socket from 'socket.io'
import sockets from './sockets'
import http from 'http'
import path from 'path'

class Server {
  public app : Application;
  public port : number
  public hhtp: http.Server;
  public io: socket.Server;
  public socketsio;
  public MongoDB : Promise<void>
  public userList: any

  constructor(routeList: any[], port: number){
    this.app = express()
    this.port = port
    this.hhtp = http.createServer(this.app)
    this.io = new socket.Server(this.hhtp)
    this.socketsio = sockets(this.io)
    this.listen()
    this.middlewares()
    this.MongoDB = userData()
    this.initializeControllers(routeList)
  }

  middlewares(){
    this.app.use(express.json())
    this.app.use(morgan('dev'))
    this.app.use(express.urlencoded({extended : false}))
    this.app.use(express.static(path.join(__dirname, 'public')))
  }

  public initializeControllers(controllers: any[]){
    controllers.forEach((controllers) => {
      this.app.use('/', controllers.router)
    })
  }

  public listen(){
    this.hhtp.listen(this.port, () => {
      console.log('Server on ' + this.port)
    })
  }
}
new Server([new routes()],8080)
