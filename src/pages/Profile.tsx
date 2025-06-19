
import { useParams } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { mockPosts } from '@/data/mockData';
import { useState } from 'react';

const Profile = () => {
  const { userId } = useParams();
  const { user } = useAuth();
  const [isFollowing, setIsFollowing] = useState(false);
  
  // In a real app, you'd fetch user data based on userId
  const profileUser = user;
  const userPosts = mockPosts.filter(post => post.userId === user?.id);
  const isOwnProfile = !userId || userId === user?.id;

  const handleFollow = () => {
    setIsFollowing(!isFollowing);
  };

  if (!profileUser) return null;

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-sm border p-8 mb-8">
        <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-8">
          <Avatar className="h-32 w-32">
            <AvatarImage src={profileUser.profilePicture} />
            <AvatarFallback className="text-2xl">
              {profileUser.username.charAt(0).toUpperCase()}
            </AvatarFallback>
          </Avatar>
          
          <div className="flex-1 text-center md:text-left">
            <div className="flex flex-col md:flex-row md:items-center md:space-x-4 mb-4">
              <h1 className="text-2xl font-bold">{profileUser.username}</h1>
              {!isOwnProfile && (
                <Button
                  onClick={handleFollow}
                  variant={isFollowing ? "outline" : "default"}
                  className="mt-2 md:mt-0"
                >
                  {isFollowing ? 'Following' : 'Follow'}
                </Button>
              )}
            </div>
            
            <div className="flex justify-center md:justify-start space-x-8 mb-4">
              <div className="text-center">
                <div className="font-bold text-lg">{userPosts.length}</div>
                <div className="text-gray-600 text-sm">Posts</div>
              </div>
              <div className="text-center">
                <div className="font-bold text-lg">{profileUser.followers}</div>
                <div className="text-gray-600 text-sm">Followers</div>
              </div>
              <div className="text-center">
                <div className="font-bold text-lg">{profileUser.following}</div>
                <div className="text-gray-600 text-sm">Following</div>
              </div>
            </div>
            
            <p className="text-gray-700 max-w-md">{profileUser.bio}</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {userPosts.map((post) => (
          <Card key={post.id} className="overflow-hidden hover:shadow-md transition-shadow">
            <CardContent className="p-0">
              {post.imageUrl && (
                <img
                  src={post.imageUrl}
                  alt="Post"
                  className="w-full h-64 object-cover"
                />
              )}
              <div className="p-4">
                <p className="text-sm text-gray-700 line-clamp-3">{post.content}</p>
                <div className="flex items-center justify-between mt-2 text-xs text-gray-500">
                  <span>{post.likes} likes</span>
                  <span>{post.comments.length} comments</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Profile;
