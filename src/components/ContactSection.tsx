import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { MessageSquare, ArrowRight } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import emailjs from 'emailjs-com';
import {Phone,Mail} from 'lucide-react';

const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: 'خطأ',
        description: 'يرجى ملء جميع الحقول.',
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      await emailjs.send(
        'service_bj7hkhy',
        'template_43tegvx',
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_email: 'meriemhaddou22@gmail.com',
        },
        'zeXxG000fWEnnysys'
      );

      toast({
        title: 'تم الإرسال',
        description: 'تم إرسال رسالتك بنجاح.',
      });

      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error('حدث خطأ أثناء إرسال الرسالة:', error);
      toast({
        title: 'خطأ',
        description: 'فشل في إرسال الرسالة.',
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 bg-cream-50">
      <div className="container text-right">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">اتصلي بنا</h2>
          <p className="text-gray-600">نحن هنا للإجابة على استفساراتك ومساعدتك.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-3">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-right block">الاسم الكامل</Label>
                      <Input 
                        id="name" 
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="أدخل اسمك الكامل" 
                        className="border-gray-300 text-right" 
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-right block">البريد الإلكتروني</Label>
                      <Input 
                        id="email" 
                        type="email" 
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="example@email.com" 
                        className="border-gray-300 text-right" 
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-right block">الموضوع</Label>
                    <Input 
                      id="subject" 
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="موضوع الرسالة" 
                      className="border-gray-300 text-right" 
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-right block">الرسالة</Label>
                    <Textarea 
                      id="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="اكتب رسالتك هنا..." 
                      className="border-gray-300 min-h-[150px] text-right" 
                    />
                  </div>

                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-[#990F0F] hover:bg-[#7a0c0c] text-white"
                  >
                    {isSubmitting ? 'جاري الإرسال...' : 'أرسل الرسالة'}
                    {!isSubmitting && <ArrowRight className="mr-2 h-5 w-5" />}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-2">
            <Card className="border-0 shadow-lg bg-[#990F0F] text-white h-full">
              <CardContent className="p-6 flex flex-col h-full">
                <div className="mb-8">
                  <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-white/20 mb-4">
                    <MessageSquare className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">هل لديكي مشروع؟ لنتحدث!</h3>
                  <p className="text-white/80">فريقنا جاهز لمساعدتك في أي وقت.</p>
                </div>

                <div className="grid grid-cols-1 gap-6 flex-grow">
                <div>
                    <h4 className="text-sm font-semibold uppercase text-white/60 mb-2">الهاتف</h4>
                    <a href="tel:+213XXXXXXXX" className="flex items-center gap-2 text-white/80 hover:text-white transition-colors">
                    <Phone className="h-4 w-4" />
                      +213 XX XX XX XX
                      </a>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold uppercase text-white/60 mb-2">العنوان</h4>
                    <p className="text-white">جامعة تلمسان - كلية العلوم الاقتصادية</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold uppercase text-white/60 mb-2">البريد الإلكتروني</h4>
                    <a href="mailto:meriemhaddou22@gmail.com" className="flex items-center gap-2 text-white/80 hover:text-white transition-colors">
                      <Mail className="h-4 w-4" />
                      meriemhaddou22@gmail.com
                      </a>
                  </div>
                 
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
