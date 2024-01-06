import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between p-25 ">
      <div className="flex flex-col items-center min-h-[calc(100vh-44px)] justify-center">
      <picture>
        {/* <source srcSet="/steliologov1sd.svg" media="(prefers-color-scheme: dark)" /> */}
        <Image
            src="/steliologov1s.svg"
            alt="Stelio Logo"
            width={250}
            height={100}
        />
      </picture>
        <h1 className="text-3xl tracking-tight max-w-3xl font-regular mb-4 mt-10">
        Coming soon.
        </h1>
      </div>
      <section className="w-screen bg-white py-10 mt-10">
                <h2 className="text-3xl font-semibold text-center">Solutions</h2>
                <p className="text-center mt-4 mb-52">Sections will be added for staging.</p>
            </section>  
            <footer className="text-gray-500 py-4 px-6 text-sm">
                <p className="text-xs mb-5">1. Statistics may not be accurate.</p>
                <p className="text-xs mb-5">2. Stelio is only available for customers in the United States. More countries coming soon.</p>
                <p className="text-xs mb-0">3. Sign in is required to get started.</p>
            </footer> 
    </main>
  )
}
