import DestacadosCreadores from "./ShowCreatorSpanish";
import Link from "next/link";

export default function GrandeESMarketingPage() {
  return (
    <main className="min-h-screen mt-20 bg-white dark:bg-black text-gray-900 dark:text-white">
      <header className="bg-gray-100 dark:bg-zinc-900 py-10 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Marketing de Influencers en España
          </h1>
          <h2 className="text-3xl font-bold text-center text-black dark:text-white mb-8">
            Plataforma de Influencers, Podcast y Contenido UGC en España – Grande
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            Impulsa tu marca en España con campañas auténticas con influencers, creadores de contenido y podcast locales.
          </p>
        </div>
      </header>

      <div className="w-full max-w-5xl mx-auto mt-8 mb-12 px-6">
      <DestacadosCreadores/>
      </div>

      <article className="max-w-4xl mx-auto px-6 space-y-12 pb-20">
        <section>
          <h2 className="text-2xl font-semibold">¿Qué es el Marketing de Influencers?</h2>
          <p>
            Es una estrategia donde marcas colaboran con creadores para promocionar productos o servicios. En España, donde el uso de redes sociales es masivo, permite conectar de forma auténtica con el público objetivo.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">Beneficios del Marketing de Influencers en España</h2>
          <ul className="list-disc list-inside space-y-2 mt-4">
            <li><strong>Alcance Nacional y Local:</strong> Conecta con audiencias desde Madrid hasta Barcelona o Valencia.</li>
            <li><strong>Contenido Cercano:</strong> Los creadores generan contenido adaptado al lenguaje y cultura española.</li>
            <li><strong>Engagement Natural:</strong> Mejores tasas de interacción que la publicidad tradicional.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">¿Por Qué Elegir Grande?</h2>
          <ul className="list-disc list-inside space-y-2 mt-4">
            <li><strong>Encuentra al Influencer Ideal:</strong> Filtra por nicho, ciudad y métricas clave.</li>
            <li><strong>Todo desde una Plataforma:</strong> Desde la búsqueda hasta la medición del rendimiento.</li>
            <li><strong>Análisis Avanzado:</strong> Accede a resultados en tiempo real para optimizar tus campañas.</li>
            <li><strong>Planes Personalizados:</strong> Para emprendedores, agencias o grandes marcas en España.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">Aprovecha el Poder del UGC</h2>
          <p>
            El contenido generado por usuarios (UGC) genera confianza y conexión real. Grande te permite integrar UGC en tus campañas de forma sencilla.
          </p>
          <ul className="list-disc list-inside space-y-2 mt-4">
            <li><strong>Contenido Genuino:</strong> Creados por usuarios reales de tu producto.</li>
            <li><strong>Alto Rendimiento:</strong> Genera más interacción que muchos anuncios convencionales.</li>
            <li><strong>Reducción de Costes:</strong> Producción de contenido más asequible.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">Colabora con Creadores Españoles</h2>
          <p>
            Encuentra microinfluencers y creadores UGC de toda España: desde creadores de TikTok en Sevilla hasta streamers en Bilbao.
          </p>
          <ul className="list-disc list-inside space-y-2 mt-4">
            <li><strong>Alto Engagement:</strong> Mejores resultados con comunidades específicas.</li>
            <li><strong>Audiencias Nicho:</strong> Segmentación precisa para llegar al público deseado.</li>
            <li><strong>Coste-Eficiencia:</strong> Resultados sólidos sin grandes presupuestos.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">Cómo Funciona Grande</h2>
          <ol className="list-decimal list-inside space-y-2 mt-4">
            <li><strong>Regístrate:</strong> Crea tu cuenta en segundos.</li>
            <li><strong>Explora Influencers:</strong> Filtros por tipo de contenido, audiencia y ubicación.</li>
            <li><strong>Lanza tu Campaña:</strong> Gestiona todo el proceso desde la plataforma.</li>
            <li><strong>Analiza Resultados:</strong> Optimiza con datos precisos en tiempo real.</li>
          </ol>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">Grande, tu Socio en España</h2>
          <ul className="list-disc list-inside space-y-2 mt-4">
            <li><strong>Solución Integral:</strong> Influencers, UGC, y podcast en un solo lugar.</li>
            <li><strong>Equipo de Soporte Local:</strong> Asistencia en tu mismo huso horario.</li>
            <li><strong>Confianza de Marcas Españolas:</strong> Ya colaboramos con negocios de diversos sectores en España.</li>
          </ul>
        </section>

        <section className="text-center">
          <h2 className="text-2xl font-semibold mb-4">¿Listo para Impulsar tu Marca en España?</h2>
          <p className="mb-6">
            Empieza hoy con Grande y lleva tu marketing de influencers al siguiente nivel.
          </p>
          <Link href="/signup">
            <div className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition">
              Crear mi campaña
            </div>
          </Link>
        </section>
      </article>
    </main>
  );
}
