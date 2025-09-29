import DestacadosCreadores from "./ShowCreatorSpanish";
import Link from "next/link";

export default function GrandeRDMarketingPage() {
  return (
    <main className="min-h-screen mt-20 bg-white dark:bg-black text-gray-900 dark:text-white">
      <header className="bg-gray-100 dark:bg-zinc-900 py-10 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
          Influencers República Dominicana: Marketing de Influencers Dominicanos
          </h1>
          <h2 className="text-3xl font-bold text-center text-black dark:text-white mb-8">
            Plataforma de Marketing de Influencers, Podcast y UGC en República Dominicana – Grande 
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            Potencia tu marca con estrategias de influencers dominicanos, Podcast, y contenido generado por usuarios (UGC) adaptadas al mercado dominicano.
          </p>
        </div>
      </header>

      <div className="w-full max-w-5xl mx-auto mt-8 mb-12 px-6">
       <DestacadosCreadores/>
      </div>

      <article className="max-w-4xl mx-auto px-6 space-y-12 pb-20">
        <section>
          <h2 className="text-2xl font-semibold">¿Qué es una Plataforma de Marketing de Influencers?</h2>
          <p>
            Nuestra plataforma de marketing de influencers conecta a las marcas con <strong>influencers dominicanos</strong> locales y relevantes, optimizando el impacto de cada campaña.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">Beneficios de Usar una Plataforma de Influencers en República Dominicana</h2>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Alcance Local y Global:</strong> Trabajamos con influencers dominicanos que entienden tu mercado.</li>
            <li><strong>Autenticidad:</strong> Las colaboraciones generan confianza y compromiso.</li>
            <li><strong>Resultados Tangibles:</strong> Incrementa visibilidad, engagement y conversiones.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">Plataforma UGC: Contenido Auténtico para Conectar</h2>
          <p>
            El contenido generado por usuarios (UGC) aporta credibilidad y originalidad. Nuestra plataforma te permite recopilar, gestionar y utilizar este contenido de manera efectiva junto con campañas de influencers dominicanos.
          </p>
          <ul className="list-disc list-inside space-y-2 mt-4">
            <li><strong>Credibilidad Mejorada:</strong> Confianza en contenido real.</li>
            <li><strong>Mayor Interacción:</strong> Más participación en redes sociales.</li>
            <li><strong>Eficiencia en Costos:</strong> Menor gasto en producción.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">Creadores de Contenido UGC en República Dominicana</h2>
          <p>
            Conectamos a las marcas con los mejores creadores dominicanos y <strong>influencers dominicanos</strong> para campañas auténticas y efectivas.
          </p>
          <ul className="list-disc list-inside space-y-2 mt-4">
            <li><strong>Perspectiva Local:</strong> Conocimiento de la cultura y tendencias.</li>
            <li><strong>Contenido Relevante:</strong> Diseñado para captar tu audiencia.</li>
            <li><strong>Mayor Impacto:</strong> Más confianza y engagement.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">¿Qué Ofrecemos en Grande?</h2>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Red de Influencers Locales:</strong> Encuentra el talento ideal entre los mejores influencers dominicanos.</li>
            <li><strong>Gestión de Contenido UGC:</strong> Centraliza y organiza todo en un solo lugar.</li>
            <li><strong>Herramientas de Análisis:</strong> Mide y mejora tus campañas.</li>
            <li><strong>Estrategias Personalizadas:</strong> Adaptadas al mercado dominicano.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">Cómo Funciona Nuestra Plataforma</h2>
          <ol className="list-decimal list-inside space-y-2">
            <li><strong>Regístrate:</strong> Accede a nuestras herramientas.</li>
            <li><strong>Encuentra Talento:</strong> Filtra por necesidades específicas entre influencers dominicanos y creadores UGC.</li>
            <li><strong>Diseña tu Campaña:</strong> Colabora con expertos.</li>
            <li><strong>Analiza y Mejora:</strong> Optimiza con reportes en tiempo real.</li>
          </ol>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">¿Por Qué Elegir Grande en República Dominicana?</h2>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Plataforma Todo en Uno:</strong> Influencers dominicanos y UGC en un solo lugar.</li>
            <li><strong>Enfoque Local:</strong> Estrategias personalizadas para RD.</li>
            <li><strong>Resultados Reales:</strong> Alcanzamos tus objetivos contigo.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">Únete a Grande Hoy</h2>
          <p>
            Lleva tus campañas al siguiente nivel. Ya sea con <strong>influencers republica Dominicana</strong> o contenido UGC, tenemos la tecnología y experiencia que necesitas.
          </p>
          <div className="mt-4">
            <Link
              href="/"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition"
            >
              Regístrate Ahora
            </Link>
          </div>
        </section>
      </article>
    </main>
  );
}
