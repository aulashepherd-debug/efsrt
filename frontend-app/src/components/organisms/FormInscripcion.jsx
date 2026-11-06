import React, { useState } from 'react';
import Button from '../atoms/Button';

export default function FormInscripcion({ onClose }) {
  const [formData, setFormData] = useState({
    dni: '', apellidosNombres: '', celular: '', modulo: 'Módulo I', ruc: '', empresa: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Solicitud registrada correctamente para ${formData.apellidosNombres}.`);
    onClose();
  };

  return (
    <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-xl max-w-3xl mx-auto my-8 animate-fade-in">
      <div className="flex justify-between items-center border-b border-slate-100 pb-4 mb-6">
        <div>
          <h3 className="text-xl font-black text-indigo-950 tracking-tight">Ficha de Inscripción Digital</h3>
          <p className="text-xs text-slate-400 mt-0.5">Apertura tu expediente de Experiencias Formativas en Situaciones Reales de Trabajo</p>
        </div>
        <button onClick={onClose} className="p-1.5 text-slate-400 hover:text-slate-600 rounded-full hover:bg-slate-50 transition text-2xl font-bold">&times;</button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1.5">Documento de Identidad (DNI)</label>
            <input type="text" maxLength="8" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[#C91414] focus:bg-white transition" required />
          </div>
          <div>
            <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1.5">Apellidos y Nombres completos</label>
            <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[#C91414] focus:bg-white transition" required />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1.5">Número de Celular</label>
            <input type="tel" maxLength="9" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[#C91414] focus:bg-white transition" required />
          </div>
          <div>
            <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1.5">Módulo Técnico a Acreditar</label>
            <select className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[#C91414] focus:bg-white transition font-medium text-slate-700">
              <option value="Módulo I">Módulo I: Diseño Web y Aplicaciones Multimedia</option>
              <option value="Módulo II">Módulo II: Aplicaciones Web</option>
              <option value="Módulo III">Módulo III: Integración de Aplicaciones Web y Móviles</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-slate-50 pt-4">
          <div>
            <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1.5">RUC de la Empresa (11 dígitos)</label>
            <input type="text" maxLength="11" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[#C91414] focus:bg-white transition" required />
          </div>
          <div>
            <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1.5">Razón Social del Centro Laboral</label>
            <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[#C91414] focus:bg-white transition" required />
          </div>
        </div>

        <div className="flex justify-end space-x-3 pt-4 border-t border-slate-100">
          <Button variant="secondary" onClick={onClose}>Cancelar</Button>
          <Button type="submit" variant="primary">Registrar Solicitud en Línea</Button>
        </div>
      </form>
    </div>
  );
}
