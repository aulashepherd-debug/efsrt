import React, { useState } from 'react';
import Button from '../components/atoms/Button';
import FormInscripcion from '../components/organisms/FormInscripcion';
import LoginModal from '../components/organisms/LoginModal';

export default function LandingPage({ onViewReglamento, onLoginSuccess }) {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [showInscripcion, setShowInscripcion] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col selection:bg-[#C91414] selection:text-white">
      
      {/* NAVBAR MINIMALISTA */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            {/* Nombre corregido a logocajas.svg según tu árbol de archivos público */}
            <img src="/logocajas.svg" alt="Engranaje IESTP" className="h-9 w-9 object-contain" />
            <div>
              <h1 className="text-xs sm:text-sm font-black text-indigo-950 tracking-tight leading-none uppercase">IESTP A. Avelino Cáceres Dorregaray</h1>
              <p className="text-[10px] text-[#C91414] font-black mt-0.5 tracking-wider uppercase">Diseño y Programación Web</p>
            </div>
          </div>
          <div className="flex items-center space-x-6">
            <div className="hidden md:flex items-center space-x-6 text-xs font-bold text-slate-500 uppercase tracking-wider">
              <a href="#inicio" className="hover:text-indigo-950 transition">Inicio</a>
              <a href="#modulos" className="hover:text-indigo-950 transition">Módulos</a>
              <a href="#proceso" className="hover:text-indigo-950 transition">Proceso</a>
            </div>
            <Button variant="dark" onClick={() => setIsLoginOpen(true)}>Ingresar al Sistema</Button>
          </div>
        </div>
      </nav>

      {/* HERO SECTION PREMIUM */}
      <header id="inicio" className="bg-gradient-to-b from-white to-slate-50 border-b border-slate-100 py-24 px-6 relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl sm:text-6xl font-black text-indigo-950 tracking-tighter leading-none mb-6">
            Gestión de Experiencias Formativas
          </h2>
          <p className="text-sm sm:text-base text-slate-500 max-w-2xl mx-auto leading-relaxed font-medium mb-10">
            Nuestra plataforma digital integral simplifica la administración, seguimiento y evaluación de tus prácticas profesionales, conectando estudiantes, empresas e institutos en un ecosistema eficiente.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Button variant="primary" onClick={() => setShowInscripcion(true)}>Iniciar Trámite</Button>
            <Button variant="secondary" onClick={onViewReglamento}>Ver Reglamento</Button>
          </div>
        </div>
        {/* Detalle sutil de fondo engranaje */}
        <div className="absolute right-0 bottom-0 opacity-[0.02] transform translate-x-1/4 translate-y-1/4 select-none pointer-events-none">
          <img src="/logo-cajas.svg" alt="Engranaje decorativo" className="w-[500px] h-[500px]" />
        </div>
      </header>

      {/* RENDERIZADO DINÁMICO DEL FORMULARIO */}
      {showInscripcion && (
        <section className="px-6 relative z-20">
          <FormInscripcion onClose={() => setShowInscripcion(false)} />
        </section>
      )}

      {/* 4. DIAGRAMA DE PROCESO DE TRAMITACIÓN (BASADO EN EL FLUJO OFICIAL BPMN) */}
      <section id="proceso" className="max-w-7xl mx-auto px-6 py-20 w-full animate-fade-in">
        <div className="text-center mb-14">
          <h3 className="text-2xl sm:text-3xl font-black text-indigo-950 tracking-tight">Estructura del Proceso Operativo EFSRT</h3>
          <p className="text-xs text-[#C91414] uppercase tracking-widest font-black mt-1">Interacción de actores según el flujo institucional de tramitación</p>
        </div>

        {/* CONTENEDOR EN MÓVILES (VISTA LINEAL INTEGRAL) */}
        <div className="block lg:hidden space-y-6">
          <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-md">
            <span className="text-[10px] font-bold px-2 py-0.5 bg-indigo-50 text-indigo-950 rounded uppercase">Fase 1: Estudiante</span>
            <h4 className="font-bold text-sm text-indigo-950 mt-1">Inicio, Pago y Carga de Fólder</h4>
            <p className="text-xs text-slate-400 mt-1">Realiza el pago, adjunta su comprobante y organiza el fólder inicial con su Ficha de Identidad.</p>
          </div>
          <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-md">
            <span className="text-[10px] font-bold px-2 py-0.5 bg-red-50 text-[#C91414] rounded uppercase">Fase 2: Docente Supervisor</span>
            <h4 className="font-bold text-sm text-indigo-950 mt-1">Validación y Firma de Documentos</h4>
            <p className="text-xs text-slate-400 mt-1">Verifica los formatos. Si cumple, se procede al registro y se gestiona la Carta de Presentación visada por Dirección.</p>
          </div>
          <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-md">
            <span className="text-[10px] font-bold px-2 py-0.5 bg-green-50 text-emerald-700 rounded uppercase">Fase 3: Empresa Externa</span>
            <h4 className="font-bold text-sm text-indigo-950 mt-1">Ejecución y Evaluación Práctica</h4>
            <p className="text-xs text-slate-400 mt-1">El alumno ejecuta sus 128 horas. Al concluir, el Supervisor de la Empresa califica los 25 criterios y emite el Certificado.</p>
          </div>
          <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-md">
            <span className="text-[10px] font-bold px-2 py-0.5 bg-amber-50 text-amber-700 rounded uppercase">Fase 4: Coordinación y Cierre</span>
            <h4 className="font-bold text-sm text-indigo-950 mt-1">Emisión de Constancia y Registro en Actas</h4>
            <p className="text-xs text-slate-400 mt-1">El Coordinador genera la Constancia Modular, Unidad Académica realiza la visación y Secretaría ingresa la nota vigesimal final.</p>
          </div>
        </div>

        {/* CONTENEDOR EN ESCRITORIO (RECREACIÓN DE CARRILES FLUIDOS UI/UX) */}
        <div className="hidden lg:flex flex-col space-y-4 bg-white p-8 rounded-3xl border border-slate-100/80 shadow-2xl shadow-indigo-950/5">
          
          {/* Carril 1: Estudiante */}
          <div className="grid grid-cols-12 items-center gap-4 border-b border-slate-100 pb-4">
            <div className="col-span-2 border-r border-slate-100 pr-4">
              <span className="text-xs font-black uppercase tracking-wider text-indigo-950 flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-500"></span> Estudiante
              </span>
            </div>
            <div className="col-span-10 flex gap-4">
              <div className="bg-slate-50 border border-slate-200/60 p-4 rounded-xl flex-1 relative">
                <h5 className="font-bold text-xs text-indigo-950 mb-0.5">1. Inicio y Pago</h5>
                <p className="text-[11px] text-slate-400 leading-tight">Abona derecho y adjunta comprobante en el portal.</p>
                <div className="absolute top-1/2 -right-3 transform -translate-y-1/2 text-slate-300 font-bold">&rarr;</div>
              </div>
              <div className="bg-slate-50 border border-slate-200/60 p-4 rounded-xl flex-1 relative">
                <h5 className="font-bold text-xs text-indigo-950 mb-0.5">2. Organizar Fólder</h5>
                <p className="text-[11px] text-slate-400 leading-tight">Registra la Ficha de Identidad y formatos requeridos.</p>
              </div>
              <div className="flex-1 opacity-20 border border-dashed border-slate-200 rounded-xl"></div>
              <div className="flex-1 opacity-20 border border-dashed border-slate-200 rounded-xl"></div>
            </div>
          </div>

          {/* Carril 2: Docente Supervisor */}
          <div className="grid grid-cols-12 items-center gap-4 border-b border-slate-100 pb-4">
            <div className="col-span-2 border-r border-slate-100 pr-4">
              <span className="text-xs font-black uppercase tracking-wider text-[#C91414] flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-[#C91414]"></span> Supervisor IESTP
              </span>
            </div>
            <div className="col-span-10 flex gap-4">
              <div className="flex-1 opacity-20 border border-dashed border-slate-200 rounded-xl"></div>
              <div className="bg-red-50/30 border border-red-100 p-4 rounded-xl flex-1 relative">
                <h5 className="font-bold text-xs text-indigo-950 mb-0.5">3. Validación Inicial</h5>
                <p className="text-[11px] text-slate-400 leading-tight">Verifica el fólder. Si cumple, deriva para firma de carta.</p>
                <div className="absolute top-1/2 -right-3 transform -translate-y-1/2 text-slate-300 font-bold">&rarr;</div>
              </div>
              <div className="bg-slate-50 border border-slate-200/60 p-4 rounded-xl flex-1">
                <h5 className="font-bold text-xs text-indigo-950 mb-0.5">4. Firma de Formatos</h5>
                <p className="text-[11px] text-slate-400 leading-tight">Dirección y Coordinación emiten Carta de Presentación.</p>
              </div>
              <div className="flex-1 opacity-20 border border-dashed border-slate-200 rounded-xl"></div>
            </div>
          </div>

          {/* Carril 3: Empresa */}
          <div className="grid grid-cols-12 items-center gap-4 border-b border-slate-100 pb-4">
            <div className="col-span-2 border-r border-slate-100 pr-4">
              <span className="text-xs font-black uppercase tracking-wider text-emerald-700 flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span> Centro Laboral
              </span>
            </div>
            <div className="col-span-10 flex gap-4">
              <div className="flex-1 opacity-20 border border-dashed border-slate-200 rounded-xl"></div>
              <div className="flex-1 opacity-20 border border-dashed border-slate-200 rounded-xl"></div>
              <div className="bg-emerald-50/20 border border-emerald-100 p-4 rounded-xl flex-1 relative">
                <h5 className="font-bold text-xs text-indigo-950 mb-0.5">5. Ejecutar Prácticas</h5>
                <p className="text-[11px] text-slate-400 leading-tight">El estudiante desarrolla las 128 horas en la organización.</p>
                <div className="absolute top-1/2 -right-3 transform -translate-y-1/2 text-slate-300 font-bold">&rarr;</div>
              </div>
              <div className="bg-emerald-50/20 border border-emerald-100 p-4 rounded-xl flex-1">
                <h5 className="font-bold text-xs text-indigo-950 mb-0.5">6. Ficha de Evaluación</h5>
                <p className="text-[11px] text-slate-400 leading-tight">Supervisor califica los 25 criterios y otorga el Certificado.</p>
              </div>
            </div>
          </div>

          {/* Carril 4: Coordinación y Autoridades */}
          <div className="grid grid-cols-12 items-center gap-4">
            <div className="col-span-2 border-r border-slate-100 pr-4">
              <span className="text-xs font-black uppercase tracking-wider text-amber-700 flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-amber-500"></span> Autoridades IESTP
              </span>
            </div>
            <div className="col-span-10 flex gap-4">
              <div className="flex-1 opacity-20 border border-dashed border-slate-200 rounded-xl"></div>
              <div className="flex-1 opacity-20 border border-dashed border-slate-200 rounded-xl"></div>
              <div className="flex-1 opacity-20 border border-dashed border-slate-200 rounded-xl"></div>
              <div className="bg-amber-50/30 border border-amber-100 p-4 rounded-xl flex-1">
                <h5 className="font-bold text-xs text-indigo-950 mb-0.5">7. Certificación Final</h5>
                <p className="text-[11px] text-slate-400 leading-tight">Coordinación emite Constancia, Visación y Secretaría registra actas.</p>
              </div>
            </div>
          </div>

        </div>
      </section>


      {/* MÓDULOS E ITINERARIO CURRICULAR */}
      <section id="modulos" className="max-w-7xl mx-auto px-6 py-16 w-full animate-fade-in">
        <div className="text-center mb-12">
          <h3 className="text-2xl sm:text-3xl font-black text-indigo-950 tracking-tight">Módulos del Itinerario Formativo</h3>
          <p className="text-xs text-[#C91414] uppercase tracking-widest font-black mt-1">Componentes curriculares obligatorios para la certificación</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card Módulo I */}
          <div className="bg-white p-8 rounded-3xl border border-slate-100/80 shadow-2xl shadow-indigo-950/5 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-950/10 flex flex-col justify-between border-t-4 border-indigo-950">
            <div>
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#C91414] bg-red-50 px-2.5 py-1 rounded-md">Módulo Profesional I</span>
              <h4 className="font-black text-indigo-950 text-lg mt-3 mb-2 leading-tight">Diseño Web y Aplicaciones Multimedia</h4>
              <p className="text-xs text-slate-400 font-medium mb-4">Unidad de Competencia 01: Diseñar la presentación, animación, organización y navegación de contenidos y servicios web.</p>
              
              <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100 space-y-2 mb-6">
                <h5 className="text-[10px] font-black uppercase tracking-wider text-slate-400">Capacidades a Reforzar:</h5>
                <ul className="text-xs text-slate-600 space-y-1 list-disc pl-4 font-medium">
                  <li>Maquetación web semántica y layouts fluidos.</li>
                  <li>Elaboración de recursos multimedia vectoriales.</li>
                  <li>Animación gráfica y prototipado UI/UX en Figma.</li>
                  <li>Arquitectura de Entorno Web y Hosting.</li>
                </ul>
              </div>
            </div>
            <div className="pt-4 border-t border-slate-100 flex justify-between items-center text-xs font-black">
              <span className="text-slate-400">Créditos: 4 EFSRT</span>
              <span className="text-[#C91414] bg-red-50/50 px-3 py-1 rounded-lg">128 Horas Cronológicas</span>
            </div>
          </div>

          {/* Card Módulo II */}
          <div className="bg-white p-8 rounded-3xl border border-slate-100/80 shadow-2xl shadow-indigo-950/5 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-950/10 flex flex-col justify-between border-t-4 border-[#C91414]">
            <div>
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#C91414] bg-red-50 px-2.5 py-1 rounded-md">Módulo Profesional II</span>
              <h4 className="font-black text-indigo-950 text-lg mt-3 mb-2 leading-tight">Aplicaciones Web</h4>
              <p className="text-xs text-slate-400 font-medium mb-4">Unidad de Competencia 02: Desarrollar la construcción de programas de sistemas de información bajo el diseño funcional.</p>
              
              <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100 space-y-2 mb-6">
                <h5 className="text-[10px] font-black uppercase tracking-wider text-slate-400">Capacidades a Reforzar:</h5>
                <ul className="text-xs text-slate-600 space-y-1 list-disc pl-4 font-medium">
                  <li>Programación lógica estructurada y POO.</li>
                  <li>Diseño y normalización de bases de datos (3FN).</li>
                  <li>Construcción de CRUDs y sistemas de autenticación.</li>
                  <li>Pruebas unitarias y requerimientos de software.</li>
                </ul>
              </div>
            </div>
            <div className="pt-4 border-t border-slate-100 flex justify-between items-center text-xs font-black">
              <span className="text-slate-400">Créditos: 4 EFSRT</span>
              <span className="text-[#C91414] bg-red-50/50 px-3 py-1 rounded-lg">128 Horas Cronológicas</span>
            </div>
          </div>

          {/* Card Módulo III */}
          <div className="bg-white p-8 rounded-3xl border border-slate-100/80 shadow-2xl shadow-indigo-950/5 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-950/10 flex flex-col justify-between border-t-4 border-indigo-950">
            <div>
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#C91414] bg-red-50 px-2.5 py-1 rounded-md">Módulo Profesional III</span>
              <h4 className="font-black text-indigo-950 text-lg mt-3 mb-2 leading-tight">Integración de Aplicaciones Web y Móviles</h4>
              <p className="text-xs text-slate-400 font-medium mb-4">Unidad de Competencia 03: Desarrollar pruebas integrales de software y servicios de TI en la fase de implantación.</p>
              
              <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100 space-y-2 mb-6">
                <h5 className="text-[10px] font-black uppercase tracking-wider text-slate-400">Capacidades a Reforzar:</h5>
                <ul className="text-xs text-slate-600 space-y-1 list-disc pl-4 font-medium">
                  <li>Implementación de aplicaciones móviles híbridas (Ionic/Android).</li>
                  <li>Configuración segura de servidores web (Apache/IIS).</li>
                  <li>Pruebas de calidad (ISO 9126 / ISO 25000) y seguridad.</li>
                  <li>Integración de tiendas virtuales (E-commerce) dinámicas.</li>
                </ul>
              </div>
            </div>
            <div className="pt-4 border-t border-slate-100 flex justify-between items-center text-xs font-black">
              <span className="text-slate-400">Créditos: 4 EFSRT</span>
              <span className="text-[#C91414] bg-red-50/50 px-3 py-1 rounded-lg">128 Horas Cronológicas</span>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER ELEGANTE */}
      <footer className="mt-auto bg-white border-t border-slate-200/60 py-6 text-center text-xs font-bold text-slate-400 tracking-wide">
        &copy; 2026 IESTP "ANDRÉS AVELINO CÁCERES DORREGARAY" &bull; SAN AGUSTÍN DE CAJAS - HUANCAYO
      </footer>

      <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} onLoginSuccess={onLoginSuccess} />
    </div>
  );
}
