function Footer() {
  return (
    <footer className="bg-black text-white py-10 mt-20">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-3 gap-10">

          {/* Logo */}
          <div>
            <h1 className="text-2xl font-bold text-orange-500">
              Jam Raval
            </h1>

            <p className="text-gray-400 mt-3">
              Smart Village Digital Portal
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-xl font-semibold mb-4">
              Quick Links
            </h2>

            <ul className="space-y-2 text-gray-400">
              <li><a href="#home">Home</a></li>
              <li><a href="#tourism">Tourism</a></li>
              <li><a href="#transport">Transport</a></li>
              <li><a href="#events">Events</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h2 className="text-xl font-semibold mb-4">
              Contact
            </h2>

            <p className="text-gray-400">
              Jam Raval, Gujarat
            </p>

            <p className="text-gray-400 mt-2">
              support@jamraval.com
            </p>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 mt-10 pt-5 text-center text-gray-500">
          © 2025 Jam Raval Digital Portal
        </div>

      </div>
    </footer>
  )
}

export default Footer