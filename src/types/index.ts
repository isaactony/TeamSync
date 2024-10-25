export interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
  team: string;
  role: 'member' | 'admin';
  preferences: {
    notifications: boolean;
    calendar: boolean;
  };
}

export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  duration: number;
  category: 'challenge' | 'workshop' | 'networking' | 'game';
  type: string;
  participants: number;
  maxParticipants: number;
  image: string;
  status: 'upcoming' | 'ongoing' | 'completed';
  meetingUrl?: string;
}

export interface TeamStats {
  participationRate: number;
  eventsAttended: number;
  points: number;
  rank: number;
}