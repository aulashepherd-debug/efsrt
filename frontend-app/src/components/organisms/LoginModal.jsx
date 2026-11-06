import React, { useState } from 'react';
import { loginAPI } from '../../services/api';

export default function LoginModal({ isOpen, onClose, onLoginSuccess }) {
  const [role, setRole] = useState('Estudiante');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    // Llamada al endpoint real de Node.js a través de nuestra capa de servicios
    const result = await loginAPI(username, password, role);
    
    setIsLoading(false);

    if (result.success) {
      onLoginSuccess({ user: result.user, role: result.role });
      onClose();
    } else {
      setError(result.message || 'Credenciales institucionales incorrectas.');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-indigo-950/60 backdrop-blur-sm">
      <div className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden transform transition-all duration-300">
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#C91414] to-indigo-900"></div>
        
        <div className="p-8">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h3 className="text-2xl font-black text-indigo-950 tracking-tight">Portal SOFT-EFSRT</h3>
              <p className="text-xs text-slate-400 mt-0.5">Acceso exclusivo para miembros del instituto</p>
            </div>
            <button 
              onClick={onClose} 
              className="p-2 text-slate-400 hover:text-slate-600 rounded-full hover:bg-slate-100 transition text-xl font-bold cursor-pointer"
              disabled={isLoading}
            >
              &times;
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">Seleccione su Rol</label>
              <select
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-700 font-medium focus:ring-2 focus:ring-indigo-900 focus:border-transparent outline-none transition text-sm cursor-pointer"
                disabled={isLoading}
              >
                <option value="Estudiante">Estudiante</option>
                <option value="Docente Supervisor">Docente Responsable</option>
                <option value="Supervisor de Empresa">Supervisor de Empresa</option>
                <option value="Coordinador">Coordinador del Programa</option>
                <option value="Unidad Academica">Jefatura de Unidad Académica</option>
                <option value="Administrador">Administrador</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">Usuario / Cód. Institucional</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Ej. Admin o código"
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-700 placeholder-slate-400 focus:ring-2 focus:ring-indigo-900 focus:border-transparent outline-none transition text-sm"
                required
                disabled={isLoading}
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">Contraseña</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-700 placeholder-slate-400 focus:ring-2 focus:ring-indigo-900 focus:border-transparent outline-none transition text-sm"
                required
                disabled={isLoading}
              />
            </div>

            {error && <p className="text-xs font-semibold text-[#C91414]">{error}</p>}

            <button
              type="submit"
              disabled={isLoading}
              className={`w-full bg-indigo-950 hover:bg-indigo-900 text-white font-bold py-3.5 rounded-xl transition-all duration-150 shadow-xl shadow-indigo-950/10 mt-6 text-sm active:scale-[0.98] cursor-pointer ${
                isLoading ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              {isLoading ? 'Autenticando...' : 'Autenticar e Ingresar'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
