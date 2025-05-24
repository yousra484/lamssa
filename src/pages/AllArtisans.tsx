import React, { useState, useMemo } from 'react';
import Layout from '@/components/Layout';
import ArtisanCard from '@/components/ArtisanCard';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Search, SlidersHorizontal, ChevronLeft, ChevronRight } from 'lucide-react';
import storyImage12 from '../components/photos/photo12.jpeg'
import storyImage13 from '../components/photos/photo13.jpeg'
import storyImage14 from '../components/photos/photo14.jpeg'
import storyImage15 from '../components/photos/photo15.jpeg'
import storyImage16 from '../components/photos/photo16.jpeg'
import storyImage17 from '../components/photos/photo17.jpeg'
import storyImage18 from '../components/photos/photo18.jpeg'
import storyImage19 from '../components/photos/photo19.jpeg'


// Données des artisans
const allArtisansData = [
  {
    id: '1',
    name: 'فاطمة بن علي',
    specialty: 'الطرز التقليدي الجزائري',
    location: 'الجزائر العاصمة',
    rating: 4.9,
    reviewCount: 127,
    productsCount: 45,
    avatar: 'https://www.startpage.com/av/proxy-image?piurl=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.y5rMOcZoR1JdxC3acTRwogHaE7%26cb%3Diwc2%26pid%3DApi&sp=1748104196T194d83ef742d9714c4b3700839b7d77393a9149b1a3d7ac3e5bfbf7a775fa8cd',
    coverImage: storyImage12 ,
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
    coverImage: storyImage14  ,
    isVerified: true
  },
  {
    id: '5',
    name: 'نورة بوعزيز',
    specialty: 'الطرز العصري',
    location: 'عنابة',
    rating: 4.6,
    reviewCount: 92,
    productsCount: 41,
    avatar: 'https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?w=150&h=150&fit=crop',
    coverImage: storyImage18 ,
    isVerified: true
  },
  {
    id: '6',
    name: 'سعاد مالكي',
    specialty: 'القفطان الجزائري',
    location: 'سطيف',
    rating: 4.8,
    reviewCount: 143,
    productsCount: 52,
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop',
    coverImage: storyImage15 ,
    isVerified: true
  },
  {
    id: '7',
    name: 'ليلى بن سالم',
    specialty: 'الطرز التقليدي الجزائري',
    location: 'باتنة',
    rating: 4.7,
    reviewCount: 88,
    productsCount: 35,
    avatar: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?w=150&h=150&fit=crop',
    coverImage: storyImage16 ,
  },
  {
    id: '8',
    name: 'أمينة عبد النور',
    specialty: 'الجلابة المغربية والقفطان',
    location: 'وهران',
    rating: 4.9,
    reviewCount: 167,
    productsCount: 48,
    avatar: 'https://www.startpage.com/av/proxy-image?piurl=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.lceSoU25dOf5rshTjT2pywHaE8%26cb%3Diwc2%26pid%3DApi&sp=1748104196T882b9aebddb854227a5114a92e6e840b8b32c33549c07b0baab0f39e7f946522',
    coverImage: storyImage17 ,
    isVerified: true
  }
];

const ITEMS_PER_PAGE = 8;

const AllArtisans = () => {
  // États
  const [searchQuery, setSearchQuery] = useState('');
  const [specialty, setSpecialty] = useState('all');
  const [sortBy, setSortBy] = useState('rating');
  const [currentPage, setCurrentPage] = useState(1);

  // Liste des spécialités uniques
  const specialties = useMemo(() => {
    const uniqueSpecialties = new Set(allArtisansData.map(artisan => artisan.specialty));
    return ['all', ...Array.from(uniqueSpecialties)];
  }, []);

  // Filtrage et tri des artisans
  const filteredArtisans = useMemo(() => {
    return allArtisansData
      .filter(artisan => {
        const matchesSearch = artisan.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            artisan.specialty.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            artisan.location.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesSpecialty = specialty === 'all' || artisan.specialty === specialty;
        return matchesSearch && matchesSpecialty;
      })
      .sort((a, b) => {
        if (sortBy === 'rating') return b.rating - a.rating;
        if (sortBy === 'reviews') return b.reviewCount - a.reviewCount;
        if (sortBy === 'products') return b.productsCount - a.productsCount;
        return 0;
      });
  }, [searchQuery, specialty, sortBy]);

  // Pagination
  const totalPages = Math.ceil(filteredArtisans.length / ITEMS_PER_PAGE);
  const paginatedArtisans = filteredArtisans.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Layout>
      <div className="py-16 font-arabic">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-terracotta-900 text-center mb-8">
            الحرفيات المبدعات
          </h1>

          {/* Filtres et recherche */}
          <div className="bg-white p-4 rounded-lg shadow-md mb-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {/* Barre de recherche */}
              <div className="relative">
                <Search className="absolute right-3 top-2.5 h-5 w-5 text-terracotta-500" />
                <Input
                  placeholder="البحث عن حرفية..."
                  className="pl-4 pr-10 text-right"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>

              {/* Filtre par spécialité */}
              <Select value={specialty} onValueChange={setSpecialty}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="التخصص" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">جميع التخصصات</SelectItem>
                  {specialties.filter(s => s !== 'all').map(s => (
                    <SelectItem key={s} value={s}>{s}</SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {/* Tri */}
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="الترتيب حسب" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="rating">التقييم</SelectItem>
                  <SelectItem value="reviews">عدد التقييمات</SelectItem>
                  <SelectItem value="products">عدد المنتجات</SelectItem>
                </SelectContent>
              </Select>

              {/* Bouton de réinitialisation */}
              <Button
                variant="outline"
                onClick={() => {
                  setSearchQuery('');
                  setSpecialty('all');
                  setSortBy('rating');
                  setCurrentPage(1);
                }}
                className="w-full md:w-auto"
              >
                <SlidersHorizontal className="h-4 w-4 ml-2" />
                إعادة ضبط الفلترة
              </Button>
            </div>
          </div>

          {/* Grille des artisans */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {paginatedArtisans.map((artisan) => (
              <ArtisanCard
                key={artisan.id}
                {...artisan}
              />
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-2 mt-8">
              <Button
                variant="outline"
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
              >
                <ChevronRight className="h-4 w-4" />
              </Button>

              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <Button
                  key={page}
                  variant={currentPage === page ? "default" : "outline"}
                  onClick={() => handlePageChange(page)}
                  className={currentPage === page ? "bg-terracotta-700" : ""}
                >
                  {page}
                </Button>
              ))}

              <Button
                variant="outline"
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default AllArtisans;
