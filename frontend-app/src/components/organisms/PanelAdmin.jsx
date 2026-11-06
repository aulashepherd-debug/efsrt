import React from 'react';

export default function PanelAdmin({ session, onLogout }) {
  // Datos simulados iniciales basados en las métricas de tu carrera
  const kpis = [
    { label: 'Estudiantes Activos', valor: '324', color: 'border-l-4 border-indigo-950' },
    { label: 'Aprobaciones Pendientes', valor: '15', color: 'border-l-4 border-[#C91414]' },
    { label: 'Módulos Completados', valor: '92', color: 'border-l-4 border-emerald-500' }
  ];

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col lg:flex-row antialiased text-slate-800">
      
      {/* 1. BARRA LATERAL DE NAVAGACIÓN MINIMALISTA */}
      <aside className="w-full lg:w-64 bg-indigo-950 text-white flex flex-col justify-between p-6 shadow-xl">
        <div>
          {/* Encabezado del Panel */}
          <div className="flex items-center space-x-3 border-b border-white/10 pb-6 mb-6">
            <img src="/logocajas.svg" alt="IESTP" className="h-9 w-9 object-contain" />
            <div>
              <h2 className="text-sm font-black tracking-tight leading-none uppercase">SOFT-EFSRT</h2>
              <p className="text-[10px] text-red-400 font-bold mt-0.5 tracking-wider uppercase">Admin Root</p>
            </div>
          </div>

          {/* Menú de Navegación */}
          <nav className="space-y-1">
            <button className="w-full flex items-center space-x-3 bg-white/10 text-white px-4 py-3 rounded-xl text-xs font-bold tracking-wide transition text-left">
              <span>📊</span> <span>Overview / Inicio</span>
            </button>
            <button className="w-full flex items-center space-x-3 text-slate-400 hover:text-white hover:bg-white/5 px-4 py-3 rounded-xl text-xs font-bold tracking-wide transition text-left cursor-not-allowed" disabled>
              <span>👨‍🏫</span> <span>Gestión de Docentes</span>
            </button>
            <button className="w-full flex items-center space-x-3 text-slate-400 hover:text-white hover:bg-white/5 px-4 py-3 rounded-xl text-xs font-bold tracking-wide transition text-left cursor-not-allowed" disabled>
              <span>📁</span> <span>Expedientes Alumnos</span>
            </button>
          </nav>
        </div>

        {/* Botón de Salida con efecto active:scale */}
        <div className="border-t border-white/10 pt-6 mt-6 lg:mt-0">
          <button 
            onClick={onLogout}
            className="w-full bg-[#C91414] hover:bg-red-700 text-white font-bold py-3 rounded-xl text-xs tracking-wider transition-all duration-150 active:scale-[0.97] cursor-pointer shadow-lg shadow-red-900/20"
          >
            Cerrar Sesión Activa
          </button>
        </div>
      </aside>

      {/* 2. ÁREA DE CONTENIDO PRINCIPAL */}
      <main className="flex-1 p-6 lg:p-10 flex flex-col">
        {/* Barra superior de Perfil */}
        <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-slate-200 pb-6 mb-8 gap-4">
          <div>
            <h1 className="text-2xl font-black text-indigo-950 tracking-tight">Student File Management</h1>
            <p className="text-xs text-slate-400 mt-0.5">Bienvenido al panel raíz del sistema de gestión institucional</p>
          </div>
          <div className="flex items-center space-x-3 bg-white border border-slate-100 px-4 py-2 rounded-2xl shadow-sm">
            <div className="h-8 w-8 bg-indigo-100 rounded-xl flex items-center justify-center text-xs font-black text-indigo-950">
              A
            </div>
            <div className="text-left">
              <p className="text-xs font-black text-indigo-950 leading-none">{session?.user || 'Admin'}</p>
              <p className="text-[10px] text-slate-400 font-bold mt-0.5 uppercase tracking-wider">{session?.role}</p>
            </div>
          </div>
        </header>

        {/* SECCIÓN MÓDULO BIENVENIDA PREMIUM */}
        <section className="bg-white border border-slate-100 shadow-xl shadow-indigo-950/5 rounded-3xl p-8 mb-8 text-center sm:text-left relative overflow-hidden">
          <div className="max-w-2xl relative z-10">
            <span className="inline-flex items-center bg-red-50 text-[#C91414] text-[10px] font-black px-2.5 py-1 rounded-md uppercase tracking-wider mb-3">
              Módulo de Inicialización Completado
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-indigo-950 tracking-tight mb-2">
              ¡Conexión Exitosa con la Base de Datos!
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-medium">
              El sistema ha autenticado las credenciales del Administrador de forma segura contra <span className="font-bold text-slate-600">MySQL / MariaDB</span>. La infraestructura desacoplada en Node.js y React está totalmente operativa.
            </p>
          </div>
          {/* Fondo estético sutil */}
          <div className="absolute right-0 bottom-0 opacity-[0.01] transform translate-x-6 translate-y-6 pointer-events-none select-none hidden sm:block">
            <img src="/logocajas.svg" alt="Engranaje" className="w-64 h-64" />
          </div>
        </section>

        {/* TARJETAS CONTENEDORAS DE INDICADORES (KPIs) */}
        <section className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {kpis.map((kpi, index) => (
            <div key={index} className={`bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col justify-between ${kpi.color}`}>
              <span className="text-xs font-bold text-slate-400 tracking-wide">{kpi.label}</span>
              <span className="text-2xl font-black text-indigo-950 tracking-tight mt-2">{kpi.valor}</span>
            </div>
          ))}
        </section>
      </main>

    </div>
  );
}
