import  Oops  from "../assets/images/Oops.jpg";
import {Link} from "react-router-dom";

export const PageNotFound = () => {
  return (
    <main>
      <section className="flex flex-col justyfy-center px-2">
        <div className="flex flex-col items-center my-4">
          <p className="text-7xl text-red-600 font-bold my-10 dark:text-green-600">404 Ooops...</p>
          <div className="max-w-xs">
          <img className="rounded" src={Oops} alt="Page Not Found" />
          </div>
        </div>
        <div className="flex justify-center my-6">
          <Link  to="/" >
        <button type="button" className="focus:outline-none text-blck bg-green-400 hover:bg-green-500 focus:ring-4 focus:ring-green-600 font-medium rounded-lg text-lg px-5 py-2.5 mr-2 mb-2 dark:focus:ring-green-900">Back To Home</button>
        </Link>
        </div>
      </section>
    </main>
  )
}


