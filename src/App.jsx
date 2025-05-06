import { useState } from 'react';
import HeroBanner from './components/views/home/HeroBanner';
import FeaturedFramesCarousel from './components/views/home/FeaturedFramesCarousel';
import CustomFramingServiceCard from './components/views/home/CustomFramingServiceCard';
import TestimonialsSection from './components/views/home/TestimonialsSection';
import FrameSelectionHelper from './components/views/home/FrameSelectionHelper';
import ProductCard from './components/views/home/ProductCaed';
import TestimonialBox from './components/views/home/TestimonialBox';
import SectionContainer from './components/layouts/SectionContainer';
import CardLayout from './components/layouts/CardLayout';

function App() {
  const [cart, setCart] = useState([]);

  const products = [
    {
      id: 1,
      name: "Modern Black Gallery Frame",
      price: 29.99,
      imageUrl: "https://images.unsplash.com/photo-1616486338815-18dfb00052c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      sizes: ["8×10", "11×14", "16×20"],
      colors: ["#000000", "#333333"],
      isBestSeller: true
    },
    {
      id: 2,
      name: "Vintage Gold Ornate Frame",
      price: 39.99,
      imageUrl: "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80",
      sizes: ["5×7", "8×10", "11×14"],
      colors: ["#D4AF37", "#FFD700"],
      isNew: true
    },
    {
      id: 3,
      name: "Natural Wood Float Frame",
      price: 34.99,
      imageUrl: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1400&q=80",
      sizes: ["8×10", "11×14", "16×20", "18×24"],
      colors: ["#8B4513", "#A0522D", "#CD853F"]
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Art Collector",
      rating: 5,
      content: "The custom frame I ordered for my grandmother's painting was absolutely perfect. The craftsmanship is exceptional and it arrived well-packaged and on time.",
      avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      date: "2023-05-15"
    },
    {
      name: "Michael Chen",
      role: "Photographer",
      rating: 4.5,
      content: "I've purchased several frames from Frame Genius for my photography business. The quality is consistently excellent and really makes my work stand out.",
      avatarUrl: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      date: "2023-06-22"
    }
  ];

  const handleAddToCart = (productId) => {
    const product = products.find(p => p.id === productId);
    setCart([...cart, product]);
    alert(`${product.name} added to cart!`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <HeroBanner />
      
      <SectionContainer title="Featured Products" subtitle="Our most popular frame styles this season">
        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
          {products.map(product => (
            <ProductCard 
              key={product.id}
              {...product}
              onAddToCart={handleAddToCart}
            />
          ))}
        </div>
      </SectionContainer>

      <CustomFramingServiceCard/>
      
      <SectionContainer title="Customer Testimonials" subtitle="Don't just take our word for it - hear from our satisfied customers">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <TestimonialBox key={index} {...testimonial} />
          ))}
          <CardLayout hoverEffect>
            <div className="text-center p-8">
              <h3 className="text-lg font-medium text-gray-900 mb-2">Share Your Experience</h3>
              <p className="text-gray-600 mb-4">We'd love to hear about your experience with our frames.</p>
              <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700">
                Write a Review
              </button>
            </div>
          </CardLayout>
        </div>
      </SectionContainer>

      <FrameSelectionHelper />
    </div>
  );
}

export default App;