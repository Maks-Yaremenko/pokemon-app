import { environment } from '../../environments/environment';

const corsConfig = (req, callback) => {
  let corsOptions;

  if (environment.allowedOrigins.indexOf(req.header('Origin')) !== -1) {
    corsOptions = { origin: true };
  } else {
    corsOptions = { origin: false };
  }

  callback(null, corsOptions);
};

export { corsConfig };
