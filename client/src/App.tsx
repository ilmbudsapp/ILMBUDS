import { lazy, Suspense, useEffect } from "react";
import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import HomeKids from "@/pages/home-kids";
import { UserProvider } from "@/context/user-context";
import { QuizProvider } from "@/context/quiz-context";
import { LanguageProvider } from "@/context/language-context";
import { ThemeProvider } from "@/context/theme-context";
import { useTranslation } from "@/hooks/use-translation";
import { GlobeLanguageSwitcher } from "@/components/globe-language-switcher";
import { Navbar } from "@/components/navbar";
import { AdMobBanner } from "@/components/AdMobBanner";
import WebSiteShell from "@/components/WebSiteShell";
import { isWebStaticMode } from "@/lib/webApi/install";


// Lazy loaded components for better performance
const Quiz = lazy(() => import("@/pages/quiz"));
const QuizCategories = lazy(() => import("@/pages/quiz-categories"));
const Donate = lazy(() => import("@/pages/donate"));
const Profile = lazy(() => import("@/pages/profile"));
const ParentDashboard = lazy(() => import("@/pages/parent-dashboard"));
const Settings = lazy(() => import("@/pages/settings"));
const Badges = lazy(() => import("@/pages/badges"));
const About = lazy(() => import("@/pages/about"));
const Partners = lazy(() => import("@/pages/partners"));

// Main content sections
const Quran = lazy(() => import("@/pages/quran"));
const Stories = lazy(() => import("@/pages/stories"));
const Cartoons = lazy(() => import("./pages/cartoons"));
const Ilmihal = lazy(() => import("@/pages/catechism"));
const Pillars = lazy(() => import("@/pages/pillars"));
const Beliefs = lazy(() => import("@/pages/beliefs"));
const Ablution = lazy(() => import("@/pages/ablution"));
const PillarDetail = lazy(() => import("@/pages/pillar-detail"));
const BeliefDetail = lazy(() => import("@/pages/belief-detail"));
const MiniGames = lazy(() => import("@/pages/mini-games"));
const ArabicAlphabet = lazy(() => import("@/pages/arabic-alphabet"));

// Simple loading spinner without translation dependency
const LoadingSpinner = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="relative">
      <div className="h-24 w-24 rounded-full border-4 border-primary/30 border-t-primary animate-spin"></div>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-primary font-bold text-sm">Loading... v8</span>
      </div>
    </div>
  </div>
);

function Router() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Switch>
        <Route path="/" component={HomeKids} />
        <Route path="/quiz-categories" component={QuizCategories} />
        <Route path="/quiz" component={Quiz} />
        <Route path="/donate" component={Donate} />
        <Route path="/profile" component={Profile} />
        <Route path="/parent-dashboard" component={ParentDashboard} />
        <Route path="/settings" component={Settings} />
        <Route path="/badges" component={Badges} />
        <Route path="/about" component={About} />
        <Route path="/partners" component={Partners} />
        
        {/* Main content sections */}
        <Route path="/quran" component={Quran} />
        <Route path="/stories" component={Stories} />
        <Route path="/cartoons" component={Cartoons} />
        <Route path="/catechism" component={Ilmihal} />
        <Route path="/ilmihal" component={Ilmihal} />
        <Route path="/pillars" component={Pillars} />
            <Route path="/beliefs" component={Beliefs} />
            <Route path="/ablution" component={Ablution} />
            <Route path="/pillar/:id" component={PillarDetail} />
            <Route path="/belief/:id" component={BeliefDetail} />
            <Route path="/mini-games" component={MiniGames} />
            <Route path="/arabic-alphabet" component={ArabicAlphabet} />

            <Route component={NotFound} />
      </Switch>
    </Suspense>
  );
}

function App() {
  const webMode = isWebStaticMode();

  if (webMode) {
    return (
      <QueryClientProvider client={queryClient}>
        <LanguageProvider>
          <UserProvider>
            <ThemeProvider>
              <QuizProvider>
                <WebSiteShell>
                  <Router />
                  <Toaster />
                </WebSiteShell>
              </QuizProvider>
            </ThemeProvider>
          </UserProvider>
        </LanguageProvider>
      </QueryClientProvider>
    );
  }

  return (
    <QueryClientProvider client={queryClient}>
      <LanguageProvider>
        <UserProvider>
          <ThemeProvider>
            <QuizProvider>
              <div className="font-quicksand touch-manipulation flex flex-col h-screen overflow-hidden bg-gradient-to-b from-sky-400 to-blue-500 text-foreground">
                {/* Status bar spacer */}
                <div className="status-bar-spacer"></div>
                
                {/* Globe language switcher in header area */}
                <div className="fixed top-[50px] right-[20px] z-50">
                  <GlobeLanguageSwitcher />
                </div>
                
                {/* Main scrollable content - with bottom padding for navigation + banner + system nav */}
                <div className="flex-1 overflow-auto" style={{paddingBottom: '150px'}}>
                  <Router />
                  <Toaster />
                </div>

                {/* DONJA NAVIGACIJA APLIKACIJE - zelena zona */}
                <Navbar />
                
                {/* AdMob Banner zone - real banner */}
                <AdMobBanner 
                  adUnitId="ca-app-pub-9746293142643974/3548505956"
                  style={{
                    position: 'fixed',
                    bottom: '16px',
                    left: 0,
                    right: 0,
                    height: '64px',
                    zIndex: 40
                  }}
                />
                
                {/* NAVIGACIJA TELEFONA ostavi prazno - crvena zona (50px) */}
                <div style={{position: 'fixed', bottom: 0, left: 0, right: 0, height: '50px', zIndex: 0, pointerEvents: 'none'}}>
                  {/* Prazan prostor za sistemsku navigaciju telefona */}
                </div>
              </div>
            </QuizProvider>
          </ThemeProvider>
        </UserProvider>
      </LanguageProvider>
    </QueryClientProvider>
  );
}

export default App;
