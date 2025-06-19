
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface User {
  id: string;
  username: string;
  email: string;
  profilePicture: string;
  bio: string;
  followers: number;
  following: number;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  signup: (username: string, email: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = async (email: string, password: string) => {
    // Mock login - in a real app, this would call an API
    console.log('Logging in with:', email, password);
    
    const mockUser: User = {
      id: '1',
      username: email.split('@')[0],
      email,
      profilePicture: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=400&fit=crop&crop=face',
      bio: 'Welcome to my profile! 🌟',
      followers: 1234,
      following: 567
    };
    
    setUser(mockUser);
  };

  const signup = async (username: string, email: string, password: string) => {
    // Mock signup - in a real app, this would call an API
    console.log('Signing up with:', username, email, password);
    
    const mockUser: User = {
      id: Date.now().toString(),
      username,
      email,
      profilePicture: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=400&fit=crop&crop=face',
      bio: 'New to this platform! 👋',
      followers: 0,
      following: 0
    };
    
    setUser(mockUser);
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
