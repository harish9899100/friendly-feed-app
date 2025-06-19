
import { Post } from '@/types';

export const mockPosts: Post[] = [
  {
    id: '1',
    userId: '1',
    username: 'sarah_photographer',
    userAvatar: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=150&h=150&fit=crop&crop=face',
    content: 'Beautiful sunset today! Perfect lighting for photography 📸✨',
    imageUrl: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=600&fit=crop',
    likes: 124,
    isLiked: false,
    comments: [
      {
        id: '1',
        userId: '2',
        username: 'mike_dev',
        content: 'Stunning shot! What camera did you use?',
        timestamp: '2024-06-19T10:30:00Z'
      },
      {
        id: '2',
        userId: '3',
        username: 'alex_creative',
        content: 'Love the colors! 🌅',
        timestamp: '2024-06-19T11:15:00Z'
      }
    ],
    timestamp: '2024-06-19T09:00:00Z'
  },
  {
    id: '2',
    userId: '2',
    username: 'tech_enthusiast',
    userAvatar: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=150&h=150&fit=crop&crop=face',
    content: 'Just finished building my new setup! Clean and minimal workspace for maximum productivity 💻',
    imageUrl: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=600&h=600&fit=crop',
    likes: 89,
    isLiked: true,
    comments: [
      {
        id: '3',
        userId: '1',
        username: 'sarah_photographer',
        content: 'So clean! I need to organize mine like this',
        timestamp: '2024-06-19T12:00:00Z'
      }
    ],
    timestamp: '2024-06-19T08:30:00Z'
  },
  {
    id: '3',
    userId: '3',
    username: 'coffee_lover',
    userAvatar: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=150&h=150&fit=crop&crop=face',
    content: 'Monday motivation starts with the perfect cup ☕ What\'s your go-to morning brew?',
    imageUrl: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=600&fit=crop',
    likes: 67,
    isLiked: false,
    comments: [],
    timestamp: '2024-06-19T07:15:00Z'
  }
];
