import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import HexagramWheel from "./pages/HexagramWheel";
import HexagramGrid from "./pages/HexagramGrid";
import HexagramDetail from "./pages/HexagramDetail";
import AIChat from "./pages/AIChat";
import UserHistory from "./pages/UserHistory";
import AdminPanel from "./pages/AdminPanel";
import Connect from "./pages/Connect";

function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/wheel"} component={HexagramWheel} />
      <Route path={"/hexagrams"} component={HexagramGrid} />
      <Route path={"/hexagrams/:id"} component={HexagramDetail} />
      <Route path={"/chat"} component={AIChat} />
      <Route path={"/history"} component={UserHistory} />
      <Route path={"/admin"} component={AdminPanel} />
      <Route path={"/connect"} component={Connect} />
      <Route path={"/404"} component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
      >
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
