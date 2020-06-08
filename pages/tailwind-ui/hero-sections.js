import React from 'react'
import Main from '../../layouts/tailwindui'
import 'twin.macro'

export default () => (
  <Main>
    <div tw="relative bg-white overflow-hidden">
      <div tw="max-w-screen-xl mx-auto">
        <div tw="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <svg
            tw="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>

          <div tw="relative pt-6 px-4 sm:px-6 lg:px-8">
            <nav tw="relative flex items-center justify-between sm:h-10 lg:justify-start">
              <div tw="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                <div tw="flex items-center justify-between w-full md:w-auto">
                  <a href="/">
                    <img
                      tw="h-8 w-auto sm:h-10"
                      src="/static/workflow-mark-on-white.svg"
                      alt=""
                    />
                  </a>
                  <div tw="-mr-2 flex items-center md:hidden">
                    <button
                      type="button"
                      tw="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                    >
                      <svg
                        tw="h-6 w-6"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M4 6h16M4 12h16M4 18h16"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <div tw="hidden md:block md:ml-10 md:pr-4">
                <a
                  href="/"
                  tw="font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition duration-150 ease-in-out"
                >
                  Product
                </a>
                <a
                  href="/"
                  tw="ml-8 font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition duration-150 ease-in-out"
                >
                  Features
                </a>
                <a
                  href="/"
                  tw="ml-8 font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition duration-150 ease-in-out"
                >
                  Marketplace
                </a>
                <a
                  href="/"
                  tw="ml-8 font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition duration-150 ease-in-out"
                >
                  Company
                </a>
                <a
                  href="/"
                  tw="ml-8 font-medium text-indigo-600 hover:text-indigo-900 focus:outline-none focus:text-indigo-700 transition duration-150 ease-in-out"
                >
                  Log in
                </a>
              </div>
            </nav>
          </div>

          {/* <!--
        Mobile menu, show/hide based on menu open state.

        Entering: "duration-150 ease-out"
          From: "opacity-0 scale-95"
          To: "opacity-100 scale-100"
        Leaving: "duration-100 ease-in"
          From: "opacity-100 scale-100"
          To: "opacity-0 scale-95"
      --> */}
          <div tw="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
            <div tw="rounded-lg shadow-md">
              <div tw="rounded-lg bg-white shadow-xs overflow-hidden">
                <div tw="px-5 pt-4 flex items-center justify-between">
                  <div>
                    <img
                      tw="h-8 w-auto"
                      src="/static/img/logos/workflow-mark-on-white.svg"
                      alt=""
                    />
                  </div>
                  <div tw="-mr-2">
                    <button
                      type="button"
                      tw="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                    >
                      <svg
                        tw="h-6 w-6"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <div tw="px-2 pt-2 pb-3">
                  <a
                    href="/"
                    tw="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out"
                  >
                    Product
                  </a>
                  <a
                    href="/"
                    tw="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out"
                  >
                    Features
                  </a>
                  <a
                    href="/"
                    tw="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out"
                  >
                    Marketplace
                  </a>
                  <a
                    href="/"
                    tw="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out"
                  >
                    Company
                  </a>
                </div>
                <div>
                  <a
                    href="/"
                    tw="block w-full px-5 py-3 text-center font-medium text-indigo-600 bg-gray-50 hover:bg-gray-100 hover:text-indigo-700 focus:outline-none focus:bg-gray-100 focus:text-indigo-700 transition duration-150 ease-in-out"
                  >
                    Log in
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div tw="mt-10 mx-auto max-w-screen-xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div tw="sm:text-center lg:text-left">
              <h2 tw="text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl">
                Data to enrich your
                <br tw="xl:hidden" />{' '}
                <span tw="text-indigo-600">online business</span>
              </h2>
              <p tw="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
                lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
                fugiat aliqua.
              </p>
              <div tw="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div tw="rounded-md shadow">
                  <a
                    href="/"
                    tw="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10"
                  >
                    Get started
                  </a>
                </div>
                <div tw="mt-3 sm:mt-0 sm:ml-3">
                  <a
                    href="/"
                    tw="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-indigo-700 bg-indigo-100 hover:text-indigo-600 hover:bg-indigo-50 focus:outline-none focus:shadow-outline focus:border-indigo-300 transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10"
                  >
                    Live demo
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div tw="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          tw="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
          src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
          alt=""
        />
      </div>
    </div>
  </Main>
)
