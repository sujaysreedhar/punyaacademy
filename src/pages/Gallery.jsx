import React, { useState } from 'react';
import { galleryImages } from '../mock';

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  const categories = ['All', 'Campus', 'Classrooms', 'Activities', 'Events'];

  const filteredImages = selectedCategory === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-[#4B1F73] mb-6">Gallery</h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Explore glimpses of our classrooms, activities, celebrations, and learning environment at Punya Academy
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white sticky top-20 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-semibold transition-all ${
                  selectedCategory === category
                    ? 'bg-[#D81B60] text-white shadow-lg'
                    : 'bg-white text-[#4B1F73] border-2 border-[#4B1F73] hover:bg-purple-50'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-[#F4F4F6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image) => (
              <div
                key={image.id}
                className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all"
              >
                <img
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                  <div className="p-6 text-white">
                    <div className="inline-block bg-[#D81B60] px-3 py-1 rounded-full text-sm font-semibold mb-2">
                      {image.category}
                    </div>
                    <p className="text-sm">{image.alt}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 bg-gradient-to-r from-[#4B1F73] to-[#D81B60] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-4xl font-bold">Admissions Open for 2026–27</h2>
          <p className="text-xl">Experience our vibrant learning environment in person. Schedule a campus visit today!</p>
          <a href="/contact">
            <button className="bg-white text-[#D81B60] hover:bg-gray-100 font-bold text-lg px-10 py-6 rounded-lg transition-colors">
              Book Campus Visit
            </button>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
