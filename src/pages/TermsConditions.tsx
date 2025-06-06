
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const TermsConditions = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {/* Header */}
        <section className="bg-guiitar-primary text-white py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Terms & Conditions</h1>
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
                Welcome to GUIITAR COUNCIL. These Terms and Conditions govern your use of our website and services. By accessing or using our website and services, you agree to be bound by these Terms. If you disagree with any part of these Terms, please do not use our website or services.
              </p>

              <div className="space-y-10">
                <div>
                  <h2 className="text-2xl font-semibold text-guiitar-primary mb-4">1. Use of Services</h2>
                  <p className="mb-4">
                    GUIITAR COUNCIL provides incubation services, mentoring, funding opportunities, workshops, and events to support entrepreneurs and startups. Our services are subject to the following conditions:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>You must provide accurate and complete information when registering for our services or applying for our programs.</li>
                    <li>You are responsible for maintaining the confidentiality of your account information and password.</li>
                    <li>You agree not to use our services for any illegal or unauthorized purpose.</li>
                    <li>You must comply with all applicable laws and regulations when using our services.</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-guiitar-primary mb-4">2. Intellectual Property</h2>
                  <p className="mb-4">
                    The content on our website, including text, graphics, logos, images, and software, is the property of GUIITAR COUNCIL or its content suppliers and is protected by copyright and other intellectual property laws.
                  </p>
                  <p className="mb-4">
                    You may not reproduce, distribute, modify, or create derivative works of any materials on our website without prior written consent from GUIITAR COUNCIL.
                  </p>
                  <p>
                    With respect to innovations developed within our incubation programs, intellectual property rights are governed by specific agreements between GUIITAR COUNCIL and program participants.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-guiitar-primary mb-4">3. Application and Selection Process</h2>
                  <p className="mb-4">
                    Our incubation programs and funding opportunities have specific eligibility criteria and selection processes:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Applications must be submitted through the designated channels and include all required information.</li>
                    <li>Selection decisions are made at the sole discretion of GUIITAR COUNCIL's selection committee.</li>
                    <li>We reserve the right to reject applications without providing specific reasons.</li>
                    <li>Selected participants must sign additional agreements before joining our programs.</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-guiitar-primary mb-4">4. Confidentiality</h2>
                  <p>
                    We understand the sensitive nature of startup ideas and business plans. Information submitted through applications or shared during our programs is treated confidentially, subject to our Privacy Policy and any specific non-disclosure agreements. However, participants are responsible for indicating which information they consider proprietary or confidential.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-guiitar-primary mb-4">5. Limitation of Liability</h2>
                  <p className="mb-4">
                    GUIITAR COUNCIL provides its services "as is" and "as available" without any warranties, expressed or implied. We do not guarantee that:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>The services will meet your specific requirements</li>
                    <li>The services will be uninterrupted, timely, secure, or error-free</li>
                    <li>Any advice, mentoring, or guidance will lead to business success</li>
                  </ul>
                  <p className="mt-4">
                    In no event shall GUIITAR COUNCIL be liable for any indirect, incidental, special, or consequential damages arising out of or relating to our services, whether based on contract, tort, negligence, or any other legal theory.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-guiitar-primary mb-4">6. Termination</h2>
                  <p>
                    We reserve the right to terminate or suspend access to our services immediately, without prior notice, for any conduct that we believe violates these Terms or is harmful to other users, GUIITAR COUNCIL, or third parties, or for any other reason at our sole discretion.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-guiitar-primary mb-4">7. Changes to Terms</h2>
                  <p>
                    We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting on our website. Your continued use of our services after any such changes constitutes acceptance of the new Terms.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-guiitar-primary mb-4">8. Governing Law</h2>
                  <p>
                    These Terms shall be governed by and construed in accordance with the laws of India. Any disputes arising under these Terms shall be subject to the exclusive jurisdiction of the courts in Vadodara, Gujarat.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-guiitar-primary mb-4">Contact Us</h2>
                  <p className="mb-6">
                    If you have any questions about these Terms, please contact us at:
                  </p>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold mb-2">GUIITAR COUNCIL</h3>
                    <p>GSFC University Campus, Vigyan Bhavan</p>
                    <p>P.O. Fertilizernagar</p>
                    <p>Vadodara, Gujarat 391750</p>
                    <p className="mt-2">Email: legal@guiitarcouncil.org</p>
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

export default TermsConditions;
