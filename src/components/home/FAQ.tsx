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
      question: "What is the GUIITAR Council?",
      answer: "The GUIITAR Council (Section 8 Company) is the incubation center of GSFC University, Vadodara, Gujarat, supporting students, faculty, startups, and entrepreneurs in innovation, entrepreneurship, and business development."
    },
    {
      question: "Who can apply for incubation support at GUIITAR Council?",
      answer: "Students, alumni, faculty, researchers, and external entrepreneurs with innovative startup ideas can apply for incubation support."
    },
    {
      question: "Where is the GUIITAR Council located?",
      answer: "The GUIITAR Council operates at GSFC University, P.O. Fertilizernagar, Vadodara – 391750, Gujarat, INDIA."
    },
    {
      question: "What support does the GUIITAR Council offer to startups?",
      answer: "We provide mentorship and business guidance, funding support through SSIP 2.0 and Nodal Institute, GoG, co-working space and prototyping lab access, networking opportunities with investors and industry experts, and intellectual property protection."
    },
    {
      question: "How can I apply for incubation support?",
      answer: "You can apply through the GUIITAR Council website by filling out the application form at https://bit.ly/guiitar or by visiting our office at GSFC University."
    },
    {
      question: "Does the GUIITAR Council provide funding support?",
      answer: "Yes, we offer funding through Student Startup and Innovation Policy (SSIP 2.0) and Nodal Institute Scheme 'Assistance for Startups/Innovation, Gujarat Industrial Policy – 2020'."
    },
    {
      question: "What are the eligibility criteria for funding support?",
      answer: "For SSIP 2.0: Up to ₹2.50 lakhs seed support for individuals up to age 35, including school students (up to Class 12), diploma/vocational/undergraduate/postgraduate/doctoral students, alumni, or dropouts. For Nodal Institute: Up to ₹30.00 lakhs seed support for startups registered as Partnership/LLP/Private Company with a Registered Office Certificate in Gujarat, where the startup/innovator is not a promoter or significant (>10%) shareholder of another company. Preference is given to product/process/service-based innovations with intellectual property and significant commercial potential."
    },
    {
      question: "Does the GUIITAR Council organize events for startups?",
      answer: "Yes, we regularly organize events such as My Startup Story, Demo Day, Hackathons, investor meetups, and expert talks to support startups."
    },
    {
      question: "How can I participate in startup events and workshops?",
      answer: "Keep an eye on our website and social media pages for announcements about upcoming events and workshops."
    },
    {
      question: "Can external startups or entrepreneurs use GUIITAR Council facilities?",
      answer: "Yes, external startups and entrepreneurs can apply for incubation or utilize specific services based on availability and approval."
    },
    {
      question: "What is the incubation duration at the GUIITAR Council?",
      answer: "The incubation duration is 36 months."
    },
    {
      question: "Is there any cost to join the incubation program?",
      answer: "Joining the incubation program is free."
    },
    {
      question: "How can I contact the GUIITAR Council for more information?",
      answer: "You can reach us via email at guiitar@gsfcuniversity.ac.in, phone at 9313262712 (10:00 AM to 05:00 PM), or visit us at 2nd Floor, Event Room, Anviksha, GUIITAR Council, GSFC University, P.O. Fertilizernagar, Vadodara – 391750, Gujarat, INDIA."
    },
    {
      question: "Can I collaborate with the GUIITAR Council as an investor, mentor, or service provider?",
      answer: "Yes, we welcome industry experts, investors, mentors, and service providers to collaborate with the GUIITAR Council."
    }
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