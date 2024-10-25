import React from 'react';
import { Check, Star } from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    price: 29,
    description: 'Perfect for small teams getting started',
    features: [
      'Up to 10 team members',
      '5 events per month',
      'Basic analytics',
      'Email support',
    ],
    popular: false,
  },
  {
    name: 'Professional',
    price: 79,
    description: 'Best for growing teams',
    features: [
      'Up to 50 team members',
      'Unlimited events',
      'Advanced analytics',
      'Priority support',
      'Custom event creation',
    ],
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 199,
    description: 'For large organizations',
    features: [
      'Unlimited team members',
      'Unlimited events',
      'Custom analytics',
      '24/7 support',
      'Custom branding',
      'API access',
    ],
    popular: false,
  },
];

export default function PricingSection() {
  return (
    <div className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Simple, transparent pricing
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Choose the perfect plan for your team
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl ${
                plan.popular
                  ? 'bg-white shadow-xl scale-105 z-10'
                  : 'bg-white/80 shadow-lg'
              } transition-all hover:scale-105`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2">
                  <div className="inline-flex items-center rounded-full bg-indigo-600 p-2 text-white shadow-lg">
                    <Star className="h-5 w-5 animate-pulse" />
                  </div>
                </div>
              )}
              <div className="p-8">
                <h3 className="text-xl font-semibold text-gray-900">{plan.name}</h3>
                <p className="mt-4 text-gray-500">{plan.description}</p>
                <p className="mt-8">
                  <span className="text-4xl font-extrabold text-gray-900">${plan.price}</span>
                  <span className="text-base font-medium text-gray-500">/month</span>
                </p>
                <ul className="mt-8 space-y-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <Check className="h-5 w-5 text-indigo-500" />
                      <span className="ml-3 text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  className={`mt-8 w-full rounded-lg px-4 py-2 text-center font-medium ${
                    plan.popular
                      ? 'bg-indigo-600 text-white hover:bg-indigo-700'
                      : 'bg-indigo-50 text-indigo-700 hover:bg-indigo-100'
                  } transition-colors`}
                >
                  Get started
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}