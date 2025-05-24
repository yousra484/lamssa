import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Star, MapPin, Award, Eye } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Artisans = () => {
  const navigate = useNavigate();
  const artisans = [
    {
      id: '1',
      name: 'فاطمة بن علي',
      specialty: 'الطرز التقليدي الجزائري',
      location: 'الجزائر العاصمة',
      rating: 4.9,
      reviewCount: 127,
      productsCount: 45,
      avatar: 'https://www.startpage.com/av/proxy-image?piurl=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.nm-wqDymL47FAybhF1-euQHaEL%26cb%3Diwc2%26pid%3DApi&sp=1748047736Tf53f0e7181a42f13264e263ca9af2f24a1db70c8ecdfa91a0ae5531edbb52139',
      coverImage: 'https://www.startpage.com/av/proxy-image?piurl=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.GgT_L4QOLEVsBPa4uerYJgHaEK%26cb%3Diwc2%26pid%3DApi&sp=1748047541T43798338a9fef091f4075dbe8feb399425965982323375af235d13ca88c730ec',
      isVerified: true
    },
    {
      id: '2',
      name: 'خديجة محمد',
      specialty: 'الخياطة العصرية والتقليدية',
      location: 'وهران',
      rating: 4.8,
      reviewCount: 89,
      productsCount: 32,
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop',
      coverImage: 'https://www.startpage.com/av/proxy-image?piurl=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.xtFFEQlRogQ5wflZEGVjigHaD3%26pid%3DApi&sp=1748048068Tec260e628e63cd4ee5c66c04d96c18c62266c9c2a1ab5c7f3310d7450bf72788',
      isVerified: true
    },
    {
      id: '3',
      name: 'عائشة قادر',
      specialty: 'الطرز بالخيط الذهبي',
      location: 'قسنطينة',
      rating: 4.7,
      reviewCount: 156,
      productsCount: 28,
      avatar: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=150&h=150&fit=crop',
      coverImage: 'https://www.startpage.com/av/proxy-image?piurl=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.0oPD8xwHeoLOrZG4zMoyQQHaHa%26cb%3Diwc2%26pid%3DApi&sp=1748049161T448f16203acd0c4bb380ea24b6e2fe724d22cc916b6504e2459ef9de9d2363a9'
    }
  ];

  return (
    <section id="artisans" className="py-16 bg-cream-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-terracotta-900 mb-4">
            حرفياتنا المبدعات
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            تعرفي على مجموعة من الحرفيات الموهوبات اللواتي يجمعن بين التقاليد والإبداع في صناعة الملابس التقليدية
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {artisans.map((artisan) => (
            <Card key={artisan.id} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white border-cream-200 overflow-hidden">
              {/* Cover Image */}
              <div className="relative h-32 overflow-hidden">
                <img 
                  src={artisan.coverImage} 
                  alt={`${artisan.name} boutique`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                
                {/* Verified badge */}
                {artisan.isVerified && (
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
                    src={artisan.avatar} 
                    alt={artisan.name}
                    className="w-16 h-16 rounded-full border-4 border-white object-cover shadow-lg"
                  />
                </div>

                <div className="pt-10">
                  {/* Name and specialty */}
                  <h3 className="font-bold text-terracotta-900 mb-1 text-lg">
                    {artisan.name}
                  </h3>
                  <p className="text-terracotta-600 text-sm mb-2 font-medium">
                    {artisan.specialty}
                  </p>

                  {/* Location */}
                  <div className="flex items-center gap-1 text-xs text-terracotta-600 mb-3">
                    <MapPin className="h-3 w-3" />
                    <span>{artisan.location}</span>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 mb-4 text-center">
                    <div>
                      <div className="text-sm font-bold text-terracotta-900">{artisan.productsCount}</div>
                      <div className="text-xs text-terracotta-600">منتج</div>
                    </div>
                    <div>
                      <div className="flex items-center justify-center gap-1">
                        <Star className="h-3 w-3 text-yellow-400 fill-current" />
                        <span className="text-sm font-bold text-terracotta-900">{artisan.rating}</span>
                      </div>
                      <div className="text-xs text-terracotta-600">({artisan.reviewCount})</div>
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
                    onClick={() => navigate(`/artisans/${artisan.id}`)}
                  >
                    <Eye className="h-4 w-4 ml-2" />
                    زيارة المحل
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            variant="outline"
            className="text-terracotta-600 border-terracotta-200 hover:bg-terracotta-50"
            onClick={() => navigate('/artisans')}
          >
            تعرفي على المزيد
            <ArrowLeft className="mr-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Artisans;
