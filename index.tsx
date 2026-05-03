import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { Services } from "@/components/site/Services";
import { Why } from "@/components/site/Why";
import { Process } from "@/components/site/Process";
import { Reviews } from "@/components/site/Reviews";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Glenn Garrett & Son Roofing — Inman, SC | 5★ Roofing Contractor" },
      { name: "description", content: "Family-owned roofing contractor in Inman, SC. Roof installation, repair & storm damage. Free estimates, honest prices, 5-star service." },
      { property: "og:title", content: "Glenn Garrett & Son Roofing — Inman, SC" },
      { property: "og:description", content: "5-star, family-owned roofing in Inman, SC. Free estimates and honest pricing." },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;1,9..144,400&family=Inter:wght@400;500;600&display=swap" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="bg-background text-foreground overflow-x-clip">
      <Nav />
      <Hero />
      <Services />
      <Why />
      <Process />
      <Reviews />
      <Contact />
      <Footer />
    </main>
  );
}
