import { Star, Heart, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface ProductCardProps {
  isFavorite?: boolean;
  onFavoriteClick?: () => void;
  onClick?: () => void;
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  reviewCount: number;
  artisan: string;
  category: string;
  isOnSale?: boolean;
  isNew?: boolean;
}

const ProductCard = ({
  isFavorite = false,
  onFavoriteClick,
  onClick,
  isNew = false, 
  name, 
  price, 
  originalPrice, 
  image, 
  rating, 
  reviewCount, 
  artisan, 
  category,
  isOnSale = false 
}: ProductCardProps) => {
  return (
    <Card 
    className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer bg-white border-cream-200 overflow-hidden"
    onClick={(e) => {
      e.preventDefault();
      e.stopPropagation();
      if (onClick) {
        onClick();
      }
    }}
  >
    
      <div className="relative">
        <img 
          src={image} 
          alt={name}
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        
        {/* Sale badge */}
        {isOnSale && (
          <div className="absolute top-3 right-3 bg-burgundy-600 text-white px-2 py-1 rounded-full text-xs font-medium">
            تخفيض
          </div>
        )}
        
        {/* Favorite button */}
        {isNew && (
          <Badge className="absolute top-3 right-3 bg-terracotta-100 text-terracotta-700">
            جديد
          </Badge>
        )}
        
        {/* Favorite button */}
        <Button
          variant="ghost"
          size="sm"
          className={`absolute top-3 left-3 bg-white/80 hover:bg-white rounded-full p-2 ${isFavorite ? 'text-red-500' : 'text-terracotta-700'}`}
          onClick={(e) => {
            e.stopPropagation();
            onFavoriteClick?.();
          }}
        >
          <Heart className={`h-4 w-4 ${isFavorite ? 'fill-current' : ''}`} />
        </Button>

        {/* Quick add to cart */}
        <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Button 
            className="w-full bg-terracotta-700 hover:bg-terracotta-800 text-white"
            size="sm"
            onClick={(e) => {
              e.stopPropagation(); // Empêche la propagation du clic au parent
              // Ici vous pourrez ajouter la logique d'ajout au panier plus tard
              console.log('Produit ajouté au panier');
            }}
            >
            <ShoppingCart className="h-4 w-4 ml-2" />
            أضف للسلة
          </Button>
        </div>
      </div>

      <CardContent className="p-4">
        {/* Category */}
        <div className="text-xs text-terracotta-600 mb-2 font-medium">
          {category}
        </div>

        {/* Product name */}
        <h3 className="font-semibold text-terracotta-900 mb-2 line-clamp-2 leading-snug">
          {name}
        </h3>

        {/* Artisan */}
        <p className="text-sm text-terracotta-600 mb-3">
          بواسطة: {artisan}
        </p>

        {/* Rating */}
        <div className="flex items-center gap-1 mb-3">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${
                  i < Math.floor(rating)
                    ? 'text-yellow-400 fill-current'
                    : 'text-gray-300'
                }`}
              />
            ))}
          </div>
          <span className="text-sm text-terracotta-600 mr-2">
            ({reviewCount})
          </span>
        </div>

        {/* Price */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold text-terracotta-900">
              {price.toLocaleString()} دج
            </span>
            {originalPrice && (
              <span className="text-sm text-gray-500 line-through">
                {originalPrice.toLocaleString()} دج
              </span>
            )}
          </div>
          
          {isOnSale && originalPrice && (
            <div className="text-xs text-burgundy-600 font-medium">
              وفر {Math.round(((originalPrice - price) / originalPrice) * 100)}%
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
