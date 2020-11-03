import { environment } from '../../environments/environment';

const allowlist = [`${environment.host}:${environment.port}`];

const corsConfig = (req, callback) => {
  let corsOptions;

  if (allowlist.indexOf(req.header('Origin')) !== -1) {
    corsOptions = { origin: true };
  } else {
    corsOptions = { origin: false };
  }

  callback(null, corsOptions);
};

export { corsConfig };
