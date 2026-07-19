import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { lazy, Suspense } from "react";
import { LazyMotion } from "framer-motion";

// Load the animation feature set as a separate async chunk so the
// ~90KB engine is not in the initial bundle. `m` components stay lightweight.
const loadMotionFeatures = () => import("framer-motion").then((mod) => mod.domMax);
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";

// Home stays eager (critical, prerendered landing page — no hydration flash).
// Secondary routes load on demand so their code is off the homepage bundle.
const Blog = lazy(() => import("./pages/Blog"));
const BlogPost = lazy(() => import("./pages/BlogPost"));
const NotFound = lazy(() => import("@/pages/NotFound"));

const RouteFallback = () => <div className="min-h-screen bg-background" />;

function Router() {
  return (
    <Suspense fallback={<RouteFallback />}>
      <Switch>
        <Route path={"/"} component={Home} />
        <Route path={"/blog"} component={Blog} />
        <Route path={"/blog/:slug"} component={BlogPost} />
        <Route path={"/404"} component={NotFound} />
        <Route component={NotFound} />
      </Switch>
    </Suspense>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark">
        <LazyMotion features={loadMotionFeatures} strict>
          <TooltipProvider>
            <Toaster />
            <Router />
          </TooltipProvider>
        </LazyMotion>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
