import DestacadosCreadores from "./ShowCreatorSpanish";
import Link from "next/link";

export default function GrandePuertoRicoMarketingPage() {
  return (
    <main className="min-h-screen mt-20 bg-white dark:bg-black text-gray-900 dark:text-white">
      <header className="bg-gray-100 dark:bg-zinc-900 py-10 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Marketing de Influencers en Puerto Rico
          </h1>
          <h2 className="text-3xl font-bold text-center text-black dark:text-white mb-8">
            Influencers, Podcasts y Contenido UGC en Puerto Rico – Grande
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            Lanza campañas auténticas en Puerto Rico con creadores locales, contenido generado por usuarios (UGC) y colaboraciones con podcasts.
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
            Es una estrategia que permite a las marcas colaborar con creadores digitales que tienen una fuerte conexión con sus comunidades. En Puerto Rico, donde la cultura y el contenido se viven con pasión, esto crea oportunidades de alto impacto para promocionar tu negocio.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">Beneficios del Marketing de Influencers en Puerto Rico</h2>
          <ul className="list-disc list-inside space-y-2 mt-4">
            <li><strong>Conexión Cultural:</strong> Influencers puertorriqueños entienden a su audiencia y transmiten autenticidad.</li>
            <li><strong>Alcance Local:</strong> Segmenta tus campañas para San Juan, Bayamón, Ponce y otras ciudades clave.</li>
            <li><strong>Engagement Real:</strong> Interacción más alta comparada con medios tradicionales.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">¿Por Qué Elegir Grande?</h2>
          <ul className="list-disc list-inside space-y-2 mt-4">
            <li><strong>Red de Creadores Locales:</strong> Desde microinfluencers hasta celebridades digitales de Puerto Rico.</li>
            <li><strong>Plataforma Todo-en-Uno:</strong> UGC, campañas de influencers y podcasts en una sola herramienta.</li>
            <li><strong>Análisis Inteligente:</strong> Métricas claras y seguimiento en tiempo real.</li>
            <li><strong>Soporte Regional:</strong> Nuestro equipo entiende el mercado puertorriqueño.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">UGC: Contenido Real para Audiencias Reales</h2>
          <p>
            El contenido generado por usuarios (UGC) es poderoso en una isla con consumidores exigentes. Crea contenido que conecta de forma natural: reseñas, unboxings, rutinas de uso, y más.
          </p>
          <ul className="list-disc list-inside space-y-2 mt-4">
            <li><strong>Credibilidad:</strong> Personas reales hablando de tu marca.</li>
            <li><strong>Asequible:</strong> Producción de contenido sin necesidad de un estudio profesional.</li>
            <li><strong>Conversión:</strong> Aumenta la intención de compra con contenido auténtico.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">Trabaja con Creadores Puertorriqueños</h2>
          <p>
            Colabora con influencers que conocen la cultura boricua y tienen voz en sectores como moda, belleza, estilo de vida, tecnología y más.
          </p>
          <ul className="list-disc list-inside space-y-2 mt-4">
            <li><strong>Segmentación Precisa:</strong> Campañas dirigidas a públicos específicos en la isla.</li>
            <li><strong>ROI Optimizado:</strong> Más resultados con menor inversión.</li>
            <li><strong>Confianza Comunitaria:</strong> Creadores con seguidores leales y auténticos.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">¿Cómo Funciona Grande?</h2>
          <ol className="list-decimal list-inside space-y-2 mt-4">
            <li><strong>Regístrate:</strong> Crea tu cuenta rápidamente.</li>
            <li><strong>Encuentra Creadores:</strong> Filtra por ciudad, nicho, idioma y engagement.</li>
            <li><strong>Lanza tu Campaña:</strong> Gestiona todo desde la plataforma de Grande.</li>
            <li><strong>Mide Resultados:</strong> Analiza el rendimiento y mejora tus futuras campañas.</li>
          </ol>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">Grande en Puerto Rico</h2>
          <ul className="list-disc list-inside space-y-2 mt-4">
            <li><strong>Alcance Nacional:</strong> Cubre San Juan, Mayagüez, Caguas, Arecibo y más.</li>
            <li><strong>Soporte Localizado:</strong> Equipos que conocen el comportamiento digital boricua.</li>
            <li><strong>Casos de Éxito:</strong> Marcas puertorriqueñas ya están creciendo con Grande.</li>
          </ul>
        </section>

        <section className="text-center">
          <h2 className="text-2xl font-semibold mb-4">¿Listo para Impulsar tu Marca en Puerto Rico?</h2>
          <p className="mb-6">
            Únete a Grande y conecta con los mejores creadores de Puerto Rico para alcanzar tus metas comerciales.
          </p>
          <Link href="/">
            <div className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition">
              Crear mi campaña
            </div>
          </Link>
        </section>
      </article>
    </main>
  );
}
