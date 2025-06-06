
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import Services from "@/components/home/Services";
import Programs from "@/components/home/Programs";
import Events from "@/components/home/Events";
import Associations from "@/components/home/Associations";
import FAQ from "@/components/home/FAQ";
import CallToAction from "@/components/home/CallToAction";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Services />
        <About />
        <Programs />
        <Events />
        <Associations />
        <FAQ />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
