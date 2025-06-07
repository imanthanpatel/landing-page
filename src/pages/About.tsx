import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import TeamCarousel from "@/components/about/TeamCarousel";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// Image URLs from Infrastructure.tsx
const coWorkingSpace = "https://res.cloudinary.com/dopcjxehj/image/upload/v1743066520/coworking_space_ntgoh3.jpg";
const designLab = "https://res.cloudinary.com/dopcjxehj/image/upload/v1743066520/design_lab_kj2aaa.jpg";
const droneLab_GUIITAR = "https://res.cloudinary.com/dopcjxehj/image/upload/v1743066520/drone_lab_mkxvo9.jpg";
const giitarlab = "https://res.cloudinary.com/dopcjxehj/image/upload/v1743066520/guiitar_lab_lh8t0a.jpg";
const library = "https://res.cloudinary.com/dopcjxehj/image/upload/v1743066520/library_pt4z2o.jpg";
const printingLab = "https://res.cloudinary.com/dopcjxehj/image/upload/v1743066525/printing_lab_wrw93w.png";
const supercomputer_lab = "https://res.cloudinary.com/dopcjxehj/image/upload/v1743066520/supercomputer_lab_t0kplg.jpg";
const surjan = "https://res.cloudinary.com/dopcjxehj/image/upload/v1743066521/surjan_ground_wds1sg.jpg";
const tinkeringLab = "https://res.cloudinary.com/dopcjxehj/image/upload/v1743066521/tinkering_lab_xabcx4.jpg";

const About = () => {
  // Data for infrastructure section, matching Infrastructure.tsx
  const infrastructureData = [
    {
      title: "Co Working Space",
      image: coWorkingSpace,
      text: "In today's dynamic world, our co-working space is the ultimate solution for those seeking a flexible, collaborative environment. Tailored for students and startups, it offers a quiet and comfortable setting that enhances creativity and productivity.",
    },
    {
      title: "IoT Lab",
      image: designLab,
      text: "A Design Lab serves as a platform for young students and academic researchers to transform their creative and innovative ideas into tangible forms, facilitating the development of ideas into deliverable projects on a lab scale or as pilot projects. It is particularly beneficial in Science, Engineering, and Technology fields, acting as a catalyst for generating intellectual properties such as patents and industrial designs.",
    },
    {
      title: "Advanced Drone Lab",
      image: droneLab_GUIITAR,
      text: "Signifying a major leap in utilizing drone technology, merging research with interdisciplinary education to lead academic innovation in the drone sector, the initiative promises to enhance student skills and foster innovation, driving societal and economic advancements.",
    },
    {
      title: "Makers Lab",
      image: giitarlab,
      text: "GUIITAR labs are available for idea generation, brain storming in groups, presentations and other admin activities of GUIITAR team. The ambiance of the space is quite suitable for incubators by bringing feel of entrepreneurial spirit all around.",
    },
    {
      title: "Library",
      image: library,
      text: "Books on Entrepreneurship, Start-ups, Innovation, IPR, and related subjects are available and accessible until 11:00 PM for study and learning purposes.",
    },
    {
      title: "3D Printing Lab",
      image: printingLab,
      text: "A spacious area is available for prototype development, testing, and demonstration, equipped with facilities such as a Laser Cutting Machine, 3D Printer, Vinyl Cutting Machine, and essential tools for Proof of Concept (PoC) or prototype development.",
    },
    {
      title: "Super Computer Lab",
      image: supercomputer_lab,
      text: "The Super Computer (Param Shavak DL GPU System) facility is available to accelerate the pace of training and development in advanced Artificial Intelligence fields, including Machine Learning and Deep Learning.",
    },
    {
      title: "Sarjan Ground",
      image: surjan,
      text: "'Sarjan' is an outdoor campus space designed for collaboration, offering a setting for discussions, meetings, and creative idea generation. It aims to foster innovation and entrepreneurship, extending learning beyond traditional classrooms.",
    },
    {
      title: "Tinkering Lab",
      image: tinkeringLab,
      text: "Large space is available for prototype development, testing and demonstration. The space will be having facilities like basic tools for modification and minor fixes.",
    },
  ];

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
            
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-2 md:-ml-4">
                {infrastructureData.map((facility, index) => (
                  <CarouselItem
                    key={index}
                    className="pl-2 md:pl-4 sm:basis-full md:basis-1/2 lg:basis-1/3"
                  >
                    <div className="card border-2 border-primary rounded-[10px] w-full h-full bg-white flex flex-col items-center justify-between p-5 shadow-[0_6px_12px_rgba(0,0,0,0.1)] transition-all duration-300 ease-in hover:-translate-y-[5px] hover:shadow-[0_8px_16px_rgba(0,0,0,0.2)] max-[768px]:p-4 max-[480px]:p-3">
                      <div className="card-title text-primary text-[1.5rem] font-semibold mb-2 text-center max-[1024px]:text-[1.25rem] max-[768px]:text-[1rem] max-[480px]:text-[0.875rem]">
                        {facility.title}
                      </div>
                      <div className="card-image w-full h-40 sm:h-48 md:h-56 overflow-hidden rounded-[5px]">
                        <img
                          src={facility.image}
                          alt={facility.title}
                          className="w-full h-full object-cover max-h-40 sm:max-h-48 md:max-h-56 transition-transform duration-300 ease-in hover:scale-105"
                        />
                      </div>
                      <div className="card-text mt-4 mb-2 text-gray-600 text-[0.875rem] text-center max-[1024px]:text-[0.85rem] max-[768px]:text-[0.8rem] max-[480px]:text-[0.75rem] line-clamp-4">
                        {facility.text}
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex justify-center mt-8 space-x-4">
                <CarouselPrevious className="relative static transform-none" />
                <CarouselNext className="relative static transform-none" />
              </div>
            </Carousel>
            
            <div className="text-center mt-8 md:mt-12">
              {/* <Button size="lg" className="bg-guiitar-primary hover:bg-guiitar-primary/90 text-white">
                Schedule a Visit
              </Button> */}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;