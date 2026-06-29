export default function Navbar() {
  return (
    <nav className="bg-[#8CC0EB] px-8 py-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        
        {/* Logo */}
        <div className="flex items-center gap-3">
          <span className="font-bold border-2 border-black px-2 py-1 rounded-md">
            CR
          </span>

          <h1 className="text-2xl font-bold">
            Car Rental
          </h1>
        </div>

        {/* Navigation */}
        <div className="flex gap-8 text-lg font-medium">
          <a href="#" className="hover:underline">
            Browse Cars
          </a>

          <a href="#" className="hover:underline">
            My Bookings
          </a>

          <a href="#" className="hover:underline">
            Admin
          </a>
        </div>

      </div>
    </nav>
  );
}