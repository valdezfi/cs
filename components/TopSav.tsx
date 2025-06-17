import Image from "next/image";
import Link from "next/link";

export default function GrandeESMarketingPage() {
  return (
    <main className="min-h-screen mt-20 bg-white dark:bg-black text-gray-900 dark:text-white">
      <header className="bg-gray-100 dark:bg-zinc-900 py-10 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Grande: Plataforma Líder de Marketing de Influencers en El Salvador
          </h1>
          <h2 className="text-3xl font-bold text-center text-black dark:text-white mb-8">
            Influencers, Podcasts y Contenido UGC en El Salvador – Grande
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            Potencia tu marca en El Salvador con campañas auténticas usando influencers, contenido generado por usuarios (UGC) y podcasts.
          </p>
        </div>
      </header>

      <div className="w-full max-w-5xl mx-auto mt-8 mb-12 px-6">
        <Image
          src="/images/pexels-ramilugot-3217363.jpg"
          alt="Marketing de Influencers y UGC en El Salvador"
          width={1200}
          height={600}
          className="rounded-2xl shadow-lg"
        />
      </div>

      <article className="max-w-4xl mx-auto px-6 space-y-12 pb-20">
        <section>
          <h2 className="text-2xl font-semibold">¿Qué es el Marketing de Influencers?</h2>
          <p>
            Es una estrategia moderna donde las marcas colaboran con creadores de contenido para promocionar productos o servicios. En El Salvador, donde el uso de redes sociales es cada vez más influyente, este modelo permite conectar de forma genuina con los consumidores.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">Beneficios del Marketing de Influencers en El Salvador</h2>
          <ul className="list-disc list-inside space-y-2 mt-4">
            <li><strong>Conexión Local:</strong> Llega a audiencias en San Salvador, Santa Ana, San Miguel y más.</li>
            <li><strong>Confianza y Credibilidad:</strong> Influencers salvadoreños generan confianza con su comunidad.</li>
            <li><strong>Mejor Interacción:</strong> Mayor engagement que otros canales publicitarios tradicionales.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">¿Por Qué Elegir Grande?</h2>
          <ul className="list-disc list-inside space-y-2 mt-4">
            <li><strong>Red de Influencers Locales:</strong> Desde microcreadores hasta celebridades digitales salvadoreñas.</li>
            <li><strong>Gestión Completa:</strong> Selección de talento, ejecución y análisis de resultados en un solo lugar.</li>
            <li><strong>Analítica Avanzada:</strong> Datos en tiempo real para medir el impacto de tu campaña.</li>
            <li><strong>Planes Flexibles:</strong> Diseñados para marcas emergentes y consolidadas en El Salvador.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">UGC: Contenido Real que Conecta</h2>
          <p>
            El contenido generado por usuarios es clave en la era digital. Con Grande puedes obtener videos, reseñas y recomendaciones de salvadoreños reales usando tus productos.
          </p>
          <ul className="list-disc list-inside space-y-2 mt-4">
            <li><strong>Autenticidad:</strong> Contenido natural que refleja experiencias reales.</li>
            <li><strong>Conversión:</strong> Mejora las tasas de compra con reseñas y demostraciones reales.</li>
            <li><strong>Producción Económica:</strong> Sin necesidad de grandes estudios o producciones.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">Trabaja con Microinfluencers y Creadores UGC Salvadoreños</h2>
          <p>
            En Grande nos enfocamos en creadores con fuerte conexión con sus comunidades locales.
          </p>
          <ul className="list-disc list-inside space-y-2 mt-4">
            <li><strong>Audiencias Reales:</strong> Seguidores comprometidos y activos.</li>
            <li><strong>Segmentación Regional:</strong> Campañas dirigidas a zonas específicas como Soyapango o Santa Tecla.</li>
            <li><strong>Excelente ROI:</strong> Más resultados con presupuestos controlados.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">¿Cómo Funciona Grande?</h2>
          <ol className="list-decimal list-inside space-y-2 mt-4">
            <li><strong>Regístrate:</strong> Crea tu cuenta en minutos.</li>
            <li><strong>Descubre Creadores:</strong> Filtra por ciudad, intereses y audiencia.</li>
            <li><strong>Lanza tu Campaña:</strong> Colabora directamente con influencers de El Salvador.</li>
            <li><strong>Analiza Resultados:</strong> Mide impacto y ajusta tus estrategias fácilmente.</li>
          </ol>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">Grande en El Salvador</h2>
          <ul className="list-disc list-inside space-y-2 mt-4">
            <li><strong>Solución Integral:</strong> Influencers, UGC y podcasts, todo en una sola plataforma.</li>
            <li><strong>Soporte Local:</strong> Equipo enfocado en el mercado salvadoreño.</li>
            <li><strong>Casos de Éxito:</strong> Marcas salvadoreñas ya están generando resultados reales con Grande.</li>
          </ul>
        </section>

        <section className="text-center">
          <h2 className="text-2xl font-semibold mb-4">¿Listo para Crecer en El Salvador?</h2>
          <p className="mb-6">
            Comienza ahora con Grande y haz crecer tu marca con los creadores más influyentes del país.
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
