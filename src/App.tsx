import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";
import Experience from "./pages/Experience";
import Skills from "./pages/Skills";
import Education from "./pages/Education";
import Contact from "./pages/Contact";
import Terminal from "./pages/Terminal";
import NotFound from "@/pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Terminal Mode Route */}
          <Route path="/portfolio/terminal" element={<Terminal />} />
          
          {/* Main Portfolio Routes */}
          <Route path="/portfolio" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/portfolio/about" element={<About />} />
            <Route path="/portfolio/projects" element={<Projects />} />
            <Route path="/portfolio/projects/:id" element={<ProjectDetail />} />
            <Route path="/portfolio/experience" element={<Experience />} />
            <Route path="/portfolio/skills" element={<Skills />} />
            <Route path="/portfolio/education" element={<Education />} />
            <Route path="/portfolio/contact" element={<Contact />} />
          </Route>
          
          {/* Catch-all route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;


// import { Toaster } from "@/components/ui/toaster";
// import { Toaster as Sonner } from "@/components/ui/sonner";
// import { TooltipProvider } from "@/components/ui/tooltip";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Index from "./pages/Index";
// import NotFound from "./pages/NotFound";

// const queryClient = new QueryClient();

// const App = () => (
//   <QueryClientProvider client={queryClient}>
//     <TooltipProvider>
//       <Toaster />
//       <Sonner />
//       <BrowserRouter>
//         <Routes>
//           <Route path="/portfolio" element={<Index />} />
//           {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
//           <Route path="*" element={<NotFound />} />
//         </Routes>
//       </BrowserRouter>
//     </TooltipProvider>
//   </QueryClientProvider>
// );

// export default App;


// only use this for deployment in gh-pages
// GitHub Pages is static, so when you refresh or access a route like /about, it looks for /about/index.html on the server—but it doesn’t exist. 
// That’s why you might get a 404 page.
// -----
// The fix is to use HashRouter instead of BrowserRouter. 
// The hash (#) in the URL tells the browser to stay on the same HTML page and let React handle routing on the client side.

// import { Toaster } from "@/components/ui/toaster";
// import { Toaster as Sonner } from "@/components/ui/sonner";
// import { TooltipProvider } from "@/components/ui/tooltip";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { HashRouter, Routes, Route } from "react-router-dom"; // <- use HashRouter
// import Index from "./pages/Index";
// import NotFound from "./pages/NotFound";

// const queryClient = new QueryClient();

// const App = () => (
//   <QueryClientProvider client={queryClient}>
//     <TooltipProvider>
//       <Toaster />
//       <Sonner />
//       <HashRouter>
//         <Routes>
//           <Route path="/" element={<Index />} />
//           {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
//           <Route path="*" element={<NotFound />} />
//         </Routes>
//       </HashRouter>
//     </TooltipProvider>
//   </QueryClientProvider>
// );

// export default App;

