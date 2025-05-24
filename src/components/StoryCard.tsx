import { PlayCircle, Heart, Share2, ArrowLeft } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface StoryCardProps {
  title: string;
  artisan: string;
  content: string;
  image: string;
  readTime?: string;
  isVideo?: boolean;
  isNew?: boolean;
}

const StoryCard = ({
  title,
  artisan,
  content,
  image,
  readTime,
  isVideo = false,
  isNew = false,
}: StoryCardProps) => {
  return (
    <div className="min-w-[300px] max-w-[300px] bg-white rounded-lg overflow-hidden shadow-md snap-start hover:shadow-xl transition-shadow duration-300">
      <div className="relative aspect-square">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover"
        />
        
        {isVideo && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/20">
            <PlayCircle className="w-12 h-12 text-white" />
          </div>
        )}

        {isNew && (
          <Badge className="absolute top-3 right-3 bg-terracotta-100 text-terracotta-700">
            جديد
          </Badge>
        )}

        {readTime && (
          <div className="absolute bottom-3 right-3 bg-white/80 px-2 py-1 rounded text-sm text-terracotta-700">
            {readTime}
          </div>
        )}
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-terracotta-900 mb-2">
          {title}
        </h3>
        <p className="text-terracotta-600 text-sm mb-4">
          {artisan}
        </p>
        <p className="text-terracotta-700 line-clamp-3">
          {content}
        </p>

        <div className="flex justify-between items-center mt-4">
          <Button variant="ghost" className="text-terracotta-700 hover:text-terracotta-900">
            اقرأ المزيد
            <ArrowLeft className="mr-2 h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="text-terracotta-700 hover:text-terracotta-900">
            <Share2 className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>

  );
};

export default StoryCard;
