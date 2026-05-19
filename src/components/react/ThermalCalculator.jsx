import React, { useState } from 'react';

export default function ThermalCalculator() {
  const [region, setRegion] = useState('');
  const [thickness, setThickness] = useState('90');

  return (
    <section className="py-20 bg-black-dark text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1541888081622-6b94098eb330?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Calculadora de Transmitancia Térmica SIP</h2>
            <ul className="space-y-4 mb-8 text-gray-300">
              <li className="flex items-start">
                <svg className="w-6 h-6 text-gold-accent mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                <span>Identifica la zona climática de tu comuna y descubre el grosor reglamentario.</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-gold-accent mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                <span>Conoce el coeficiente de resistencia (RT) según la medida del panel elegido.</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-gold-accent mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                <span>Determina los requerimientos para cerramientos, cubiertas y radieres.</span>
              </li>
            </ul>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-black-primary hover:bg-gray-800 text-white font-bold py-3 px-6 rounded-full transition-colors text-center">
                Buscar por ubicación
              </button>
              <button className="bg-transparent border-2 border-gold-accent text-gold-accent hover:bg-gold-accent hover:text-white font-bold py-3 px-6 rounded-full transition-colors text-center">
                Buscar por medida
              </button>
            </div>
          </div>

          <div className="bg-white text-text-dark rounded-3xl p-8 shadow-2xl relative">
            <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-gold-accent rounded-full opacity-20 blur-2xl"></div>
            
            <h3 className="text-2xl font-bold text-black-primary mb-6">Cálculo Express</h3>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Indica tu Región</label>
                <select 
                  className="w-full border-gray-300 rounded-lg shadow-sm py-3 px-4 focus:ring-black-primary focus:border-black-primary bg-gray-50 border"
                  value={region}
                  onChange={(e) => setRegion(e.target.value)}
                >
                  <option value="">Seleccionar región...</option>
                  <option value="metropolitana">Región Metropolitana (Zona 3)</option>
                  <option value="valparaiso">Valparaíso (Zona 2)</option>
                  <option value="biobio">Biobío (Zona 4)</option>
                  <option value="araucania">La Araucanía (Zona 5)</option>
                  <option value="lagos">Los Lagos (Zona 6)</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Grosor Estructural (mm)</label>
                <div className="grid grid-cols-3 gap-3">
                  {['70', '90', '114'].map((t) => (
                    <button
                      key={t}
                      onClick={() => setThickness(t)}
                      className={`py-2 px-4 rounded-lg font-medium border-2 transition-all ${thickness === t ? 'border-black-primary bg-gray-100 text-black-primary' : 'border-gray-200 text-gray-500 hover:border-gray-300'}`}
                    >
                      {t} mm
                    </button>
                  ))}
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-6 mt-8 border border-gray-100 flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500 font-medium mb-1">Valor Térmico Calculado</p>
                  <div className="flex items-end">
                    <span className="text-4xl font-black text-gold-accent">
                      {thickness === '70' ? '1.8' : thickness === '90' ? '2.4' : '3.1'}
                    </span>
                    <span className="text-gray-500 ml-2 mb-1">m²K/W</span>
                  </div>
                </div>
                
                <div className="w-16 h-16 rounded-full border-4 border-black-primary flex items-center justify-center text-black-primary font-bold">
                  OK
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
