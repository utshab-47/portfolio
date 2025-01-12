import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';

export function ContactInfo() {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4 bg-gray-50 p-4 rounded-lg border border-gray-200">
        <Mail className="text-blue-600" />
        <div>
          <h3 className="font-semibold text-gray-800">Email</h3>
          <p className="text-gray-600">333uts@gmail.com</p>
        </div>
      </div>
      <div className="flex items-center gap-4 bg-gray-50 p-4 rounded-lg border border-gray-200">
        <Phone className="text-blue-600" />
        <div>
          <h3 className="font-semibold text-gray-800">Phone</h3>
          <p className="text-gray-600">+977 9869414999</p>
        </div>
      </div>
      <div className="flex items-center gap-4 bg-gray-50 p-4 rounded-lg border border-gray-200">
        <MapPin className="text-blue-600" />
        <div>
          <h3 className="font-semibold text-gray-800">Location</h3>
          <p className="text-gray-600">Banepa, Kavre, Nepal</p>
        </div>
      </div>
    </div>
  );
}