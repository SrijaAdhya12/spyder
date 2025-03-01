
const Navbar = () => {
  return (
      <div className="flex items-center px-14 py-4 sticky top-0 z-50  backdrop-blur-md border-b border-neutral-700/80">
          <div className="flex space-x-48">
          <span className="text-lg">
              OPT/CI
              </span>
              <div>
              </div>
              <div>
              </div>
          <div className="flex gap-40 text-[16px] opacity-60 items-center">
              <span>Home</span>
              <span>About</span>
              <span>Services</span>
          </div>
          </div>
          <div className="px-60">
              <button className="bg-green-200 text-black font-bold p-3 px-6 rounded-4xl">
                  Analyse Now
              </button>
          </div>
    </div>
  )
}

export default Navbar