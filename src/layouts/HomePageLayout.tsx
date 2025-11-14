import Footer from "../components/Footer";
import Header from "../components/Header";

function HomePageLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <div className="min-h-screen w-full relative">
        {/* Azure Depths */}
        <div
          className="fixed inset-0 -z-1"
          style={{
            background:
              "radial-gradient(125% 125% at 50% 100%, #000000 40%, #010133 100%)",
          }}
        />
        {/* Your Content/Components */}

        <main className="w-full min-h-screen">{children}</main>
      </div>
      <Footer />
    </>
  );
}

export default HomePageLayout;
