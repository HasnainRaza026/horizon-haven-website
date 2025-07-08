export default function QuickStatsSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          <div className="space-y-2">
            <div className="text-4xl font-bold text-blue-600">8</div>
            <div className="text-gray-600">Luxury Rooms</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl font-bold text-blue-600">5</div>
            <div className="text-gray-600">Star Rating</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl font-bold text-blue-600">24/7</div>
            <div className="text-gray-600">Concierge Service</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl font-bold text-blue-600">100%</div>
            <div className="text-gray-600">Guest Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  );
}
