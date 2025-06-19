
import { useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Heart, MessageSquare } from 'lucide-react';
import { Post } from '@/types';

interface PostCardProps {
  post: Post;
  onLike: (postId: string) => void;
  onComment: (postId: string, comment: string) => void;
}

const PostCard = ({ post, onLike, onComment }: PostCardProps) => {
  const [newComment, setNewComment] = useState('');
  const [showComments, setShowComments] = useState(false);

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newComment.trim()) {
      onComment(post.id, newComment);
      setNewComment('');
    }
  };

  const formatDate = (timestamp: string) => {
    const date = new Date(timestamp);
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
    
    if (diffHours < 1) return 'Just now';
    if (diffHours < 24) return `${diffHours}h`;
    return `${Math.floor(diffHours / 24)}d`;
  };

  return (
    <Card className="max-w-full overflow-hidden hover:shadow-md transition-shadow">
      <CardContent className="p-0">
        {/* Header */}
        <div className="flex items-center space-x-3 p-4">
          <Avatar className="h-10 w-10">
            <AvatarImage src={post.userAvatar} />
            <AvatarFallback>
              {post.username.charAt(0).toUpperCase()}
            </AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <div className="flex items-center space-x-2">
              <h3 className="font-semibold text-sm">{post.username}</h3>
              <span className="text-gray-500 text-xs">
                {formatDate(post.timestamp)}
              </span>
            </div>
          </div>
        </div>

        {/* Content */}
        {post.content && (
          <div className="px-4 pb-3">
            <p className="text-gray-800">{post.content}</p>
          </div>
        )}

        {/* Image */}
        {post.imageUrl && (
          <div className="w-full">
            <img
              src={post.imageUrl}
              alt="Post content"
              className="w-full h-auto max-h-96 object-cover"
            />
          </div>
        )}

        {/* Actions */}
        <div className="px-4 py-3 border-t">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                size="sm"
                className={`flex items-center space-x-2 ${
                  post.isLiked ? 'text-red-500 hover:text-red-600' : 'text-gray-600 hover:text-red-500'
                }`}
                onClick={() => onLike(post.id)}
              >
                <Heart 
                  size={20} 
                  className={post.isLiked ? 'fill-current' : ''} 
                />
                <span>{post.likes}</span>
              </Button>
              
              <Button
                variant="ghost"
                size="sm"
                className="flex items-center space-x-2 text-gray-600 hover:text-blue-500"
                onClick={() => setShowComments(!showComments)}
              >
                <MessageSquare size={20} />
                <span>{post.comments.length}</span>
              </Button>
            </div>
          </div>

          {/* Comments */}
          {showComments && (
            <div className="mt-4 space-y-3">
              {post.comments.map((comment) => (
                <div key={comment.id} className="flex space-x-2">
                  <Avatar className="h-6 w-6">
                    <AvatarFallback className="text-xs">
                      {comment.username.charAt(0).toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="bg-gray-100 rounded-lg px-3 py-2">
                      <span className="font-semibold text-sm">{comment.username}</span>
                      <p className="text-sm">{comment.content}</p>
                    </div>
                  </div>
                </div>
              ))}
              
              <form onSubmit={handleCommentSubmit} className="flex space-x-2 mt-3">
                <Input
                  placeholder="Add a comment..."
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  className="flex-1"
                />
                <Button type="submit" size="sm">
                  Post
                </Button>
              </form>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default PostCard;
