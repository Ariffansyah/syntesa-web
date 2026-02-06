import type { LinksFunction, MetaFunction } from "react-router";
import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useRouteError,
} from "react-router";
import NotFound from "~/components/NotFound";
import { ThemeProvider } from "~/contexts/ThemeContext";
import "./tailwind.css";
import { SITE_META } from "./constants/site_meta";

const themeScript = `
  let isDark;
  const theme = localStorage.getItem('theme');
  const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

  isDark = theme === 'dark' || (!theme && systemTheme === 'dark');

  if (isDark) {
    document.documentElement.classList.add('dark');
  }
`;

export const meta: MetaFunction = () => [
  { charset: "utf-8" },
  { title: SITE_META.title },
  { viewport: "width=device-width,initial-scale=1" },
  { name: "description", content: SITE_META.description },
  { property: "og:title", content: SITE_META.title },
  { property: "og:description", content: SITE_META.description },
  { property: "og:type", content: "website" },
  { property: "og:url", content: SITE_META.siteUrl },
  { name: "twitter:card", content: "summary_large_image" },
  { name: "twitter:title", content: SITE_META.title },
  { name: "twitter:description", content: SITE_META.description },
];

export const links: LinksFunction = () => [{ rel: "canonical", href: SITE_META.siteUrl }];

function Document({ children, title }: { children: React.ReactNode; title?: string }) {
  return (
    <html lang="en" className="h-full">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index,follow" />
        {title && <title>{title}</title>}
        <Meta />
        <Links />
        {/* biome-ignore lint/security/noDangerouslySetInnerHtml: inline theme script prevents FOUC */}
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="h-full">
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return (
    <Document title={SITE_META.title}>
      <ThemeProvider>
        <Outlet />
      </ThemeProvider>
    </Document>
  );
}

export function ErrorBoundary() {
  const error = useRouteError();
  const title = `Error - ${SITE_META.title}`;

  return (
    <Document title={title}>
      <ThemeProvider>
        <div className="min-h-screen bg-[#FAFAFA] dark:bg-black">
          <NotFound
            errorMessage={isRouteErrorResponse(error) ? "page_not_found" : "unknown_error"}
            errorCode={isRouteErrorResponse(error) ? "not_found" : "error"}
          />
        </div>
      </ThemeProvider>
    </Document>
  );
}
