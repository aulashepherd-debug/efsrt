import React from 'react';
import Button from '../components/atoms/Button';

export default function ReglamentoView({ onBack }) {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Button variant="secondary" onClick={onBack} className="mb-6">
        &larr; Volver a la Principal
      </Button>
      
      <div className="bg-white p-8 rounded-lg shadow border border-gray-200 prose max-w-none">
        <h1 className="text-2xl font-bold text-gray-900 mb-2 text-center">
          REGLAMENTO PARA EL DESARROLLO DE LAS EXPERIENCIAS FORMATIVAS EN SITUACIONES REALES DE TRABAJO
        </h1>
        <p className="text-center font-semibold text-gray-600 mb-6">IESTP "ANDRÉS AVELINO CÁCERES DORREGARAY"</p>
        
        <div className="space-y-6 text-gray-700 text-justify">
          <section>
            <h2 className="text-lg font-bold text-gray-900 border-b pb-1">CAPÍTULO I: DEL CONTENIDO Y ALCANCES</h2>
            <p className="mt-2"><strong>Art. 1°</strong> El presente Reglamento establece los objetivos y procedimientos que los estudiantes de los Programas de Estudios deberán tomar en consideración para el desarrollo de las EFSRT y Prácticas Pre Profesionales.</p>
            <p className="mt-1"><strong>Art. 2°</strong> Tienen como propósito que los estudiantes consoliden, integren y/o amplíen conocimientos, habilidades y actitudes en situaciones reales de trabajo.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-900 border-b pb-1">CAPÍTULO II: DE LAS BASES LEGALES</h2>
            <p className="mt-2">Se rige bajo la Constitución Política del Perú, la Ley N° 30512 (Ley de Institutos y Escuelas de Educación Superior) y los Lineamientos Académicos Generales vigentes del MINEDU.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-900 border-b pb-1">CAPÍTULO III: DE LOS OBJETIVOS Y CARACTERÍSTICAS</h2>
            <p className="mt-2"><strong>Art. 6° Características:</strong> Las EFSRT son de ejecución obligatoria y requisito indispensable para la certificación modular y la obtención del título profesional técnico.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-900 border-b pb-1">CAPÍTULO IV: MODALIDADES DE DESARROLLO</h2>
            <p className="mt-2">Se pueden realizar de forma presencial, semipresencial o no presencial en:</p>
            <ul className="list-disc pl-5 mt-1 space-y-1">
              <li><strong>En Centros Laborales:</strong> Empresas o instituciones formalmente constituidas mediante convenios específicos.</li>
              <li><strong>En el IESTP:</strong> A través de Proyectos Productivos aprobados institucionalmente o apoyo en Procesos Institucionales.</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
