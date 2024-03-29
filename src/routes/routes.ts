import { Router } from 'express';
import ProductRouter from './product-router';
class Routes {
  static define(router: Router): Router {
    router.use('/products', ProductRouter);

    return router;
  }
}

export default Routes.define(Router());
