import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import CookieConsent from "@/components/ui/cookie-consent";
import Index from "./pages/Index";
import About from "./pages/About";
import Funding from "./pages/Funding";
import Events from "./pages/Events";
import Contact from "./pages/Contact";
import Careers from "./pages/Careers";
import Auth from "./pages/Auth";
import NotFound from "./pages/NotFound";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsConditions from "./pages/TermsConditions";
import DashboardLayout from "./pages/dashboard/DashboardLayout";
import DashboardHome from "./pages/dashboard/DashboardHome";
import MyApplications from "./pages/dashboard/MyApplications";
import NewApplication from "./pages/dashboard/NewApplication";
import ApplicationView from "./pages/dashboard/ApplicationView";
import FundingTrack from "./pages/dashboard/FundingTrack";
import TeamMembers from "./pages/dashboard/TeamMembers";
import ApplicationForm from "./pages/dashboard/ApplicationForm";
import RegisterEvent from "./pages/dashboard/RegisterEvent";
import EnterAchievement from "./pages/dashboard/EnterAchievement";
import RequestMentoring from "./pages/dashboard/RequestMentoring";
import RequestRefund from "./pages/dashboard/RequestRefund";
import Profile from "./pages/dashboard/Profile";
import FileGrievance from "./pages/dashboard/FileGrievance";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
    },
  },
});

// Temporary mock auth check - this would be replaced with real auth logic
const isAuthenticated = () => {
  return localStorage.getItem('isLoggedIn') === 'true';
}

// Protected route component
const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  if (!isAuthenticated()) {
    return <Navigate to="/auth" replace />;
  }
  return <>{children}</>;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <div className="flex flex-col min-h-screen w-full overflow-x-hidden">
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/funding" element={<Funding />} />
            <Route path="/events" element={<Events />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-conditions" element={<TermsConditions />} />
            
            {/* Dashboard Routes */}
            <Route path="/dashboard" element={
              <ProtectedRoute>
                <DashboardLayout />
              </ProtectedRoute>
            }>
              <Route index element={<DashboardHome />} />
              <Route path="applications" element={<MyApplications />} />
              <Route path="applications/new" element={<NewApplication />} />
              <Route path="applications/:id" element={<ApplicationView />} />
              <Route path="applications/:id/funding" element={<FundingTrack />} />
              <Route path="applications/:id/team" element={<TeamMembers />} />
              <Route path="applications/form/:type" element={<ApplicationForm />} />
              <Route path="events" element={<RegisterEvent />} />
              <Route path="achievements" element={<EnterAchievement />} />
              <Route path="mentoring" element={<RequestMentoring />} />
              <Route path="refund" element={<RequestRefund />} />
              <Route path="profile" element={<Profile />} />
              <Route path="grievance" element={<FileGrievance />} />
            </Route>
            
            <Route path="*" element={<NotFound />} />
          </Routes>
          <CookieConsent />
        </BrowserRouter>
      </div>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
