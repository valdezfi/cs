import Image from "next/image";
import Link from "next/link";

export default function GrandeUYMarketingPage() {
  return (
    <main className="min-h-screen mt-20 bg-white dark:bg-black text-gray-900 dark:text-white">
      <header className="bg-gray-100 dark:bg-zinc-900 py-10 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Grande: Transformando el marketing digital en Uruguay
          </h1>
          <h2 className="text-3xl font-bold text-center text-black dark:text-white mb-8">
            Plataforma de marketing de influencers y UGC en Uruguay – Grande
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            Conecta con tu audiencia en Uruguay mediante campañas auténticas con influencers y contenido generado por usuarios.
          </p>
        </div>
      </header>

      <div className="w-full max-w-5xl mx-auto mt-8 mb-12 px-6">
        <Image
          src="/images/pexels-ramilugot-3217363.jpg"
          alt="Marketing de Influencers y UGC en Uruguay"
          width={1200}
          height={600}
          className="rounded-2xl shadow-lg"
        />
      </div>

      <article className="max-w-4xl mx-auto px-6 space-y-12 pb-20">
        <section>
          <h2 className="text-2xl font-semibold">¿Qué es una plataforma de influencers?</h2>
          <p>
            Una plataforma de influencers facilita la conexión entre marcas e influencers, permitiendo crear campañas personalizadas que resuenen con el público objetivo. En Uruguay, donde las redes sociales tienen un impacto significativo, esta estrategia es esencial para las empresas que buscan destacar.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">Beneficios de una plataforma de influencers</h2>
          <ul className="list-disc list-inside space-y-2 mt-4">
            <li><strong>Conexión directa:</strong> Colabora con influencers uruguayos que entienden la cultura local.</li>
            <li><strong>Mayor visibilidad:</strong> Amplía el alcance de tu marca de manera orgánica y efectiva.</li>
            <li><strong>Resultados tangibles:</strong> Mejora la interacción, el reconocimiento de marca y las conversiones.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">Plataforma UGC: El poder del contenido auténtico</h2>
          <p>
            El contenido generado por usuarios (UGC) se ha convertido en un recurso clave para las marcas. Nuestra plataforma UGC te permite recopilar, organizar y utilizar contenido auténtico creado por tus clientes o seguidores.
          </p>
          <ul className="list-disc list-inside space-y-2 mt-4">
            <li><strong>Credibilidad mejorada:</strong> Los consumidores confían más en experiencias reales compartidas por otros usuarios.</li>
            <li><strong>Mayor compromiso:</strong> Las campañas con UGC generan más interacción en redes sociales.</li>
            <li><strong>Ahorro de recursos:</strong> Reduce costos al aprovechar contenido genuino.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">Creadores de contenido UGC en Uruguay</h2>
          <p>
            En Grande, conectamos a las marcas con los mejores creadores en Uruguay, aportando autenticidad y creatividad a tus campañas.
          </p>
          <ul className="list-disc list-inside space-y-2 mt-4">
            <li><strong>Relación cultural:</strong> Los creadores uruguayos entienden las necesidades y preferencias locales.</li>
            <li><strong>Contenido de calidad:</strong> Diseñado para captar la atención y generar interacción genuina.</li>
            <li><strong>Impacto medible:</strong> Más compromiso y confianza para tu marca.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">¿Qué ofrece Grande?</h2>
          <ul className="list-disc list-inside space-y-2 mt-4">
            <li><strong>Acceso a influencers locales:</strong> Encuentra influencers en Uruguay que se alineen con tus valores.</li>
            <li><strong>Gestión de contenido UGC:</strong> Recopila y utiliza contenido generado por usuarios.</li>
            <li><strong>Herramientas de análisis avanzado:</strong> Mide el impacto de tus campañas en tiempo real.</li>
            <li><strong>Soporte personalizado:</strong> Nuestro equipo te ayuda a diseñar estrategias adaptadas al mercado uruguayo.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">Cómo funciona nuestra plataforma</h2>
          <ol className="list-decimal list-inside space-y-2 mt-4">
            <li><strong>Regístrate:</strong> Únete a la red de Grande en Uruguay.</li>
            <li><strong>Encuentra el talento ideal:</strong> Filtra por nicho, alcance y métricas clave.</li>
            <li><strong>Diseña tu campaña:</strong> Colabora con nuestro equipo para maximizar el impacto.</li>
            <li><strong>Mide y optimiza:</strong> Analiza resultados y ajusta tu estrategia para mejorar el ROI.</li>
          </ol>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">¿Por qué elegir Grande en Uruguay?</h2>
          <ul className="list-disc list-inside space-y-2 mt-4">
            <li><strong>Todo en uno:</strong> Influencers y UGC en una sola plataforma.</li>
            <li><strong>Conocimiento local:</strong> Estrategias personalizadas para el mercado uruguayo.</li>
            <li><strong>Resultados garantizados:</strong> Ayudamos a las marcas a alcanzar sus objetivos comerciales.</li>
          </ul>
        </section>

        <section className="text-center">
          <h2 className="text-2xl font-semibold mb-4">Únete a Grande hoy</h2>
          <p className="mb-6">
            No esperes más para transformar tu estrategia de marketing en Uruguay. Con Grande, puedes conectar con tu audiencia y obtener resultados medibles.
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
