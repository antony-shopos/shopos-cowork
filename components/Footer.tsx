export default function Footer() {
  const footerLinks = {
    Products: ["Use Cases", "Spaces", "Loops", "Refine", "Files", "Brand Memory", "Cowork"],
    Resources: ["Case Studies", "In the Press", "Careers Hiring", "Context Graph", "D2C Brand Fund"],
    About: ["About Us", "SHOPOS", "Try Now ™"]
  }

  return (
    <footer className="bg-black text-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div>
            <div className="text-3xl font-display font-bold mb-4">SHOPOS</div>
            <p className="text-gray-400 text-sm leading-relaxed">
              ShopOS is an AI-native operating system designed for modern ecommerce & fast-growing DTC brands.
            </p>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-display font-bold mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map((link, index) => (
                  <li key={index}>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto text-center py-12 border-t border-gray-800">
          <h3 className="text-3xl md:text-4xl font-display font-bold mb-6">
            Ready to sell like the big boys?
          </h3>
          <p className="text-xl text-gray-400 mb-8">
            Your brand gets smarter every day, sounds like you and has agents working 24/7.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <button className="px-8 py-4 bg-white text-black font-medium rounded-full hover:bg-gray-100 transition-all flex items-center gap-2">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701"/>
              </svg>
              Download for Mac OS
            </button>
            <button className="px-8 py-4 border-2 border-white text-white font-medium rounded-full hover:bg-white hover:text-black transition-all">
              Read research
            </button>
          </div>

          <div className="text-sm text-gray-500">
            ShopOS © 2026. Built with AI & Humans, together.
          </div>
        </div>

        <div className="text-center pt-8 border-t border-gray-800">
          <button className="text-sm text-gray-500 hover:text-gray-300 transition-colors">
            Request an AI summary of ShopOS →
          </button>
        </div>
      </div>
    </footer>
  )
}
