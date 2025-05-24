
import ProductCard from './ProductCard';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import storyImage7 from './photos/photo7.jpeg';

const FeaturedProducts = () => {
  const navigate = useNavigate();
  const products = [
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
    }
  ];

  return (
    <section id="products" className="py-16 bg-cream-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-terracotta-900 mb-4 font-arabic">
            أحدث الإبداعات
          </h2>
          <p className="text-lg text-terracotta-700 max-w-2xl mx-auto">
            اكتشفي مجموعة مختارة من أجمل القطع المصممة خصيصاً بأيدي حرفياتنا المبدعات
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Button 
            size="lg"
            variant="outline"
            className="border-terracotta-700 text-terracotta-700 hover:bg-terracotta-50 px-8"
            onClick={() => navigate('/products')}
          >
            عرض جميع المنتجات
            <ArrowLeft className="mr-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
