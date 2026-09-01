import {
  Navbar,
  Hero,
  StackSection,
  LinearBody,
  Footer,
} from "@/components/landing";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-linear-bg">
      <Navbar />
      <main>
        <Hero />
        <StackSection />
        <LinearBody />
      </main>
      <Footer />
    </div>
  );
}
