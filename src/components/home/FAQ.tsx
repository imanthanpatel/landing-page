
import { useState } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "What is GUIITAR COUNCIL?",
      answer: "GUIITAR COUNCIL is a non-profit incubation center founded by GSFC University, located in Vadodara, Gujarat. We support entrepreneurs and innovators in developing their ideas into successful ventures through mentorship, funding, and infrastructure support."
    },
    {
      question: "What types of funding does GUIITAR COUNCIL offer?",
      answer: "We offer various types of funding including SSIP grants for student startups, Nodal grants for established startups looking to scale, and IPR grants for intellectual property registration and protection."
    },
    {
      question: "How can I apply to the incubation program?",
      answer: "You can apply to our incubation program by filling out the application form on our website. After submission, our team will review your application and contact you for the next steps if your idea aligns with our incubation criteria."
    },
    {
      question: "What facilities are available at GUIITAR COUNCIL?",
      answer: "Our facilities include co-working spaces, meeting rooms, a prototyping lab with 3D printers, a drone technology lab, high-speed internet, and office amenities. We also provide access to GSFC University's research facilities when needed."
    },
    {
      question: "Do you offer workshops and training programs?",
      answer: "Yes, we regularly conduct workshops and training programs on various topics such as drone technology, 3D printing, business model development, pitching to investors, and more. These programs are designed to enhance the skills and knowledge of entrepreneurs."
    },
    {
      question: "Is GUIITAR COUNCIL open to entrepreneurs from outside Vadodara?",
      answer: "Yes, while we are based in Vadodara, we welcome entrepreneurs and innovators from across Gujarat and beyond. Our goal is to foster innovation regardless of geographical boundaries."
    },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about our incubation center, programs, and support services.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-200">
                <AccordionTrigger className="text-left py-5 hover:text-guiitar-primary hover:no-underline">
                  <span className="font-semibold text-lg">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="py-3 text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
