import { Calendar, Users, Clock } from 'lucide-react';

interface EventCardProps {
  title: string;
  date: string;
  time: string;
  participants: number;
  maxParticipants: number;
  image: string;
  category: string;
}

export default function EventCard({
  title,
  date,
  time,
  participants,
  maxParticipants,
  image,
  category,
}: EventCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-[1.02]">
      <div className="relative h-48">
        <img src={image} alt={title} className="w-full h-full object-cover" />
        <span className="absolute top-4 right-4 bg-indigo-600 text-white px-3 py-1 rounded-full text-sm">
          {category}
        </span>
      </div>
      <div className="p-5">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
        <div className="space-y-2">
          <div className="flex items-center text-gray-600">
            <Calendar className="h-4 w-4 mr-2" />
            <span className="text-sm">{date}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Clock className="h-4 w-4 mr-2" />
            <span className="text-sm">{time}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Users className="h-4 w-4 mr-2" />
            <span className="text-sm">{participants}/{maxParticipants} participants</span>
          </div>
        </div>
        <button className="mt-4 w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors">
          Join Event
        </button>
      </div>
    </div>
  );
}