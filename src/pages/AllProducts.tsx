import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import ProductCard from '../components/ProductCard';
import { Input } from '../components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Button } from '../components/ui/button';
import { Search, SlidersHorizontal, ChevronLeft, ChevronRight } from 'lucide-react';
import storyImage7 from '../components/photos/photo7.jpeg';
import storyImage8 from '../components/photos/photo8.jpeg';
import storyImage9 from '../components/photos/photo9.jpeg';
import storyImage10 from '../components/photos/photo10.jpeg';
import storyImage11 from '../components/photos/photo11.jpeg';


// Données des produits
const allProductsData = [

  {
    id: '1',
    name: 'قندورة جزائرية بالطرز التقليدي',
    price: 15000,
    originalPrice: 18000,
    image: 'https://scontent.ftlm1-2.fna.fbcdn.net/v/t39.30808-6/499536935_710288098162545_2772063511143649122_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_ohc=J_ukNh-aBuUQ7kNvwFQymsm&_nc_oc=Adkiyuyu8Bb9DW2XWdP8rvwyBKhGktYMAD6oozVC3invStjBXaelNO-Qd_XvMUlD0J8&_nc_zt=23&_nc_ht=scontent.ftlm1-2.fna&_nc_gid=QNpSBsXocHT5Nw4WM5oImQ&oh=00_AfK5nvpWYcO0kOpGlyoHqHKKA4EnL6MAdTWCSzFK_HDqLw&oe=683655BA',
    rating: 4.8,
    reviewCount: 24,
    artisan: 'فاطمة بن علي',
    category: 'ملابس تقليدية',
    isOnSale: true
  },
  {
    id: '2',
    name: 'كراكو عصري بتطريز يدوي',
    price: 35000,
    image: storyImage7 ,
    rating: 4.9,
    reviewCount: 18,
    artisan: 'خديجة محمد',
    category: 'أزياء عصرية'
  },
  {
    id: '3',
    name: 'بلوزة بالخيط الذهبي والفضي',
    price: 60000,
    image: 'https://i.pinimg.com/736x/99/05/42/99054263a123fd32e4d12ed4fe780b93.jpg',
    rating: 4.7,
    reviewCount: 31,
    artisan: 'عائشة قادر',
    category: 'بلايز وقمصان'
  },
  {
    id: '4',
    name: 'جلابة مغربية بالطرز اليدوي',
    price: 20000,
    originalPrice: 25000,
    image: 'https://scontent.ftlm1-1.fna.fbcdn.net/v/t39.30808-6/490131052_1103121211831152_3131347094929730762_n.jpg?stp=dst-jpg_s600x600_tt6&_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_ohc=pX_3PTmGrTcQ7kNvwFMLrBt&_nc_oc=AdlpqU1u-yzkxBZE7EcFb43daP2mHQoTQey8kYzkhPIemQIacSMqxSY_6DD_G77y6N0&_nc_zt=23&_nc_ht=scontent.ftlm1-1.fna&_nc_gid=vjGDXapbhkXUzJF6LK34IA&oh=00_AfJJrP5MF7Hp_k-1CjCu2SISLhlcfLa1D28KcqXivfRYdg&oe=6836671A',
    rating: 5.0,
    reviewCount: 12,
    artisan: 'زينب الهاشمي',
    category: 'ملابس تقليدية',
    isOnSale: true
  },
  {
    id: '5',
    name: 'قفطان تقليدي',
    artisan: 'فاطمة بن علي',
    category: 'قفطان',
    price: 32000,
    rating: 4.8,
    reviewCount: 156,
    image: storyImage8 ,
    isNew: true
  },
  {
    id: '6',
    name: 'جلابة مطرزة',
    artisan: 'خديجة محمد',
    category: 'جلابة',
    price: 8500,
    rating: 4.9,
    reviewCount: 89,
    image: storyImage9 ,
  },
  {
    id: '7',
    name: 'قفطان عصري',
    artisan: 'عائشة قادر',
    category: 'قفطان',
    price: 15000,
    rating: 5.0,
    reviewCount: 42,
    image:  storyImage10 ,
    isNew: true
  },
  {
    id: '8',
    name: 'فستان تقليدي',
    artisan: 'زينب الهاشمي',
    category: 'فستان',
    price: 9800,
    rating: 4.7,
    reviewCount: 73,
    image: storyImage11 ,
  }
];

const ITEMS_PER_PAGE = 8;

const AllProducts = () => {
  const navigate = useNavigate();
  // États
  const [searchQuery, setSearchQuery] = useState('');
  const [category, setCategory] = useState('all');
  const [artisan, setArtisan] = useState('all');
  const [priceRange, setPriceRange] = useState('all');
  const [sortBy, setSortBy] = useState('featured');
  const [currentPage, setCurrentPage] = useState(1);
  const [favorites, setFavorites] = useState<string[]>([]);

  // Fonction pour basculer un produit favori
  const toggleFavorite = (productId: string) => {
    setFavorites(prev => {
      if (prev.includes(productId)) {
        return prev.filter(id => id !== productId);
      }
      return [...prev, productId];
    });
  };

  // Liste des catégories uniques
  const categories = useMemo(() => {
    const uniqueCategories = new Set(allProductsData.map(product => product.category));
    return ['all', ...Array.from(uniqueCategories)];
  }, []);

  // Liste des artisans uniques
  const artisans = useMemo(() => {
    const uniqueArtisans = new Set(allProductsData.map(product => product.artisan));
    return ['all', ...Array.from(uniqueArtisans)];
  }, []);

  // Plages de prix
  const priceRanges = [
    { label: 'الكل', value: 'all' },
    { label: 'أقل من 5000 درهم', value: '0-5000' },
    { label: '5000 - 10000 درهم', value: '5000-10000' },
    { label: 'أكثر من 10000 درهم', value: '10000+' }
  ];

  // Filtrage et tri des produits
  const filteredProducts = useMemo(() => {
    return allProductsData
      .filter(product => {
        const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            product.artisan.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            product.category.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesCategory = category === 'all' || product.category === category;
        const matchesArtisan = artisan === 'all' || product.artisan === artisan;
        const matchesPriceRange = priceRange === 'all' || (() => {
          const [min, max] = priceRange.split('-').map(Number);
          if (!max) return product.price >= min;
          return product.price >= min && product.price <= max;
        })();

        return matchesSearch && matchesCategory && matchesArtisan && matchesPriceRange;
      })
      .sort((a, b) => {
        if (sortBy === 'price-high') return b.price - a.price;
        if (sortBy === 'price-low') return a.price - b.price;
        return 0;
      });
  }, [searchQuery, category, artisan, priceRange, sortBy]);

  // Pagination
  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        {/* Page Title */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-terracotta-900 mb-4">الكتالوج</h1>
          <p className="text-lg text-muted-foreground">
            اكتشفي تشكيلتنا الواسعة من الملابس التقليدية المغربية
          </p>
        </div>

        {/* Filters Section */}
        <div className="mb-8">
          <div className="bg-white rounded-lg shadow-sm p-4 space-y-4">
            {/* Search and Sort */}
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Input
                  placeholder="البحث عن منتج..."
                  className="pl-4 pr-10 text-right"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>

              {/* Category Filter */}
              <Select value={category} onValueChange={setCategory}>
                <SelectTrigger className="w-full md:w-48">
                  <SelectValue placeholder="الفئة" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">جميع الفئات</SelectItem>
                  {categories.map(cat => (
                    cat !== 'all' && (
                      <SelectItem key={cat} value={cat}>
                        {cat}
                      </SelectItem>
                    )
                  ))}
                </SelectContent>
              </Select>

              {/* Artisan Filter */}
              <Select value={artisan} onValueChange={setArtisan}>
                <SelectTrigger className="w-full md:w-48">
                  <SelectValue placeholder="الحرفية" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">جميع الحرفيات</SelectItem>
                  {artisans.map(art => (
                    art !== 'all' && (
                      <SelectItem key={art} value={art}>
                        {art}
                      </SelectItem>
                    )
                  ))}
                </SelectContent>
              </Select>

              {/* Price Range Filter */}
              <Select value={priceRange} onValueChange={setPriceRange}>
                <SelectTrigger className="w-full md:w-48">
                  <SelectValue placeholder="السعر" />
                </SelectTrigger>
                <SelectContent>
                  {priceRanges.map(range => (
                    <SelectItem key={range.value} value={range.value}>
                      {range.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {/* Sort By */}
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-full md:w-48">
                  <SelectValue placeholder="الترتيب" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="featured">الأكثر رواجاً</SelectItem>
                  <SelectItem value="price-high">السعر: من الأعلى</SelectItem>
                  <SelectItem value="price-low">السعر: من الأقل</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Reset Filters */}
            <div className="flex justify-end">
              <Button
                variant="outline"
                onClick={() => {
                  setSearchQuery('');
                  setCategory('all');
                  setArtisan('all');
                  setPriceRange('all');
                  setSortBy('featured');
                }}
                className="text-terracotta-600 border-terracotta-200 hover:bg-terracotta-50"
              >
                إعادة تعيين التصفية
                <SlidersHorizontal className="mr-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
          {paginatedProducts.map((product) => (
            <ProductCard
              key={product.id}
              {...product}
              isFavorite={favorites.includes(product.id)}
              onFavoriteClick={() => toggleFavorite(product.id)}
            
            />
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-2">
            <Button
              variant="outline"
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
            <span className="mx-4">
              {currentPage} / {totalPages}
            </span>
            <Button
              variant="outline"
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default AllProducts;
