
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {/* Header */}
        <section className="bg-guiitar-primary text-white py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Privacy Policy</h1>
              <p className="text-lg opacity-90">
                Last updated: May 8, 2025
              </p>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="section-padding bg-white">
          <div className="container mx-auto px-4">
            <div className="prose prose-lg max-w-3xl mx-auto">
              <p className="lead text-gray-700 mb-6">
                At GUIITAR COUNCIL, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website or use our services.
              </p>

              <div className="space-y-10">
                <div>
                  <h2 className="text-2xl font-semibold text-guiitar-primary mb-4">Information We Collect</h2>
                  <p className="mb-4">We may collect the following information when you interact with our website or services:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Personal information such as name, email address, phone number, and address when you register for our programs, events, or newsletter.</li>
                    <li>Application information including educational background, work experience, and project details when you apply for incubation programs.</li>
                    <li>Usage data including IP address, browser type, pages visited, time spent on pages, and other analytics data to improve our website and services.</li>
                    <li>Communication preferences and history of interactions with our team.</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-guiitar-primary mb-4">How We Use Your Information</h2>
                  <p className="mb-4">We use the information we collect for the following purposes:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>To provide and improve our incubation programs, events, and services.</li>
                    <li>To process applications and communicate with applicants throughout the selection process.</li>
                    <li>To send important notifications, updates, and promotional content related to GUIITAR COUNCIL activities.</li>
                    <li>To analyze website usage and optimize user experience.</li>
                    <li>To comply with legal obligations and enforce our terms of service.</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-guiitar-primary mb-4">Data Security</h2>
                  <p>
                    We implement appropriate security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. These measures include data encryption, secure servers, and regular security assessments. However, no method of transmission over the internet or electronic storage is 100% secure, so we cannot guarantee absolute security.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-guiitar-primary mb-4">Third-Party Service Providers</h2>
                  <p>
                    We may engage trusted third-party service providers to perform functions on our behalf, such as payment processing, data analysis, email delivery, and hosting services. These service providers have access to your personal information only to perform these tasks on our behalf and are obligated to maintain confidentiality.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-guiitar-primary mb-4">Your Rights and Choices</h2>
                  <p className="mb-4">You have certain rights regarding your personal information:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Access and update your personal information stored with us.</li>
                    <li>Request deletion of your personal data, subject to legal retention requirements.</li>
                    <li>Opt-out of marketing communications while still receiving essential service-related communications.</li>
                    <li>Lodge a complaint with a data protection authority if you believe your privacy rights have been violated.</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-guiitar-primary mb-4">Changes to This Privacy Policy</h2>
                  <p>
                    We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. You are advised to review this Privacy Policy periodically for any changes.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-guiitar-primary mb-4">Contact Us</h2>
                  <p className="mb-6">
                    If you have any questions about this Privacy Policy or our data practices, please contact us at:
                  </p>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold mb-2">GUIITAR COUNCIL</h3>
                    <p>GSFC University Campus, Vigyan Bhavan</p>
                    <p>P.O. Fertilizernagar</p>
                    <p>Vadodara, Gujarat 391750</p>
                    <p className="mt-2">Email: privacy@guiitarcouncil.org</p>
                    <p>Phone: +91-265-2225XXX</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
