import Download from "./pages/Download";
import Home from "./pages/Home";
import Privacy from "./pages/Privacy";
import Support from "./pages/Support";
import Terms from "./pages/Terms";
import Changelog from "./pages/Changelog";

const routes = {
  "/": Home,
  "/privacy": Privacy,
  "/terms": Terms,
  "/support": Support,
  "/download": Download,
  "/changelog": Changelog,
};

function normalizePath(pathname) {
  if (pathname !== "/" && pathname.endsWith("/")) {
    return pathname.replace(/\/+$/, "");
  }

  return pathname || "/";
}

export default function App() {
  const pathname = normalizePath(window.location.pathname);
  const Page = routes[pathname] || Home;

  return <Page />;
}
