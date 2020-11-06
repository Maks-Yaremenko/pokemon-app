import * as express from 'express';
import { Application } from 'express';

class App {
  public app: Application;
  public port: string | number;

  constructor(appInit: {
    port: string | number;
    middleWares: any;
    controllers: any;
  }) {
    this.app = express();
    this.port = appInit.port;

    this.middlewares(appInit.middleWares);
    this.routes(appInit.controllers);
    this.assets();
  }

  private middlewares(middleWares: {
    forEach: (arg: (middleWare: any) => void) => void;
  }) {
    middleWares.forEach((middleWare) => {
      this.app.use(middleWare);
    });
  }

  private routes(controllers: {
    forEach: (arg: (controller: any) => void) => void;
  }) {
    controllers.forEach((controller) => {
      this.app.use('/', controller.router);
    });
  }

  private assets() {
    this.app.use(express.static('dist/apps/pokemon-app'));
  }

  private onError() {
    this.app.on('error', (err) => {
      console.log('Server error:', err);
    });
  }

  public listen() {
    this.app.listen(this.port, () => {
      console.log(`App listening on port:${this.port}`);
    });

    this.onError();
  }
}

export default App;
