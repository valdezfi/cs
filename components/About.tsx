import Head from "next/head";
import Link from "next/link";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white">
      <Head>
        <title>About Us | Cofuncion</title>
        <meta
          name="description"
          content="Cofuncion is an intelligent cannabis waste compliance platform helping dispensaries, cultivators, and operators stay audit-ready and fully compliant."
        />
        <meta
          name="keywords"
          content="cannabis waste management, cannabis compliance software, cannabis waste pickup, dispensary compliance, cannabis operators"
        />
      </Head>

      <main className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-10 text-center">
            About Cofuncion
          </h1>

          <section className="space-y-10 text-lg leading-relaxed">
            <p className="text-center font-semibold text-xl text-green-700 dark:text-green-400">
              Intelligent Infrastructure for Cannabis Waste & Compliance
            </p>

            {/* Introduction */}
            <section>
              <h2 className="text-2xl font-semibold mb-3">Who We Are</h2>
              <p>
                Cofuncion is an intelligent cannabis waste compliance platform built
                for dispensaries, cultivators, processors, and operators navigating
                complex regulatory environments.
              </p>
              <p className="mt-3">
                We simplify cannabis waste operations by combining scheduling,
                documentation, compliance tracking, and licensed hauler coordination
                into a single, audit-ready system.
              </p>
            </section>

            {/* The Problem */}
            <section>
              <h2 className="text-2xl font-semibold mb-3">The Problem We Solve</h2>
              <p>
                Cannabis waste management is highly regulated, operationally complex,
                and often fragmented across spreadsheets, emails, and manual logs.
                This creates unnecessary risk, inefficiency, and audit exposure.
              </p>
              <p className="mt-3">
                Cofuncion replaces fragmented workflows with a centralized platform
                that ensures every pickup, manifest, and destruction event is tracked,
                documented, and compliant.
              </p>
            </section>

            {/* Mission */}
            <section>
              <h2 className="text-2xl font-semibold mb-3">Our Mission</h2>
              <p>
                Our mission is to make cannabis waste compliance simple, transparent,
                and scalable—so operators can focus on running their business while
                staying fully audit-ready.
              </p>
            </section>

            {/* Values */}
            <section>
              <h2 className="text-2xl font-semibold mb-3">Our Values</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  <strong>Compliance First:</strong> Built for regulated industries from day one.
                </li>
                <li>
                  <strong>Operational Clarity:</strong> Replace chaos with structured workflows.
                </li>
                <li>
                  <strong>Automation:</strong> Reduce human error through intelligent systems.
                </li>
                <li>
                  <strong>Trust:</strong> Transparent data, audit-ready reporting, and accountability.
                </li>
              </ul>
            </section>

            {/* Why Cofuncion */}
            <section>
              <h2 className="text-2xl font-semibold mb-3">Why Cofuncion</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  <strong>Audit-Ready by Default:</strong> Manifests, logs, and reports always accessible.
                </li>
                <li>
                  <strong>Licensed Hauler Network:</strong> Connect with verified waste partners.
                </li>
                <li>
                  <strong>Multi-Facility Support:</strong> Built for operators managing multiple sites.
                </li>
                <li>
                  <strong>AI-Driven Insights:</strong> Optimize scheduling, routes, and compliance.
                </li>
              </ul>
            </section>

            {/* Team */}
            <section>
              <h2 className="text-2xl font-semibold mb-3">Our Team</h2>
              <p>
                Cofuncion is built by operators, technologists, and compliance-focused
                professionals who understand the realities of running cannabis
                businesses in regulated markets.
              </p>
            </section>

            {/* CTA */}
            <section>
              <h2 className="text-2xl font-semibold mb-3">
                Building the Future of Cannabis Operations
              </h2>
              <p>
                Whether you’re operating a single dispensary or managing a multi-state
                operation, Cofuncion provides the infrastructure you need to stay
                compliant, efficient, and scalable.
              </p>
            </section>

            {/* Contact */}
            <section>
              <h2 className="text-2xl font-semibold mb-3">Contact Us</h2>
              <p>
                Email:{" "}
                <a
                  href="mailto:info@cofuncion.com"
                  className="text-green-600 hover:underline"
                >
                  info@cofuncion.com
                </a>
              </p>
              <p>
                Website:{" "}
                <Link
                  href="https://cofuncion.com"
                  className="text-green-600 hover:underline"
                >
                  cofuncion.com
                </Link>
              </p>
            </section>
          </section>
        </div>
      </main>
    </div>
  );
};

export default AboutUs;

