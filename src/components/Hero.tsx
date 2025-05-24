
import { Button } from '@/components/ui/button';
import { ArrowLeft, Star, Users, Award } from 'lucide-react';

const Hero = () => {
  return (
    <section className="bg-gradient-to-b from-primary/5 to-secondary/5 py-4 md:py-6">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center animate-fade-in space-y-0">
          {/* Main Logo */}
          <div className="flex justify-center -mb-2">
            <div className="relative transform hover:scale-105 transition-all duration-300">
              <img 
                src="/lovable-uploads/1f2e651b-d5c2-4856-8fd7-994eb6294273.png" 
                alt="لمسة حرة - Lamssa Libre" 
                className="relative w-64 md:w-96 lg:w-[500px] h-auto mx-auto"
              />
            </div>
          </div>

          {/* Description */}
          <div className="max-w-3xl mx-auto space-y-1">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              منصة رقمية متخصصة في الطلب والتصميم المخصص للملابس التقليدية، 
              تربط بين الحرفيات المبدعات والزبائن الباحثين عن الأصالة والجودة
            </p>
            <p className="text-base md:text-lg text-accent-foreground/80">
              Une plateforme digitale spécialisée dans la commande et le design personnalisé de vêtements traditionnels,
              connectant artisanes créatives et clients en quête d'authenticité et de qualité
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-4">
              <a href="#products" className="inline-block">
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg rounded-full transition-all duration-300 transform hover:scale-105"
                >
                  استكشفي المنتجات
                  <ArrowLeft className="mr-2 h-5 w-5" />
                </Button>
              </a>
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-primary/20 text-primary hover:bg-primary/5 px-8 py-6 text-lg rounded-full transition-all duration-300 transform hover:scale-105"
              >
                انضمي كحرفية
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-12 mt-8 border-t border-primary/10">
              <div className="text-center transform hover:scale-105 transition-transform duration-300">
                <div className="flex items-center justify-center mb-3">
                  <Users className="h-8 w-8 text-primary/70" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-primary">500+</div>
                <div className="text-sm md:text-base text-muted-foreground mt-1">حرفية</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-3">
                  <Star className="h-8 w-8 text-primary/70" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-primary">4.8</div>
                <div className="text-sm md:text-base text-muted-foreground mt-1">تقييم</div>
              </div>
              <div className="text-center transform hover:scale-105 transition-transform duration-300">
                <div className="flex items-center justify-center mb-3">
                  <Award className="h-8 w-8 text-primary/70" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-primary">1000+</div>
                <div className="text-sm md:text-base text-muted-foreground mt-1">طلبية</div>
              </div>
            </div>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="bg-background/40 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-primary/10 transform hover:scale-105 transition-all duration-300">
              <div className="text-center space-y-4">
                <div className="inline-flex p-3 bg-primary/5 rounded-full">
                  <img 
                    src="/icons/design.svg" 
                    alt="Design personnalisé" 
                    className="w-8 h-8"
                  />
                </div>
                <h3 className="text-xl font-bold text-primary">
                  تصميم حسب الطلب
                </h3>
                <p className="text-muted-foreground text-sm">
                  Design personnalisé selon vos préférences
                </p>
              </div>
            </div>

            <div className="bg-background/40 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-primary/10 transform hover:scale-105 transition-all duration-300">
              <div className="text-center space-y-4">
                <div className="inline-flex p-3 bg-primary/5 rounded-full">
                  <img 
                    src="/icons/quality.svg" 
                    alt="Qualité garantie" 
                    className="w-8 h-8"
                  />
                </div>
                <h3 className="text-xl font-bold text-primary">
                  جودة عالية مضمونة
                </h3>
                <p className="text-muted-foreground text-sm">
                  Qualité supérieure garantie
                </p>
              </div>
            </div>

            <div className="bg-background/40 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-primary/10 transform hover:scale-105 transition-all duration-300">
              <div className="text-center space-y-4">
                <div className="inline-flex p-3 bg-primary/5 rounded-full">
                  <img 
                    src="/icons/delivery.svg" 
                    alt="Livraison rapide" 
                    className="w-8 h-8"
                  />
                </div>
                <h3 className="text-xl font-bold text-primary">
                  توصيل سريع
                </h3>
                <p className="text-muted-foreground text-sm">
                  Livraison rapide et sécurisée
                </p>
              </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
