export default function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1 md:pb-8">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
