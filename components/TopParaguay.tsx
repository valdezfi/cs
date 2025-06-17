import Image from "next/image";
import Link from "next/link";

export default function GrandePYMarketingPage() {
  return (
    <main className="min-h-screen mt-20 bg-white dark:bg-black text-gray-900 dark:text-white">
      <header className="bg-gray-100 dark:bg-zinc-900 py-10 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Grande: La Plataforma Líder de Marketing de Influencers en Paraguay
          </h1>
          <h2 className="text-3xl font-bold text-center text-black dark:text-white mb-8">
            Impulsa tu marca con Influencers, Podcasts y Contenido UGC en Paraguay
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            Conecta con tu audiencia en Paraguay a través de campañas auténticas con creadores locales, microinfluencers y contenido generado por usuarios.
          </p>
        </div>
      </header>

      <div className="w-full max-w-5xl mx-auto mt-8 mb-12 px-6">
        <Image
          src="/images/pexels-ramilugot-3217363.jpg"
          alt="Marketing de Influencers y UGC en Paraguay"
          width={1200}
          height={600}
          className="rounded-2xl shadow-lg"
        />
      </div>

      <article className="max-w-4xl mx-auto px-6 space-y-12 pb-20">
        <section>
          <h2 className="text-2xl font-semibold">¿Qué es el Marketing de Influencers?</h2>
          <p>
            Es una estrategia en la que marcas colaboran con creadores digitales para promocionar productos o servicios. En Paraguay, donde las redes sociales son un canal clave de comunicación, este enfoque permite generar conexiones auténticas con el consumidor local.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">Beneficios del Marketing de Influencers en Paraguay</h2>
          <ul className="list-disc list-inside space-y-2 mt-4">
            <li><strong>Conexión Local:</strong> Llegá a audiencias paraguayas con contenido relevante y cercano.</li>
            <li><strong>Contenido Auténtico:</strong> Creados por personas reales que tu público ya sigue y en quienes confía.</li>
            <li><strong>Interacción Real:</strong> Mejores tasas de engagement que los métodos tradicionales.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">¿Por Qué Elegir Grande?</h2>
          <ul className="list-disc list-inside space-y-2 mt-4">
            <li><strong>Segmentación Inteligente:</strong> Encontrá influencers en Paraguay por ciudad, audiencia y nicho.</li>
            <li><strong>Gestión Ágil:</strong> Desde la búsqueda hasta la ejecución, todo en una sola plataforma.</li>
            <li><strong>Resultados Medibles:</strong> Métricas en tiempo real para optimizar tu inversión.</li>
            <li><strong>Planes Accesibles:</strong> Ideal para emprendimientos, pymes y grandes marcas locales.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">UGC: Contenido que Conecta</h2>
          <p>
            El contenido generado por usuarios (UGC) es una herramienta poderosa para aumentar la credibilidad y humanizar tu marca. En Grande podés gestionarlo de manera efectiva y convertirlo en parte de tu estrategia digital.
          </p>
          <ul className="list-disc list-inside space-y-2 mt-4">
            <li><strong>Más Realismo:</strong> Usuarios paraguayos usando y recomendando tus productos.</li>
            <li><strong>Engagement Natural:</strong> Genera conversaciones genuinas.</li>
            <li><strong>Optimización de Costos:</strong> Sin necesidad de grandes producciones.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">Microinfluencers y Creadores UGC en Paraguay</h2>
          <p>
            Conectá con microinfluencers que tienen comunidades activas y segmentadas. Ideal para campañas en ciudades como Asunción, Ciudad del Este o Encarnación.
          </p>
          <ul className="list-disc list-inside space-y-2 mt-4">
            <li><strong>Alta Conexión:</strong> Públicos más comprometidos que con influencers de gran escala.</li>
            <li><strong>Audiencia de Nicho:</strong> Perfecto para productos o servicios locales.</li>
            <li><strong>Gran Retorno:</strong> Mejor relación inversión/resultado.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">Cómo Funciona Grande</h2>
          <ol className="list-decimal list-inside space-y-2 mt-4">
            <li><strong>Registro:</strong> Accedé a todas las funcionalidades.</li>
            <li><strong>Búsqueda de Creadores:</strong> Usá filtros por ciudad, nicho y métricas.</li>
            <li><strong>Lanzá tu Campaña:</strong> Colaborá con creadores alineados a tu marca.</li>
            <li><strong>Analizá Resultados:</strong> Optimizá tus campañas en tiempo real.</li>
          </ol>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">Grande en Paraguay: Una Solución Completa</h2>
          <ul className="list-disc list-inside space-y-2 mt-4">
            <li><strong>Todo en Uno:</strong> Influencers, UGC, y podcasting local en una sola plataforma.</li>
            <li><strong>Soporte Local:</strong> Nuestro equipo conoce el mercado paraguayo.</li>
            <li><strong>Experiencia Comprobada:</strong> Campañas exitosas en todo el país.</li>
          </ul>
        </section>

        <section className="text-center">
          <h2 className="text-2xl font-semibold mb-4">¿Listo para Impulsar tu Marca en Paraguay?</h2>
          <p className="mb-6">
            Empezá hoy con Grande y llevá tu estrategia de marketing digital al siguiente nivel.
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
