import Image from "next/image";
import Link from "next/link";
import DestacadosCreadores from "components/ShowCreatorSpanish"; // adjust the path based on your folder structure

export default function GrandeCOLMarketingPage() {
  return (
    <main className="min-h-screen mt-20 bg-white dark:bg-black text-gray-900 dark:text-white">
      <header className="bg-gray-100 dark:bg-zinc-900 py-10 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Marketing de Influencers Colombia
          </h1>
          <h2 className="text-3xl font-bold text-center text-black dark:text-white mb-8">
            Plataforma de Marketing de Influencers, Podcast y UGC en Colombia – Grande
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            Impulsa tu marca en Colombia con campañas auténticas de influencers, podcast y contenido generado por usuarios (UGC).
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
            Es una estrategia en la que marcas colaboran con creadores para promocionar productos o servicios. En Colombia, donde las redes sociales son parte clave del día a día, este tipo de marketing permite conectar auténticamente con el público.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">Beneficios del Marketing de Influencers en Colombia</h2>
          <ul className="list-disc list-inside space-y-2 mt-4">
            <li><strong>Alcance Nacional:</strong> Llega a audiencias en ciudades como Bogotá, Medellín, Cali y más.</li>
            <li><strong>Contenido Auténtico:</strong> Influencers colombianos generan confianza y conexión real.</li>
            <li><strong>Engagement Elevado:</strong> Participación superior a la de campañas tradicionales.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">¿Por Qué Elegir Grande?</h2>
          <ul className="list-disc list-inside space-y-2 mt-4">
            <li><strong>Base de Influencers Colombianos:</strong> Encuentra desde celebridades hasta microinfluencers locales.</li>
            <li><strong>Gestión Integral:</strong> Desde la selección hasta el análisis de resultados, todo en una plataforma.</li>
            <li><strong>Datos en Tiempo Real:</strong> Visualiza el impacto de tu campaña con métricas confiables.</li>
            <li><strong>Planes Personalizados:</strong> Para negocios emergentes o marcas establecidas en Colombia.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">Potencia tu Estrategia con UGC</h2>
          <p>
            El contenido generado por usuarios (UGC) es clave para generar confianza y autenticidad. Con Grande puedes integrar este contenido de forma efectiva en tu estrategia en Colombia.
          </p>
          <ul className="list-disc list-inside space-y-2 mt-4">
            <li><strong>Contenido Real:</strong> Personas reales usando y recomendando tus productos.</li>
            <li><strong>Mejor Conversión:</strong> Mayor impacto en decisiones de compra.</li>
            <li><strong>Ahorro en Producción:</strong> Reduce costos sin sacrificar calidad.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">Conecta con Microinfluencers y Creadores UGC en Colombia</h2>
          <p>
            Grande te conecta con creadores colombianos de alto rendimiento, ideales para campañas de nicho o segmentadas por región.
          </p>
          <ul className="list-disc list-inside space-y-2 mt-4">
            <li><strong>Engagement Real:</strong> Audiencias fieles y participativas.</li>
            <li><strong>Relevancia Local:</strong> Conexión directa con mercados específicos en Colombia.</li>
            <li><strong>Alto Retorno:</strong> Costos accesibles con grandes resultados.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">¿Cómo Funciona Grande?</h2>
          <ol className="list-decimal list-inside space-y-2 mt-4">
            <li><strong>Regístrate:</strong> Crea tu cuenta en minutos.</li>
            <li><strong>Encuentra Influencers:</strong> Filtra por ciudad, industria, seguidores y más.</li>
            <li><strong>Lanza tu Campaña:</strong> Colabora y publica contenido auténtico y eficaz.</li>
            <li><strong>Analiza Resultados:</strong> Mejora con métricas claras y en tiempo real.</li>
          </ol>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">Por Qué Grande es la Mejor Plataforma en Colombia</h2>
          <ul className="list-disc list-inside space-y-2 mt-4">
            <li><strong>Todo en Uno:</strong> Influencers, UGC, podcast y más en una sola herramienta.</li>
            <li><strong>Equipo Local:</strong> Soporte especializado y conocimiento del mercado colombiano.</li>
            <li><strong>Resultados Reales:</strong> Marcas colombianas ya ven el impacto con Grande.</li>
          </ul>
        </section>

        <section className="text-center">
          <h2 className="text-2xl font-semibold mb-4">¿Listo para Impulsar tu Marca en Colombia?</h2>
          <p className="mb-6">
            Empieza hoy con Grande y lleva tu estrategia de marketing al siguiente nivel con influencers colombianos.
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
