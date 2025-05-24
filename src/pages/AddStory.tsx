import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import Layout from '@/components/Layout';

interface StoryFormData {
  title: string;
  artisan: string;
  content: string;
  image: string;
}

const AddStory = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<StoryFormData>({
    title: '',
    artisan: '',
    content: '',
    image: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Créer un nouvel ID unique
    const newStory = {
      id: Date.now().toString(),
      ...formData,
      readTime: '5 دقائق', // Valeur par défaut
      isNew: true
    };

    // Récupérer les histoires existantes du localStorage
    const existingStories = JSON.parse(localStorage.getItem('stories') || '[]');
    
    // Ajouter la nouvelle histoire
    const updatedStories = [newStory, ...existingStories];
    
    // Sauvegarder dans le localStorage
    localStorage.setItem('stories', JSON.stringify(updatedStories));

    // Rediriger vers la page d'accueil
    navigate('/');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl font-bold text-terracotta-900 text-center mb-8">
            شاركي قصتك
          </h1>
          
          <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-lg shadow-md">
            <div>
              <Label htmlFor="title">عنوان القصة</Label>
              <Input
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                required
                className="w-full mt-2"
                placeholder=" أدخلي عنوان قصتك"
              />
            </div>

            <div>
              <Label htmlFor="artisan">اسم الحرفية</Label>
              <Input
                id="artisan"
                name="artisan"
                value={formData.artisan}
                onChange={handleChange}
                required
                className="w-full mt-2"
                placeholder="أدخلي اسمك"
              />
            </div>

            <div>
              <Label htmlFor="content">محتوى القصة</Label>
              <Textarea
                id="content"
                name="content"
                value={formData.content}
                onChange={handleChange}
                required
                className="w-full mt-2 h-40"
                placeholder="اكتبي قصتك هنا..."
              />
            </div>

            <div>
              <Label htmlFor="image">رابط الصورة</Label>
              <Input
                id="image"
                name="image"
                type="url"
                value={formData.image}
                onChange={handleChange}
                required
                className="w-full mt-2"
                placeholder="أدخلي رابط الصورة"
              />
            </div>

            <div className="flex justify-center gap-4 pt-4">
              <Button
                type="submit"
                className="bg-terracotta-600 hover:bg-terracotta-700 text-white"
              >
                نشر القصة
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={() => navigate('/')}
              >
                إلغاء
              </Button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default AddStory;
