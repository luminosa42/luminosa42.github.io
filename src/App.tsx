import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import MathAndDataSciencePage from "./pages/interests/MathAndDataSciencePage.tsx";
import WritingPage from "./pages/interests/WritingPage.tsx";
import MentoringPage from "./pages/interests/MentoringPage.tsx";
import ArtAndDesignPage from "./pages/interests/ArtAndDesignPage.tsx";
import CurriculumVitaePage from "./pages/research/CurriculumVitaePage.tsx";
import TechnicalStackPage from "./pages/research/TechnicalStackPage.tsx";
import OngoingProjectsPage from "./pages/research/OngoingProjectsPage.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/interests/math-and-data-science" element={<MathAndDataSciencePage />} />
          <Route path="/interests/writing" element={<WritingPage />} />
          <Route path="/interests/mentoring-and-coaching" element={<MentoringPage />} />
          <Route path="/interests/art-and-design" element={<ArtAndDesignPage />} />
          <Route path="/research/academic-cv" element={<CurriculumVitaePage />} />
          <Route path="/research/tech-stack" element={<TechnicalStackPage />} />
          <Route path="/research/ongoing-projects" element={<OngoingProjectsPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
