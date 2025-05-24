
import { Star, MapPin, Award, Eye } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface ArtisanCardProps {
  id: string;
  name: string;
  specialty: string;
  location: string;
  rating: number;
  reviewCount: number;
  productsCount: number;
  avatar: string;
  coverImage: string;
  isVerified?: boolean;
}

const ArtisanCard = ({
  name,
  specialty,
  location,
  rating,
  reviewCount,
  productsCount,
  avatar,
  coverImage,
  isVerified = false
}: ArtisanCardProps) => {
  return (
    <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white border-cream-200 overflow-hidden">
      {/* Cover Image */}
      <div className="relative h-32 overflow-hidden">
        <img 
          src={coverImage} 
          alt={`${name} boutique`}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        
        {/* Verified badge */}
        {isVerified && (
          <div className="absolute top-3 right-3 bg-terracotta-700 text-white px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1">
            <Award className="h-3 w-3" />
            موثقة
          </div>
        )}
      </div>

      <CardContent className="p-4 relative">
        {/* Avatar */}
        <div className="absolute -top-8 right-4">
          <img 
            src={avatar} 
            alt={name}
            className="w-16 h-16 rounded-full border-4 border-white object-cover shadow-lg"
          />
        </div>

        <div className="pt-10">
          {/* Name and specialty */}
          <h3 className="font-bold text-terracotta-900 mb-1 text-lg">
            {name}
          </h3>
          <p className="text-terracotta-600 text-sm mb-2 font-medium">
            {specialty}
          </p>

          {/* Location */}
          <div className="flex items-center gap-1 text-xs text-terracotta-600 mb-3">
            <MapPin className="h-3 w-3" />
            <span>{location}</span>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mb-4 text-center">
            <div>
              <div className="text-sm font-bold text-terracotta-900">{productsCount}</div>
              <div className="text-xs text-terracotta-600">منتج</div>
            </div>
            <div>
              <div className="flex items-center justify-center gap-1">
                <Star className="h-3 w-3 text-yellow-400 fill-current" />
                <span className="text-sm font-bold text-terracotta-900">{rating}</span>
              </div>
              <div className="text-xs text-terracotta-600">({reviewCount})</div>
            </div>
            <div>
              <div className="text-sm font-bold text-terracotta-900">95%</div>
              <div className="text-xs text-terracotta-600">رضا</div>
            </div>
          </div>

          {/* Action Button */}
          <Button 
            className="w-full bg-terracotta-700 hover:bg-terracotta-800 text-white"
            size="sm"
          >
            <Eye className="h-4 w-4 ml-2" />
            زيارة المحل
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ArtisanCard;
