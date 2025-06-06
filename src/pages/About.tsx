
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import TeamCarousel from "@/components/about/TeamCarousel";

const About = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {/* About Header */}
        <section className="bg-guiitar-primary text-white py-12 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">About Us</h1>
              <p className="text-base md:text-lg lg:text-xl opacity-90">
                GUIITAR COUNCIL is dedicated to fostering innovation, entrepreneurship, and technological advancement in Vadodara and beyond.
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section id="mission" className="section-padding bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              <div className="bg-guiitar-light p-6 md:p-8 rounded-lg">
                <h2 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-guiitar-primary">Our Mission</h2>
                <p className="text-gray-700 text-sm md:text-base">
                  To create an innovation ecosystem that empowers entrepreneurs, students, and professionals to address societal challenges through technology and innovation, fostering economic growth and sustainable development in the region.
                </p>
              </div>
              <div className="bg-guiitar-light p-6 md:p-8 rounded-lg">
                <h2 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-guiitar-primary">Our Vision</h2>
                <p className="text-gray-700 text-sm md:text-base">
                  To become the premier incubation center in Gujarat, recognized nationally for excellence in innovation, entrepreneurship development, and creating impactful startups that drive positive change in society.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* About Content */}
        <section id="about" className="section-padding bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-center">Our Journey</h2>
              <div className="space-y-4 md:space-y-6 text-gray-700 text-sm md:text-base">
                <p>
                  Founded in 2018 by GSFC University, GUIITAR COUNCIL (Gujarat University Incubation, Innovation, Technology Advancement and Research Council) was established to bridge the gap between academic research and industry needs, while nurturing entrepreneurs and innovators.
                </p>
                <p>
                  As a non-profit organization, we are committed to creating a vibrant startup ecosystem in Vadodara by providing comprehensive support to innovators at every stage of their entrepreneurial journey.
                </p>
                <p>
                  Through our partnerships with industry leaders, government bodies, and academic institutions, we have created a robust support system that enables entrepreneurs to transform their ideas into successful ventures.
                </p>
                <p>
                  Today, GUIITAR COUNCIL stands as a testament to the power of innovation and collaboration, having supported over 50 startups, facilitated more than ₹10 crores in funding, and conducted numerous workshops and events to foster the spirit of entrepreneurship.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section with Carousel */}
        <section id="team" className="section-padding bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">Our Leadership Team</h2>
              <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
                Meet the dedicated professionals who lead GUIITAR COUNCIL's mission to foster innovation and entrepreneurship.
              </p>
            </div>
            
            <TeamCarousel />
          </div>
        </section>

        {/* Infrastructure */}
        <section id="infrastructure" className="section-padding bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">Our Infrastructure</h2>
              <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
                Explore the state-of-the-art facilities and resources available at GUIITAR COUNCIL to support your innovation journey.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80&w=1000" 
                  alt="Co-working Space" 
                  className="rounded-lg shadow-md w-full h-48 sm:h-56 md:h-64 object-cover mb-4"
                />
                <h3 className="text-lg md:text-xl font-semibold mb-2">Co-working Space</h3>
                <p className="text-gray-600 text-sm md:text-base">
                  Modern, well-equipped co-working areas designed to foster collaboration and productivity.
                </p>
              </div>
              
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&q=80&w=1000" 
                  alt="Prototyping Lab" 
                  className="rounded-lg shadow-md w-full h-48 sm:h-56 md:h-64 object-cover mb-4"
                />
                <h3 className="text-lg md:text-xl font-semibold mb-2">Prototyping Lab</h3>
                <p className="text-gray-600 text-sm md:text-base">
                  Advanced prototyping facilities with 3D printers, laser cutters, and other tools for product development.
                </p>
              </div>
              
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1527977966376-1c8408f9f108?auto=format&fit=crop&q=80&w=1000" 
                  alt="Drone Technology Lab" 
                  className="rounded-lg shadow-md w-full h-48 sm:h-56 md:h-64 object-cover mb-4"
                />
                <h3 className="text-lg md:text-xl font-semibold mb-2">Drone Technology Lab</h3>
                <p className="text-gray-600 text-sm md:text-base">
                  Specialized facility for drone development, testing, and research applications.
                </p>
              </div>
              
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80&w=1000" 
                  alt="Meeting Rooms" 
                  className="rounded-lg shadow-md w-full h-48 sm:h-56 md:h-64 object-cover mb-4"
                />
                <h3 className="text-lg md:text-xl font-semibold mb-2">Conference & Meeting Facilities</h3>
                <p className="text-gray-600 text-sm md:text-base">
                  Well-appointed meeting rooms and conference spaces for team collaborations and client presentations.
                </p>
              </div>
            </div>
            
            <div className="text-center mt-8 md:mt-12">
              <Button size="lg" className="bg-guiitar-primary hover:bg-guiitar-primary/90 text-white">
                Schedule a Visit
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
