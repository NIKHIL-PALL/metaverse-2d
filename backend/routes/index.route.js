import userRoute from './user.route.js';
import authRoute from './auth.route.js';
import adminRoute from './admin.route.js';
import mapRoute from './map.route.js';
 
const routes = express.Router();
routes.use('/users', userRoute);
routes.use('/auth', authRoute);
routes.use('/admin', adminRoute);
routes.use('/map', mapRoute);

export default routes;