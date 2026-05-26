import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Layout } from "@/components/layout/Layout";
import NotFound from "@/pages/not-found";

import Home from "@/pages/home";
import AboutRoutes from "@/pages/about";
import ProgramsRoutes from "@/pages/programs";
import Services from "@/pages/services";
import DigitalToolsHub from "@/pages/services/digital-tools";
import PagesServices from "@/pages/services/pages";
import WhereWeWorkRoutes from "@/pages/where";
import ImpactRoutes from "@/pages/impact";
import Partners from "@/pages/partners";
import ResourcesRoutes from "@/pages/resources";
import News from "@/pages/news";
import GetInvolvedRoutes from "@/pages/get-involved";
import Governance from "@/pages/governance";
import LegalRoutes from "@/pages/legal";

const queryClient = new QueryClient();

function Router() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={Home} />
        
        {/* About Routes */}
        <Route path="/about" component={AboutRoutes} />
        <Route path="/about/:sub" component={AboutRoutes} />
        
        {/* Programs Routes */}
        <Route path="/programs" component={ProgramsRoutes} />
        <Route path="/programs/:track" component={ProgramsRoutes} />
        <Route path="/programs/:track/:tool" component={ProgramsRoutes} />
        
        <Route path="/services/digital-tools" component={DigitalToolsHub} />
        <Route path="/services/pages" component={PagesServices} />
        <Route path="/services" component={Services} />
        
        {/* Where We Work Routes */}
        <Route path="/where-we-work" component={WhereWeWorkRoutes} />
        <Route path="/where-we-work/:country" component={WhereWeWorkRoutes} />
        
        {/* Impact Routes */}
        <Route path="/impact" component={ImpactRoutes} />
        <Route path="/impact/:sub" component={ImpactRoutes} />
        
        <Route path="/partners" component={Partners} />
        
        {/* Resources Routes */}
        <Route path="/resources" component={ResourcesRoutes} />
        <Route path="/resources/:sub" component={ResourcesRoutes} />
        
        <Route path="/news" component={News} />
        
        {/* Get Involved Routes */}
        <Route path="/get-involved" component={GetInvolvedRoutes} />
        <Route path="/get-involved/:sub" component={GetInvolvedRoutes} />
        
        <Route path="/governance" component={Governance} />
        
        {/* Legal Routes */}
        <Route path="/legal/:sub" component={LegalRoutes} />

        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
