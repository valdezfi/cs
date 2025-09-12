import DestacadosCreadores from "./ShowCreatorSpanish";
import Link from "next/link";

export default function GrandeVENMarketingPage() {
  return (
    <main className="min-h-screen mt-20 bg-white dark:bg-black text-gray-900 dark:text-white">
      <header className="bg-gray-100 dark:bg-zinc-900 py-10 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Marketing de Influencers Venezuela
          </h1>
          <h2 className="text-3xl font-bold text-center text-black dark:text-white mb-8">
            Plataforma de Influencers, Podcast y UGC en Venezuela – Grande
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            Haz crecer tu marca en Venezuela con campañas auténticas de influencers, contenido generado por usuarios (UGC) y podcasts.
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
            Es una estrategia donde marcas se asocian con creadores para promocionar productos o servicios. 
            En Venezuela, donde las redes sociales y plataformas como{" "}
            <strong>Mercado Libre Venezuela</strong> o{" "}
            <strong>Mercado Libre de Venezuela</strong> son parte del día a día digital, 
            este tipo de marketing permite una conexión genuina con la audiencia.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">Beneficios del Marketing de Influencers en Venezuela</h2>
          <ul className="list-disc list-inside space-y-2 mt-4">
            <li><strong>Alcance Local y Global:</strong> Llega a audiencias en Caracas, Maracaibo, Valencia y más.</li>
            <li><strong>Contenido Auténtico:</strong> Los influencers venezolanos generan confianza con sus seguidores.</li>
            <li><strong>Alta Participación:</strong> Engagement superior comparado con medios tradicionales o listados en Mercado Libre Venezuela.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">¿Por Qué Elegir Grande?</h2>
          <ul className="list-disc list-inside space-y-2 mt-4">
            <li><strong>Base de Influencers Venezolanos:</strong> Desde creadores emergentes hasta personalidades reconocidas.</li>
            <li><strong>Gestión Completa:</strong> Selección, ejecución y análisis en una sola plataforma.</li>
            <li><strong>Datos en Tiempo Real:</strong> Métricas actualizadas para medir el impacto de tu campaña.</li>
            <li><strong>Planes a Medida:</strong> Opciones para emprendimientos y marcas establecidas en Venezuela.</li>
          </ul>
          <p className="mt-4">
            A diferencia de vender en plataformas como{" "}
            <em>Mercado Libre de Venezuela</em>, Grande se centra en generar 
            relaciones auténticas y branding duradero.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">Impulsa tu Estrategia con UGC</h2>
          <p>
            El contenido generado por usuarios (UGC) es clave para construir confianza. 
            Con Grande puedes incluir este tipo de contenido de manera efectiva en tu estrategia digital venezolana, 
            superando la simple publicación en clasificados como{" "}
            <strong>Mercado Libre Venezuela</strong>.
          </p>
          <ul className="list-disc list-inside space-y-2 mt-4">
            <li><strong>Contenido Real:</strong> Personas reales mostrando y recomendando tus productos.</li>
            <li><strong>Mejor Conversión:</strong> Influye directamente en las decisiones de compra.</li>
            <li><strong>Producción Económica:</strong> Reduce costos sin perder autenticidad.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">Trabaja con Microinfluencers y Creadores UGC en Venezuela</h2>
          <p>
            Grande te conecta con creadores locales que ofrecen excelente rendimiento y relevancia regional, 
            algo que no siempre logras al vender únicamente en{" "}
            <strong>Mercado Libre de Venezuela</strong>.
          </p>
          <ul className="list-disc list-inside space-y-2 mt-4">
            <li><strong>Engagement Real:</strong> Seguidores comprometidos que confían en su comunidad.</li>
            <li><strong>Enfoque Regional:</strong> Impacto en mercados específicos como Caracas, Maracay y Barquisimeto.</li>
            <li><strong>Alto Retorno:</strong> Costos más bajos con resultados potentes.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">¿Cómo Funciona Grande?</h2>
          <ol className="list-decimal list-inside space-y-2 mt-4">
            <li><strong>Regístrate:</strong> Crea tu cuenta fácilmente.</li>
            <li><strong>Explora Creadores:</strong> Filtra por ubicación, nicho, seguidores y más.</li>
            <li><strong>Lanza tu Campaña:</strong> Colabora con influencers venezolanos auténticos.</li>
            <li><strong>Revisa Resultados:</strong> Optimiza tus acciones con datos claros y en tiempo real.</li>
          </ol>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">Grande: Tu Socio de Marketing en Venezuela</h2>
          <ul className="list-disc list-inside space-y-2 mt-4">
            <li><strong>Todo en un solo lugar:</strong> Influencers, UGC, campañas de podcast y más.</li>
            <li><strong>Equipo Enfocado:</strong> Soporte especializado en el mercado venezolano.</li>
            <li><strong>Casos de Éxito:</strong> Marcas locales ya están generando resultados con Grande.</li>
          </ul>
        </section>

        <section className="text-center">
          <h2 className="text-2xl font-semibold mb-4">¿Listo para Impulsar tu Marca en Venezuela?</h2>
          <p className="mb-6">
            Empieza ahora con Grande y alcanza tu público ideal con campañas efectivas en Venezuela, 
            mucho más allá de los simples listados de{" "}
            <strong>Mercado Libre Venezuela</strong>.
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
