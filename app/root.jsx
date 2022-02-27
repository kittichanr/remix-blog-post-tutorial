import {
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from "remix";

import globalStylesUrl from './styles/global.css'

export const links = () => [{ rel: 'stylesheet', }, { href: globalStylesUrl }]

export function meta() {
  const description = 'A cool blog built with Remix'
  const keywords = 'remix, react, javascript'
  return { description, keywords };
}

export default function App() {
  return (
    <Document>
      <Layout>
        <Outlet />
      </Layout>
    </Document>
  );
}

function Document({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href={globalStylesUrl} />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}


function Layout({ children }) {
  return (
    <>
      <nav className="navbar">
        <Link to='/' className="logo">
          Remix
        </Link>

        <ul className="nav">
          <li>
            <Link to='/posts'>Posts</Link>
          </li>
          <li>
            <Link to='/auth/login'>Login</Link>
          </li>
        </ul>
      </nav>

      <div className="container">
        {children}
      </div>
    </>
  )
}

export function ErrorBoundary({ error }) {
  return (
    <Document>
      <Layout>
        <h1>Error</h1>
        <p>{error.message}</p>
      </Layout>
    </Document>
  )
}