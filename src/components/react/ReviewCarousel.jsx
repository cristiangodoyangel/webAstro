import React, { useState } from 'react';

const reviews = [
  {
    id: 1,
    name: "Juan Pérez",
    role: "Autoconstructor",
    content: "El proceso de ensamblaje con VERTYS fue asombrosamente rápido. Redujimos tiempos de obra y la asesoría técnica nos guió en cada paso.",
    rating: 5
  },
  {
    id: 2,
    name: "María González",
    role: "Arquitecta",
    content: "Desde el punto de vista arquitectónico, la precisión milimétrica de estos paneles estructurales es insuperable. Mis proyectos ahora son más eficientes energéticamente.",
    rating: 5
  },
  {
    id: 3,
    name: "Carlos Soto",
    role: "Cliente Final",
    content: "Los resultados térmicos son evidentes. El ahorro en calefacción es real y el ambiente interior se mantiene estable todo el año. Fue la mejor decisión.",
    rating: 4
  }
];

export default function ReviewCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextReview = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length);
  };

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-gray-100 rounded-full blur-3xl opacity-50"></div>
      <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-yellow-50 rounded-full blur-3xl opacity-50"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-black-primary mb-4">Opiniones de quienes confiaron en VERTYS</h2>
          <div className="w-24 h-1 bg-gold-accent mx-auto rounded-full"></div>
        </div>

        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-gray-50 relative">
          {/* Quote Icon */}
          <div className="absolute -top-6 -left-6 text-gold-accent opacity-20">
            <svg className="w-24 h-24" fill="currentColor" viewBox="0 0 32 32">
              <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.896 3.456-8.352 9.12-8.352 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
            </svg>
          </div>

          <div className="relative z-10 min-h-[200px] flex flex-col justify-center">
            <div className="flex mb-6 text-gold-accent">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className={`w-6 h-6 ${i < reviews[currentIndex].rating ? 'text-gold-accent' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            
            <p className="text-xl md:text-2xl text-slate-technical font-medium italic mb-8">
              "{reviews[currentIndex].content}"
            </p>
            
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-bold text-lg text-text-dark">{reviews[currentIndex].name}</h4>
                <p className="text-black-primary font-medium">{reviews[currentIndex].role}</p>
              </div>
              
              <div className="flex space-x-3">
                <button onClick={prevReview} className="w-12 h-12 rounded-full border-2 border-gray-200 flex items-center justify-center text-gray-500 hover:text-black-primary hover:border-black-primary transition-colors focus:outline-none">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                </button>
                <button onClick={nextReview} className="w-12 h-12 rounded-full bg-black-primary flex items-center justify-center text-white hover:bg-gray-900 shadow-md transition-colors focus:outline-none">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
