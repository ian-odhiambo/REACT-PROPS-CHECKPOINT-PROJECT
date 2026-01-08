import {Link} from "react-router-dom"

const ViewAllPlayers = () => {
  return (
    <section className="m-auto max-w-lg my-10 px-6">
        <Link
          to="/products"
          className="block bg-amber-600 text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700 text-bold text-sm sm:text-base"
        >
          View All Players
        </Link>
      </section>
  )
}

export default ViewAllPlayers