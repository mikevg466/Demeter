import { Links, Meta, Outlet, Scripts, ScrollRestoration } from 'react-router';
import Constants from './utils/constants';
import './stylesheets/main.scss';

export default function Root() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="theme-color" content="#000000" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
        <Meta />
        <Links />
      </head>
      <body>
        <div className={Constants.PROJECT_NAME}>
          <Outlet />
        </div>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

// export function HydrateFallback() {
//   return <div>Loading...</div>;
// }
