import { FiClock, FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import ContactForm from "../../components/ContactForm";

export default function ContactInformationSection() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Details */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Get in Touch
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Have questions about your stay or need assistance with your
                reservation? Our friendly team is available 24/7 to help you.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <FiMapPin className="w-6 h-6 text-blue-600 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Address
                  </h3>
                  <p className="text-gray-600">
                    123 Ocean Drive
                    <br />
                    Paradise City, PC 12345
                    <br />
                    United States
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <FiPhone className="w-6 h-6 text-blue-600 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Phone
                  </h3>
                  <p className="text-gray-600">
                    <a
                      href="tel:+1234567890"
                      className="hover:text-blue-600 transition-colors"
                    >
                      +1 (234) 567-8900
                    </a>
                  </p>
                  <p className="text-sm text-gray-500">Available 24/7</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <FiMail className="w-6 h-6 text-blue-600 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Email
                  </h3>
                  <p className="text-gray-600">
                    <a
                      href="mailto:info@horizonheaven.com"
                      className="hover:text-blue-600 transition-colors"
                    >
                      info@horizonheaven.com
                    </a>
                  </p>
                  <p className="text-sm text-gray-500">
                    We&apos;ll respond within 24 hours
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <FiClock className="w-6 h-6 text-blue-600 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Front Desk Hours
                  </h3>
                  <p className="text-gray-600">24 hours a day, 7 days a week</p>
                  <p className="text-sm text-gray-500">
                    Check-in: 3:00 PM | Check-out: 11:00 AM
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
