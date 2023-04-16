export default function Example() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="p-9 text-3xl font-bold tracking-tight text-gray-900">
            PlasmaTech
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            PlasmaTech is a new company located in Mosselbay that specializes in
            high-precision plasma cutting. They have a state-of-the-art plasma
            cutting machine that can cut through any metal quickly and
            accurately. The plasma cutting machine can cut through steel,
            aluminum, stainless steel, brass, and other metals with ease. Their
            highly trained technicians are skilled in using the latest
            technology and techniques to ensure the highest quality results.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 text-base leading-7 sm:grid-cols-2 sm:gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-4">
          <div>
            <h3 className="border-l border-indigo-600 pl-6 font-semibold text-gray-900">
              Location
            </h3>
            <address className="border-l border-gray-200 pl-6 pt-2 not-italic text-gray-600">
              <p>Mosselbay , Voorbaai</p>
              <p>Unit2 , 14 Bolton Road</p>
            </address>
          </div>
          <div>
            <h3 className="border-l border-indigo-600 pl-6 font-semibold text-gray-900">
              Contact
            </h3>
            <address className="border-l border-gray-200 pl-6 pt-2 not-italic text-gray-600">
              <p>Nicky</p>
              <p>076 824 8378</p>
            </address>
          </div>
          <div>
            <h3 className="border-l border-indigo-600 pl-6 font-semibold text-gray-900">
              E-Mail
            </h3>
            <address className="border-l border-gray-200 pl-6 pt-2 not-italic text-gray-600">
              <p>Nickyvn123@gmail.com</p>
            </address>
          </div>
        </div>
      </div>
    </div>
  );
}
