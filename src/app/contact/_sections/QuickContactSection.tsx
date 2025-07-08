export default function QuickContactSection() {
  return (
    <section className="py-16 bg-blue-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold mb-4">Need Immediate Assistance?</h2>
        <p className="text-xl mb-8">
          Our concierge team is available 24/7 to help you
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:+1234567890"
            className="bg-white text-blue-600 px-8 py-3 rounded-md text-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Call Now: +1 (234) 567-8900
          </a>
          <a
            href="mailto:info@horizonheaven.com"
            className="bg-blue-700 text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-blue-800 transition-colors"
          >
            Email Us
          </a>
        </div>
      </div>
    </section>
  );
}
