import { type NextPage } from "next";
import Head from "next/head";

import Image from "next/image";
import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

declare module "*.jpg";
declare module "*.png";

const navigation = [{ name: "Contacts", href: "/contacts" }];

const Home: NextPage = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <>
      <Head>
        <title>PlasmaTech</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-gray-900">
        <div className="w-full "></div>

        <header className="absolute inset-x-0 top-0 z-50">
          <nav
            className="flex items-center justify-between p-6 lg:px-8"
            aria-label="Global"
          >
            <div className="flex lg:flex-1">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">PlasmaTech</span>
              </a>
            </div>
            <div className="flex lg:hidden">
              <button
                type="button"
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400"
                onClick={() => setMobileMenuOpen(true)}
              >
                <span className="sr-only">Open main menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="hidden lg:flex lg:gap-x-12">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-sm font-semibold leading-6 text-white"
                >
                  {item.name}
                </a>
              ))}
            </div>
            <div className="hidden lg:flex lg:flex-1 lg:justify-end">
              {/* <a
                href="#"
                className="text-sm font-semibold leading-6 text-white"
              >
                Log in <span aria-hidden="true">&rarr;</span>
              </a> */}
            </div>
          </nav>
          <Dialog
            as="div"
            className="lg:hidden"
            open={mobileMenuOpen}
            onClose={setMobileMenuOpen}
          >
            <div className="fixed inset-0 z-50" />
            <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white/10">
              <div className="flex items-center justify-between">
                <a href="#" className="-m-1.5 p-1.5">
                  <span className="sr-only">voorbaai cutting</span>
                </a>
                <button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-gray-400"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/25">
                  <div className="space-y-2 py-6">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-800"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                  <div className="py-6">
                    {/* <a
                      href="#"
                      className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white hover:bg-gray-800"
                    >
                      Log in
                    </a> */}
                  </div>
                </div>
              </div>
            </Dialog.Panel>
          </Dialog>
        </header>
        <div className="relative isolate overflow-hidden pt-14">
          <Image
            src="/assets/images/plasma.jpg"
            width={800 * 4}
            height={600 * 4}
            alt={""}
            className="absolute inset-0 -z-10 h-full w-full object-cover"
          />

          <div className="mx-auto max-w-2xl py-32 sm:py-52 lg:py-56 ">
            <div className="p-4 text-center">
              <h1 className="p-5 text-4xl font-bold tracking-tight text-white sm:text-6xl">
                PlasmaTech Mosselbay
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto flex max-w-none flex-col place-items-center lg:mx-0">
          <p className="text-center text-base font-semibold leading-7 text-indigo-600">
            Get your plasma cutout today
          </p>
          <h2 className="mt-2 text-center text-4xl font-bold tracking-tight text-gray-600 sm:text-5xl">
            Contact us
          </h2>
          <div className="p-5">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="h-10 border-spacing-6 self-center rounded-md border-2 bg-sky-500 px-6 text-xl font-bold text-white shadow-md hover:bg-sky-700"
              >
                {item.name}
              </a>
            ))}
          </div>

          <h2 className="mt-2 p-5 text-center text-2xl font-bold tracking-tight text-gray-600 sm:text-5xl">
            Projects we have done
          </h2>
        </div>
        <div className="flex flex-col">
          <div className="mt-6 grid w-5/6 grid-cols-2 gap-x-4 gap-y-10 self-center rounded-md bg-slate-100 p-9 shadow-xl sm:gap-x-6 md:grid-cols-4 md:gap-y-2 lg:gap-x-8">
            <div className="h-56 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-72 xl:h-80">
              <Image
                src="/assets/images/cut1.jpg"
                width={800 * 4}
                height={600 * 4}
                alt={""}
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="h-56 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-72 xl:h-80">
              <Image
                src="/assets/images/cut2.jpg"
                width={800 * 4}
                height={600 * 4}
                alt={""}
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="h-56 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-72 xl:h-80">
              <Image
                src="/assets/images/cut3.jpg"
                width={800 * 4}
                height={600 * 4}
                alt={""}
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="h-56 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-72 xl:h-80">
              <Image
                src="/assets/images/cut4.jpg"
                width={800 * 4}
                height={600 * 4}
                alt={""}
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="h-56 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-72 xl:h-80">
              <Image
                src="/assets/images/cut5.jpg"
                width={800 * 4}
                height={600 * 4}
                alt={""}
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="h-56 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-72 xl:h-80">
              <Image
                src="/assets/images/cut6.jpg"
                width={800 * 4}
                height={600 * 4}
                alt={""}
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="h-56 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-72 xl:h-80">
              <Image
                src="/assets/images/cut7.jpg"
                width={800 * 4}
                height={600 * 4}
                alt={""}
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="h-56 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-72 xl:h-80">
              <Image
                src="/assets/images/cut8.jpg"
                width={800 * 4}
                height={600 * 4}
                alt={""}
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="h-56 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-72 xl:h-80">
              <Image
                src="/assets/images/cut9.jpg"
                width={800 * 4}
                height={600 * 4}
                alt={""}
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="h-56 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-72 xl:h-80">
              <Image
                src="/assets/images/cut10.jpg"
                width={800 * 4}
                height={600 * 4}
                alt={""}
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="h-56 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-72 xl:h-80">
              <Image
                src="/assets/images/cut11.jpg"
                width={800 * 4}
                height={600 * 4}
                alt={""}
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="h-56 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-72 xl:h-80">
              <Image
                src="/assets/images/cut12.jpg"
                width={800 * 4}
                height={600 * 4}
                alt={""}
                className="h-full w-full object-cover object-center"
              />
            </div>
          </div>
        </div>
        <footer className="bg-gray-900" aria-labelledby="footer-heading">
          <h2 id="footer-heading" className="sr-only">
            Footer
          </h2>
          <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
            <div className="xl:grid xl:grid-cols-3 xl:gap-8">
              <div className="space-y-8">
                <div className="text-xl font-bold text-white">PlasmaTech</div>
                <p className="text-sm leading-6 text-gray-300">
                  Located in mosselbay,voorbaai Unit2 14 Bolton Road
                </p>
                <div className="flex space-x-6"></div>
              </div>
              <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="max-h-8 rounded-xl border-2 border-white text-center text-sm font-semibold leading-6 text-white hover:bg-gray-700"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
            <div className="mt-16 border-t border-white pt-8 sm:mt-20 lg:mt-24">
              <p className="text-xs leading-5 text-gray-400">
                &copy; 2023 PlasmaTech Mosselbay, Inc. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Home;
