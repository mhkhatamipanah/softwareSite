import Link from 'next/link'
 
export default function NotFound() {
  return (
<section className="bg-white ">
    <div className="py-8 px-4 mx-auto h-screen flex justify-center items-center max-w-screen-xl lg:py-16 !pb-52 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center">
            <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-[#644099] ">404</h1>
            <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl font3">Something&apos;s missing.</p>
            <p className="mb-4 text-lg font-light text-gray-500 font3">Sorry, we can&apos;t find that page. You&apos;ll find lots to explore on the home page. </p>
            <Link className="inline-flex text-white bg-[#644099] hover:bg-[#4c2e78] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xl px-5 py-2.5 text-center font1 my-4" href={"/"}>Home</Link>
        </div>   
    </div>
</section>
  )
}