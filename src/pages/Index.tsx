import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="py-6 px-4 border-b border-border">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <Icon name="Cross" size={32} className="text-memorial-gold" />
            <h1 className="text-2xl font-cormorant font-bold text-memorial-charcoal">
              Вечная Память
            </h1>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#catalog" className="text-sm font-open-sans hover:text-memorial-gold transition-colors">
              Каталог
            </a>
            <a href="#services" className="text-sm font-open-sans hover:text-memorial-gold transition-colors">
              Услуги
            </a>
            <a href="#materials" className="text-sm font-open-sans hover:text-memorial-gold transition-colors">
              Материалы
            </a>
            <a href="#gallery" className="text-sm font-open-sans hover:text-memorial-gold transition-colors">
              Галерея
            </a>
            <a href="#contacts" className="text-sm font-open-sans hover:text-memorial-gold transition-colors">
              Контакты
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-background to-memorial-light-granite">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-cormorant font-bold text-memorial-charcoal mb-6">
            Достойная память<br />
            <span className="text-memorial-gold">о близких</span>
          </h2>
          <p className="text-xl font-open-sans text-memorial-granite mb-8 max-w-2xl mx-auto">
            Изготавливаем памятники из натурального камня с соблюдением традиций и высочайшим качеством исполнения
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-memorial-charcoal hover:bg-memorial-granite text-white font-open-sans">
              <Icon name="Phone" size={20} className="mr-2" />
              Получить консультацию
            </Button>
            <Button variant="outline" size="lg" className="border-memorial-gold text-memorial-gold hover:bg-memorial-gold hover:text-white font-open-sans">
              <Icon name="Eye" size={20} className="mr-2" />
              Посмотреть каталог
            </Button>
          </div>
        </div>
      </section>

      {/* Catalog Section */}
      <section id="catalog" className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-cormorant font-bold text-memorial-charcoal mb-4">
              Каталог памятников
            </h3>
            <p className="text-lg font-open-sans text-memorial-granite">
              Широкий выбор памятников для увековечения памяти
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Monument 1 */}
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-square bg-memorial-light-granite flex items-center justify-center">
                <img 
                  src="/img/1bc34034-7fa3-41b7-ac11-686d2e942521.jpg" 
                  alt="Гранитный памятник с крестом"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="font-cormorant text-memorial-charcoal">
                  Классический гранитный памятник
                </CardTitle>
                <CardDescription className="font-open-sans">
                  Памятник из черного гранита с гравировкой креста
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <Badge variant="outline" className="text-memorial-gold border-memorial-gold">
                    Черный гранит
                  </Badge>
                  <Button variant="outline" size="sm" className="font-open-sans">
                    Подробнее
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Monument 2 */}
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-square bg-memorial-light-granite flex items-center justify-center">
                <img 
                  src="/img/524f2cb0-be00-4b5b-addf-59f65efe69fc.jpg" 
                  alt="Мраморный памятник"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="font-cormorant text-memorial-charcoal">
                  Мраморный памятник
                </CardTitle>
                <CardDescription className="font-open-sans">
                  Элегантный памятник из белого мрамора
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <Badge variant="outline" className="text-memorial-gold border-memorial-gold">
                    Белый мрамор
                  </Badge>
                  <Button variant="outline" size="sm" className="font-open-sans">
                    Подробнее
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Monument 3 */}
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-square bg-memorial-light-granite flex items-center justify-center">
                <img 
                  src="/img/c45f2b04-5ba1-4d95-8d84-071b68d2c8dc.jpg" 
                  alt="Памятник с цветочной гравировкой"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="font-cormorant text-memorial-charcoal">
                  Памятник с цветочной гравировкой
                </CardTitle>
                <CardDescription className="font-open-sans">
                  Художественная гравировка на натуральном камне
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <Badge variant="outline" className="text-memorial-gold border-memorial-gold">
                    Серый гранит
                  </Badge>
                  <Button variant="outline" size="sm" className="font-open-sans">
                    Подробнее
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 px-4 bg-memorial-light-granite">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-cormorant font-bold text-memorial-charcoal mb-4">
              Услуги по изготовлению
            </h3>
            <p className="text-lg font-open-sans text-memorial-granite">
              Полный цикл работ от проекта до установки
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-memorial-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Wrench" size={24} className="text-white" />
                </div>
                <CardTitle className="font-cormorant text-memorial-charcoal">
                  Проектирование
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-open-sans text-memorial-granite text-sm">
                  Индивидуальный дизайн с учетом ваших пожеланий
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-memorial-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Hammer" size={24} className="text-white" />
                </div>
                <CardTitle className="font-cormorant text-memorial-charcoal">
                  Изготовление
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-open-sans text-memorial-granite text-sm">
                  Работа с натуральным камнем высочайшего качества
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-memorial-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Sparkles" size={24} className="text-white" />
                </div>
                <CardTitle className="font-cormorant text-memorial-charcoal">
                  Гравировка
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-open-sans text-memorial-granite text-sm">
                  Художественная гравировка и портреты
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-memorial-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="MapPin" size={24} className="text-white" />
                </div>
                <CardTitle className="font-cormorant text-memorial-charcoal">
                  Установка
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-open-sans text-memorial-granite text-sm">
                  Профессиональная установка на месте
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Materials Section */}
      <section id="materials" className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-cormorant font-bold text-memorial-charcoal mb-4">
              Виды материалов
            </h3>
            <p className="text-lg font-open-sans text-memorial-granite">
              Используем только качественные натуральные материалы
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="font-cormorant text-memorial-charcoal flex items-center">
                  <Icon name="Mountain" size={24} className="mr-2 text-memorial-gold" />
                  Гранит
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-open-sans text-memorial-granite mb-4">
                  Прочный и долговечный материал, устойчивый к погодным условиям
                </p>
                <ul className="text-sm font-open-sans text-memorial-granite space-y-2">
                  <li>• Черный гранит</li>
                  <li>• Серый гранит</li>
                  <li>• Красный гранит</li>
                  <li>• Зеленый гранит</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="font-cormorant text-memorial-charcoal flex items-center">
                  <Icon name="Gem" size={24} className="mr-2 text-memorial-gold" />
                  Мрамор
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-open-sans text-memorial-granite mb-4">
                  Благородный материал с изысканной текстурой
                </p>
                <ul className="text-sm font-open-sans text-memorial-granite space-y-2">
                  <li>• Белый мрамор</li>
                  <li>• Серый мрамор</li>
                  <li>• Черный мрамор</li>
                  <li>• Цветной мрамор</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="font-cormorant text-memorial-charcoal flex items-center">
                  <Icon name="Sparkles" size={24} className="mr-2 text-memorial-gold" />
                  Комбинированные
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-open-sans text-memorial-granite mb-4">
                  Сочетание различных материалов для уникального дизайна
                </p>
                <ul className="text-sm font-open-sans text-memorial-granite space-y-2">
                  <li>• Гранит + мрамор</li>
                  <li>• Бронзовые элементы</li>
                  <li>• Золочение</li>
                  <li>• Цветные вставки</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-16 px-4 bg-memorial-light-granite">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-cormorant font-bold text-memorial-charcoal mb-4">
              Галерея работ
            </h3>
            <p className="text-lg font-open-sans text-memorial-granite">
              Примеры наших работ и реализованных проектов
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-square bg-memorial-granite flex items-center justify-center">
                  <Icon name="Image" size={48} className="text-memorial-light-granite" />
                </div>
                <CardHeader>
                  <CardTitle className="font-cormorant text-memorial-charcoal text-lg">
                    Проект #{index}
                  </CardTitle>
                  <CardDescription className="font-open-sans">
                    Описание выполненной работы
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contacts" className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-cormorant font-bold text-memorial-charcoal mb-4">
              Контакты
            </h3>
            <p className="text-lg font-open-sans text-memorial-granite">
              Свяжитесь с нами для консультации
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h4 className="text-2xl font-cormorant font-bold text-memorial-charcoal mb-6">
                Контактная информация
              </h4>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Icon name="Phone" size={20} className="mr-3 text-memorial-gold" />
                  <span className="font-open-sans text-memorial-granite">+7 (999) 123-45-67</span>
                </div>
                <div className="flex items-center">
                  <Icon name="Mail" size={20} className="mr-3 text-memorial-gold" />
                  <span className="font-open-sans text-memorial-granite">info@memorial.ru</span>
                </div>
                <div className="flex items-center">
                  <Icon name="MapPin" size={20} className="mr-3 text-memorial-gold" />
                  <span className="font-open-sans text-memorial-granite">г. Москва, ул. Примерная, 123</span>
                </div>
                <div className="flex items-center">
                  <Icon name="Clock" size={20} className="mr-3 text-memorial-gold" />
                  <span className="font-open-sans text-memorial-granite">Пн-Пт: 9:00-18:00, Сб: 10:00-16:00</span>
                </div>
              </div>
            </div>
            
            <Card className="p-6">
              <CardHeader>
                <CardTitle className="font-cormorant text-memorial-charcoal">
                  Заказать обратный звонок
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-open-sans text-memorial-granite mb-2">
                      Имя
                    </label>
                    <input 
                      type="text" 
                      className="w-full px-3 py-2 border border-memorial-granite rounded-md focus:outline-none focus:ring-2 focus:ring-memorial-gold"
                      placeholder="Ваше имя"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-open-sans text-memorial-granite mb-2">
                      Телефон
                    </label>
                    <input 
                      type="tel" 
                      className="w-full px-3 py-2 border border-memorial-granite rounded-md focus:outline-none focus:ring-2 focus:ring-memorial-gold"
                      placeholder="+7 (999) 123-45-67"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-open-sans text-memorial-granite mb-2">
                      Сообщение
                    </label>
                    <textarea 
                      className="w-full px-3 py-2 border border-memorial-granite rounded-md focus:outline-none focus:ring-2 focus:ring-memorial-gold"
                      rows={4}
                      placeholder="Ваше сообщение"
                    />
                  </div>
                  <Button className="w-full bg-memorial-charcoal hover:bg-memorial-granite text-white font-open-sans">
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-memorial-charcoal text-white">
        <div className="max-w-7xl mx-auto">
          <Separator className="mb-6 bg-memorial-granite" />
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <Icon name="Cross" size={24} className="text-memorial-gold" />
              <span className="font-cormorant font-bold text-xl">Вечная Память</span>
            </div>
            <p className="font-open-sans text-memorial-granite text-sm">
              © 2024 Вечная Память. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;