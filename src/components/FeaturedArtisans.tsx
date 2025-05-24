import ArtisanCard from './ArtisanCard';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import storyImage12 from './photos/photo12.jpeg'
import storyImage13 from './photos/photo13.jpeg'
import storyImage14 from './photos/photo14.jpeg'
import storyImage19 from './photos/photo19.jpeg'

const FeaturedArtisans = () => {
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
      avatar: 'https://www.startpage.com/av/proxy-image?piurl=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.y5rMOcZoR1JdxC3acTRwogHaE7%26cb%3Diwc2%26pid%3DApi&sp=1748104196T194d83ef742d9714c4b3700839b7d77393a9149b1a3d7ac3e5bfbf7a775fa8cd',
      coverImage:storyImage12  ,
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
      coverImage: storyImage19 ,
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
      coverImage: storyImage13 ,
    },
    {
      id: '4',
      name: 'زينب الهاشمي',
      specialty: 'الجلابة المغربية والقفطان',
      location: 'تلمسان',
      rating: 5.0,
      reviewCount: 73,
      productsCount: 38,
      avatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop',
      coverImage: storyImage14 ,
      isVerified: true
    }
      
  ];

  return (
    <section id="artisans" className="py-16 bg-cream-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-terracotta-900 mb-4 font-arabic">
            حرفياتنا المبدعات
          </h2>
          <p className="text-lg text-terracotta-700 max-w-2xl mx-auto">
            تعرفي على أمهر الحرفيات في مجال الخياطة والطرز، واكتشفي إبداعاتهن الفريدة
          </p>
        </div>

        {/* Artisans Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {artisans.map((artisan) => (
            <ArtisanCard key={artisan.id} {...artisan} />
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Button 
            size="lg"
            variant="outline"
            className="border-terracotta-700 text-terracotta-700 hover:bg-terracotta-50 px-8"
            onClick={() => navigate('/artisans')}
          >
            عرض جميع الحرفيات
            <ArrowLeft className="mr-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedArtisans;
