import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="bg-brand-secondary min-h-[90vh] flex items-center">
      <div className="container mx-auto px-6 grid  md:grid-cols-2 gap-10 items-center">
        
        {/* Left Content */}
        <div className="order-2 md:order-1">
          <h1 className="text-4xl md:text-5xl font-bold text-brand-primary leading-tight">
            Premium Jubbah Collection 2026
          </h1>

          <p className="mt-4 text-gray-700 text-lg">
            Elegant & Modest Wear for Kids and Men.
            Crafted with comfort, tradition & modern style.
          </p>

          <div className="mt-6 flex gap-4">
            <Link to="/collection" className="bg-brand-primary text-white px-6 py-3 rounded-md hover:bg-brand-accent transition">
              Shop Kids
            </Link>

            <Link to="/collection" className="border-2 border-brand-accent text-brand-accent px-6 py-3 rounded-md hover:bg-brand-accent hover:text-white transition">
              Shop Men
            </Link>
          </div>
        </div>

        {/* Right Images */}
        <div className="relative flex justify-center order-1 md:order-2 items-center ">
          <img 
            src="./src/assets/hero8.png" 
            alt="Kids Jubbah"
            className="w-[80vw] md:w-[50vw] object-contain"
          />
          {/* <img 
            src="./src/assets/men.png" 
            alt="Men Jubbah"
            className="w-48 md:w-full"
          /> */}
        </div>

      </div>
    </section>
  )
}