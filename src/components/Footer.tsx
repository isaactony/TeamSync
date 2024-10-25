import React from 'react';
import { Users, Twitter, Linkedin, Github } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white border-t mt-auto">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1">
            <div className="flex items-center">
              <Users className="h-8 w-8 text-indigo-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">TeamSync</span>
            </div>
            <p className="mt-4 text-gray-600 text-sm">
              Building stronger teams through virtual experiences. Connect, collaborate, and celebrate together.
            </p>
            <div className="mt-4 flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-gray-500">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-500">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-500">
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Product</h3>
            <ul className="mt-4 space-y-4">
              <li>
                <a href="#" className="text-base text-gray-600 hover:text-gray-900">Features</a>
              </li>
              <li>
                <a href="#" className="text-base text-gray-600 hover:text-gray-900">Pricing</a>
              </li>
              <li>
                <a href="#" className="text-base text-gray-600 hover:text-gray-900">Security</a>
              </li>
              <li>
                <a href="#" className="text-base text-gray-600 hover:text-gray-900">Enterprise</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Company</h3>
            <ul className="mt-4 space-y-4">
              <li>
                <a href="#" className="text-base text-gray-600 hover:text-gray-900">About</a>
              </li>
              <li>
                <a href="#" className="text-base text-gray-600 hover:text-gray-900">Blog</a>
              </li>
              <li>
                <a href="#" className="text-base text-gray-600 hover:text-gray-900">Careers</a>
              </li>
              <li>
                <a href="#" className="text-base text-gray-600 hover:text-gray-900">Contact</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Legal</h3>
            <ul className="mt-4 space-y-4">
              <li>
                <a href="#" className="text-base text-gray-600 hover:text-gray-900">Privacy</a>
              </li>
              <li>
                <a href="#" className="text-base text-gray-600 hover:text-gray-900">Terms</a>
              </li>
              <li>
                <a href="#" className="text-base text-gray-600 hover:text-gray-900">Cookie Policy</a>
              </li>
              <li>
                <a href="#" className="text-base text-gray-600 hover:text-gray-900">Licenses</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-base text-gray-400 text-center">
            © {new Date().getFullYear()} TeamSync. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}