import {
  Navbar,
  Hero,
  StackSection,
  ProductBody,
  Footer,
} from "@/components/landing";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-brand-bg">
      <Navbar />
      <main>
        <Hero />
        <StackSection />
        <ProductBody />
      </main>
      <Footer />
    </div>
  );
}
