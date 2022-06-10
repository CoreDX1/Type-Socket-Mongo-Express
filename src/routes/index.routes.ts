import {Router, Request, Response} from 'express';
 
class Routes {
  public path = '/';
  public api = '/google'
  public router : Router = Router()
 
  constructor() {
    this.intializeRoutes();
  }
 
  public intializeRoutes() {
    this.router.get(this.path, this.getApi);
    this.router.get(this.api, this.getMessage);
  }
 
  getApi = (_req: Request, res: Response) => {
    res.send({Hellow : "Api"})
  }

  getMessage = (_req: Request, res: Response) => {
    res.send('Routesr');
  }
}
export default Routes
