import React, { useRef } from 'react';
// Importer toutes les images
import storyImage1 from './photos/photo1.jpeg';
import storyImage2 from './photos/photo2.jpeg';
import storyImage3 from './photos/photo3.jpeg';
import storyImage4 from './photos/photo4.jpeg';
import storyImage5 from './photos/photo5.jpeg';
import storyImage6 from './photos/photo6.jpeg';



// ... et ainsi de suite


interface Story {
  id: string;
  title: string;
  artisan: string;
  content: string;
  image: string;
  readTime: string;
  isNew?: boolean;
  isVideo?: boolean;
}
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, ArrowLeft } from 'lucide-react';
import StoryCard from './StoryCard';

const StoryCarousel = () => {
  const [allStories, setAllStories] = React.useState<Story[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo =
        direction === 'left'
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({
        left: scrollTo,
        behavior: 'smooth',
      });
    }
  };

  // Histoires par défaut
  const defaultStories = [
    {
      id: '1',
      title: 'رحلتي مع الخياطة التقليدية',
      artisan: 'فاطمة بن علي',
      content: 'بدأت رحلتي مع الخياطة منذ كنت صغيرة، حيث تعلمت هذه الحرفة من جدتي. كانت جدتي تقضي ساعات طويلة تعلمني أسرار الخياطة والتطريز...',
      image: storyImage1 ,
      readTime: '5 دقائق',
      isNew: true
    },
    {
      id: '2',
      title: 'التطريز الجزائري التقليدي',
      artisan: 'زينب العمري',
      content: 'أحب العمل بالخيوط الذهبية والفضية، وأستوحي تصاميمي من التراث الجزائري الأصيل. كل قطعة أصنعها تحمل جزءاً من تاريخنا...',
      image: storyImage2 ,
      readTime: '7 دقائق'
    },
    {
      id: '3',
      title: 'من هواية إلى مهنة',
      artisan: 'خديجة مرزوق',
      content: 'بدأت الخياطة كهواية في وقت فراغي، واليوم أصبحت مصدر رزقي الرئيسي. أحب أن أرى ابتسامة الزبائن عندما يرون النتيجة النهائية...',
      image: storyImage3 ,
      readTime: '4 دقائق',
    
    },
    {
      id: '4',
      title: 'حكاية قفطان',
      artisan: 'سعاد بلقاسم',
      content: 'كل قفطان أصنعه له قصة خاصة، وأحرص على أن يكون كل تصميم فريداً من نوعه. أستلهم تصاميمي من التراث الجزائري العريق...',
      image: storyImage4 ,
      readTime: '6 دقائق'
    },
    {
      id: '5',
      title: 'تراثنا في الخياطة',
      artisan: 'نورة السعيد',
      content: 'أحاول الحفاظ على التقنيات التقليدية في الخياطة ونقلها للجيل الجديد. أؤمن أن تراثنا هو هويتنا...',
      image: storyImage5 ,
      readTime: '5 دقائق',
      isNew: true
    },
    {
      id: '6',
      title: 'الخياطة والتمكين',
      artisan: 'أمل العبدلي',
      content: 'الخياطة ليست مجرد حرفة، بل هي وسيلة لتمكين المرأة اقتصادياً. أعلم النساء الخياطة ليصبحن مستقلات...',
      image: storyImage6 ,
      readTime: '8 دقائق'
    },
   
  ];

  // Fonction pour supprimer une histoire
  const removeStory = (title: string) => {
    const savedStories = JSON.parse(localStorage.getItem('stories') || '[]');
    const updatedStories = savedStories.filter((story: Story) => story.title !== title);
    localStorage.setItem('stories', JSON.stringify(updatedStories));
    setAllStories([...updatedStories, ...defaultStories]);
  };

  React.useEffect(() => {
    // Charger les histoires du localStorage
    const savedStories = JSON.parse(localStorage.getItem('stories') || '[]');
    // Supprimer l'histoire avec le titre 'uhfir' si elle existe
    const updatedStories = savedStories.filter((story: Story) => story.title !== 'uhfir');
    localStorage.setItem('stories', JSON.stringify(updatedStories));
    // Combiner avec les histoires par défaut
    setAllStories([...updatedStories, ...defaultStories]);
  }, []);

  return (
    <section id="stories" className="py-16 bg-cream-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-terracotta-900 mb-4">
            قصتي مع الخياطة
          </h2>
          <p className="text-terracotta-700 max-w-2xl mx-auto mb-8">
            اكتشفي قصص ملهمة من حرفياتنا وتعرفي على رحلاتهن في عالم الخياطة
          </p>
        </div>

        <div className="relative">
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white shadow-md hidden md:flex"
            onClick={() => scroll('left')}
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white shadow-md hidden md:flex"
            onClick={() => scroll('right')}
          >
            <ChevronRight className="h-6 w-6" />
          </Button>

          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto hide-scrollbar snap-x snap-mandatory pb-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {allStories.map((story) => (
              <StoryCard
                key={story.id}
                title={story.title}
                artisan={story.artisan}
                content={story.content}
                image={story.image}
                readTime={story.readTime}
                isVideo={story.isVideo}
                isNew={story.isNew}
              />
            ))}
          </div>
        </div>

        <div className="mt-16 text-center bg-cream-100 rounded-2xl p-8 max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-terracotta-900 mb-4">
            هل لديك قصة ملهمة؟
          </h3>
          <p className="text-terracotta-700 mb-6">
            شاركي قصتك مع مجتمعنا وألهمي حرفيات أخريات للبدء في رحلتهن
          </p>
          <Button
            variant="default"
            className="bg-terracotta-600 hover:bg-terracotta-700 text-white"
            onClick={() => window.location.href = '/add-story'}
          >
            شاركي قصتك
          </Button>
        </div>
      </div>
    </section>
  );
};

export default StoryCarousel;
