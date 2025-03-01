import { FaGithub } from "react-icons/fa";


const Footer = () => {
  return (
      <div className="text-center">
          <h3 className="text-5xl text-center px-52 py-4  opacity-70">Unlock efficiency with one
              <span className="italic">
                  { } click!
              </span>
          </h3>
          <h5 className="text-md">
              Reduce carbon footprint and streamline development.  Paste your <br/> GitHub repo or connect your account for optimized workflow
          </h5>
          <div className="flex justify-center py-4">
              
          <button className="bg-green-300 rounded-2xl text-black font-bold gap-4 px-4 py-4 border flex items-center">
                                    <FaGithub />
              Connect your GitHub account
          </button>
          </div>
          <h6 className="py-10 opacity-65">© 2025 OPT/CI. All Rights Reserved</h6>
    </div>
  )
}

export default Footer