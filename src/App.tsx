import React from 'react';
import { Car, Home, MapPin, Phone } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-orange-100">
      {/* Hero Section */}
      <div 
        className="h-[60vh] bg-cover bg-center relative"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1598091383021-15ddea10925d?auto=format&fit=crop&q=80&w=2070")',
        }}
      >
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">Happy Travels</h1>
            <p className="text-xl">Your Trusted Travel Partner in India</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Vehicle Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Car className="w-8 h-8 text-orange-600" />
            <h2 className="text-2xl font-semibold">Our Vehicle Fleet</h2>
          </div>
          <p className="text-gray-600">
            Experience comfortable journeys with our well-maintained fleet of vehicles including luxury tempo travelers and cars. 
            Perfect for both small groups and large families, our vehicles are equipped with modern amenities to ensure a pleasant travel experience.
          </p>
        </div>

        {/* Homestay Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Home className="w-8 h-8 text-orange-600" />
            <h2 className="text-2xl font-semibold">Affordable Homestays</h2>
          </div>
          <p className="text-gray-600">
            Immerse yourself in authentic Indian hospitality with our carefully selected homestays. 
            We offer budget-friendly accommodation options that provide a comfortable and cultural stay experience. 
            Our homestays are perfect for travelers looking to experience local lifestyle while maintaining comfort and affordability.
          </p>
        </div>

        {/* Contact Section */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-semibold mb-6">Contact Us</h2>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <MapPin className="w-6 h-6 text-orange-600" />
              <p className="text-gray-600">
                123 Tourism Road, Kerala Tourism Hub<br />
                Kochi, Kerala - 682001
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-6 h-6 text-orange-600" />
              <p className="text-gray-600">
                +91 98765 43210<br />
                +91 98765 43211
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-orange-900 text-white py-4">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p>© 2024 Happy Travels. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;