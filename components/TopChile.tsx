import Link from "next/link";
import CreatorSpotlight from "components/ShowCreator"; // adjust the path based on your folder structure

export default function GrandeChileMarketingPage() {
  return (
    <main className="min-h-screen mt-20 bg-white dark:bg-black text-gray-900 dark:text-white">
      <header className="bg-gray-100 dark:bg-zinc-900 py-10 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Grande: La Plataforma Líder de Marketing de Influencers en Chile
          </h1>
          <h2 className="text-3xl font-bold text-center text-black dark:text-white mb-8">
            Plataforma de Marketing de Influencers, Podcast, y UGC en Chile – Grande
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            Impulsa tu marca en Chile con campañas auténticas de influencers, podcast, y contenido generado por usuarios (UGC).
          </p>
        </div>
      </header>

      <div className="w-full max-w-5xl mx-auto mt-8 mb-12 px-6">
    <CreatorSpotlight/>
      </div>

      <article className="max-w-4xl mx-auto px-6 space-y-12 pb-20">
        <section>
          <h2 className="text-2xl font-semibold">¿Qué es el Marketing de Influencers?</h2>
          <p>
            Es una estrategia en la que marcas colaboran con creadores para promocionar productos o servicios. En Chile, donde las redes sociales son parte clave del día a día, este tipo de marketing permite conectar auténticamente con el público local.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">Beneficios del Marketing de Influencers en Chile</h2>
          <ul className="list-disc list-inside space-y-2 mt-4">
            <li><strong>Alcance Amplio:</strong> Accede a nuevas audiencias gracias a los seguidores de los influencers.</li>
            <li><strong>Contenido Auténtico:</strong> Los creadores generan contenido que resuena con su comunidad.</li>
            <li><strong>Mayor Interacción:</strong> Mejores tasas de participación que los métodos publicitarios tradicionales.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">¿Por Qué Elegir Grande?</h2>
          <ul className="list-disc list-inside space-y-2 mt-4">
            <li><strong>Búsqueda Eficiente:</strong> Encuentra influencers ideales con filtros por nicho, audiencia y métricas.</li>
            <li><strong>Gestión Simplificada:</strong> Todo el flujo, desde selección hasta publicación, en un solo lugar.</li>
            <li><strong>Análisis en Tiempo Real:</strong> Mide resultados al instante y optimiza tus campañas.</li>
            <li><strong>Planes Flexibles:</strong> Para startups, pymes y grandes marcas en Chile.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">Potencia tu Estrategia con UGC</h2>
          <p>
            El contenido generado por usuarios (UGC) es poderoso para generar confianza y conexión genuina. Nuestra plataforma te permite gestionar este contenido para integrarlo en tus campañas.
          </p>
          <ul className="list-disc list-inside space-y-2 mt-4">
            <li><strong>Autenticidad Real:</strong> Contenido creado por personas reales usando tus productos.</li>
            <li><strong>Interacción Mejorada:</strong> Más engagement que los anuncios convencionales.</li>
            <li><strong>Menor Costo:</strong> Reduce el gasto en producción de contenido.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">Colabora con UGC Creators y Microinfluencers</h2>
          <p>
            Grande te conecta con microinfluencers y creadores de contenido UGC en Chile que ofrecen alta participación y conexión auténtica con públicos nicho.
          </p>
          <ul className="list-disc list-inside space-y-2 mt-4">
            <li><strong>Participación Alta:</strong> Engagement superior al de influencers de gran escala.</li>
            <li><strong>Audiencias Específicas:</strong> Ideal para campañas dirigidas a nichos concretos.</li>
            <li><strong>Rentabilidad:</strong> Mayor retorno por menor inversión.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">Cómo Funciona Grande</h2>
          <ol className="list-decimal list-inside space-y-2 mt-4">
            <li><strong>Regístrate:</strong> Accede a todas las funcionalidades.</li>
            <li><strong>Busca Influencers:</strong> Filtra por tipo de audiencia, engagement y nicho.</li>
            <li><strong>Lanza tu Campaña:</strong> Colabora y lanza contenido alineado a tu marca.</li>
            <li><strong>Analiza Resultados:</strong> Mejora el rendimiento con métricas en tiempo real.</li>
          </ol>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">Por Qué Grande es la Mejor Opción</h2>
          <ul className="list-disc list-inside space-y-2 mt-4">
            <li><strong>Plataforma Todo en Uno:</strong> Influencers + UGC en una solución integrada.</li>
            <li><strong>Soporte Dedicado:</strong> Nuestro equipo en Chile está listo para ayudarte.</li>
            <li><strong>Resultados Comprobados:</strong> Grandes marcas ya confían en nosotros en todo el país.</li>
          </ul>
        </section>

        <section className="text-center">
          <h2 className="text-2xl font-semibold mb-4">¿Listo para Impulsar tu Marca?</h2>
          <p className="mb-6">
            Empieza hoy con Grande y lleva tu estrategia de marketing de influencers y UGC al siguiente nivel en Chile.
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
