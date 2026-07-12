import Download from "./pages/Download";
import Home from "./pages/Home";
import Join from "./pages/Join";
import Privacy from "./pages/Privacy";
import Support from "./pages/Support";
import Terms from "./pages/Terms";
import Changelog from "./pages/Changelog";
import Thanks from "./pages/Thanks";

const routes = {
  "/": Home,
  "/privacy": Privacy,
  "/terms": Terms,
  "/support": Support,
  "/download": Download,
  "/changelog": Changelog,
  "/thanks": Thanks,
};

function normalizePath(pathname) {
  if (pathname !== "/" && pathname.endsWith("/")) {
    return pathname.replace(/\/+$/, "");
  }

  return pathname || "/";
}

function matchJoinToken(pathname) {
  const match = pathname.match(/^\/join\/([^/]+)$/);
  return match ? decodeURIComponent(match[1]) : null;
}

export default function App() {
  const pathname = normalizePath(window.location.pathname);
  const joinToken = matchJoinToken(pathname);

  if (joinToken) {
    return <Join token={joinToken} />;
  }

  const Page = routes[pathname] || Home;
  return <Page />;
}
