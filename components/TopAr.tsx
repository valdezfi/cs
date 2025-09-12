import Link from "next/link";

import DestacadosCreadores from "components/ShowCreatorSpanish"; // adjust the path based on your folder structure


export default function GrandeARMarketingPage() {
  return (
    <main className="min-h-screen mt-20 bg-white dark:bg-black text-gray-900 dark:text-white">
      <header className="bg-gray-100 dark:bg-zinc-900 py-10 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Grande: La Plataforma de Influencers en Argentina 🚀
          </h1>
          <h2 className="text-3xl font-bold text-center text-black dark:text-white mb-8">
            Marketing de Influencers, Podcast y UGC en Argentina
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            Impulsa tu marca con{" "}
            <strong>influencers en Argentina</strong> y descubre cómo incluso
            temas de tendencia como{" "}
            <em>shein shipping argentina</em> pueden integrarse en campañas
            virales. Nuestro enfoque une marcas, creadores y audiencias.
          </p>
        </div>
      </header>

      <div className="w-full max-w-5xl mx-auto mt-8 mb-12 px-6">
           <DestacadosCreadores/>

      </div>

      <article className="max-w-4xl mx-auto px-6 space-y-12 pb-20">
        <section>
          <h2 className="text-2xl font-semibold">
            ¿Qué es el Marketing de Influencers en Argentina?
          </h2>
          <p>
            Es una estrategia en la que marcas colaboran con{" "}
            <strong>influencers en Argentina</strong> para promocionar productos
            o servicios. En un mercado digital activo, este tipo de marketing
            permite conectar auténticamente con la audiencia local.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">
            Beneficios del Marketing de Influencers en Argentina
          </h2>
          <ul className="list-disc list-inside space-y-2 mt-4">
            <li>
              <strong>Alcance Amplio:</strong> Accede a nuevas audiencias gracias
              a los seguidores de los influencers.
            </li>
            <li>
              <strong>Contenido Auténtico:</strong> Los creadores generan
              contenido que resuena con su comunidad.
            </li>
            <li>
              <strong>Mayor Interacción:</strong> Mejores tasas de participación
              que los métodos publicitarios tradicionales.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">
            ¿Por Qué Elegir Grande en Argentina?
          </h2>
          <ul className="list-disc list-inside space-y-2 mt-4">
            <li>
              <strong>Búsqueda Eficiente:</strong> Encuentra{" "}
              <em>influencers en Argentina</em> ideales con filtros por nicho,
              audiencia y métricas.
            </li>
            <li>
              <strong>Gestión Simplificada:</strong> Todo el flujo, desde
              selección hasta publicación, en un solo lugar.
            </li>
            <li>
              <strong>Análisis en Tiempo Real:</strong> Mide resultados y
              mejora campañas fácilmente.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">Cómo Funciona Grande</h2>
          <ol className="list-decimal list-inside space-y-2 mt-4">
            <li>
              <strong>Regístrate:</strong> Accede a todas las funcionalidades.
            </li>
            <li>
              <strong>Busca Influencers:</strong> Filtra por tipo de audiencia,
              engagement y nicho.
            </li>
            <li>
              <strong>Lanza tu Campaña:</strong> Conecta con{" "}
              <strong>influencers argentinos</strong> y logra impacto real.
            </li>
            <li>
              <strong>Analiza Resultados:</strong> Usa métricas en tiempo real
              para optimizar.
            </li>
          </ol>
        </section>

        <section className="text-center">
          <h2 className="text-2xl font-semibold mb-4">
            ¿Listo para Colaborar con Influencers en Argentina?
          </h2>
          <p className="mb-6">
            Empieza hoy en Grande y lleva tu estrategia de marketing con
            influencers, UGC y hasta tendencias como{" "}
            <em>shein shipping argentina</em> al siguiente nivel.
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
