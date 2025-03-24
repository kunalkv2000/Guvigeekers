import React from 'react'

export default function Footer() {
  return (
    <footer class="bg-black text-white pt-12 pb-6">
      <div class="container mx-auto px-4">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
              <div>
                  <h4 class="text-lg font-bold mb-4">Alcohol advice</h4>
                  <ul class="space-y-2">
                      <li><a href="#" class="text-gray-300 hover:text-white">Alcohol facts</a></li>
                      <li><a href="#" class="text-gray-300 hover:text-white">Health effects</a></li>
                      <li><a href="#" class="text-gray-300 hover:text-white">Low risk drinking</a></li>
                      <li><a href="#" class="text-gray-300 hover:text-white">Cutting down</a></li>
                      <li><a href="#" class="text-gray-300 hover:text-white">Alcohol and relationships</a></li>
                  </ul>
              </div>
              
              <div>
                  <h4 class="text-lg font-bold mb-4">Support services</h4>
                  <ul class="space-y-2">
                      <li><a href="#" class="text-gray-300 hover:text-white">Drinkline</a></li>
                      <li><a href="#" class="text-gray-300 hover:text-white">Drinkcoach</a></li>
                      <li><a href="#" class="text-gray-300 hover:text-white">Find local support</a></li>
                      <li><a href="#" class="text-gray-300 hover:text-white">Alcohol treatment</a></li>
                      <li><a href="#" class="text-gray-300 hover:text-white">Support for families</a></li>
                  </ul>
              </div>
              
              <div>
                  <h4 class="text-lg font-bold mb-4">Tools & resources</h4>
                  <ul class="space-y-2">
                      <li><a href="#" class="text-gray-300 hover:text-white">Unit calculator</a></li>
                      <li><a href="#" class="text-gray-300 hover:text-white">Drink compare</a></li>
                      <li><a href="#" class="text-gray-300 hover:text-white">Drink free days app</a></li>
                      <li><a href="#" class="text-gray-300 hover:text-white">Self assessment</a></li>
                      <li><a href="#" class="text-gray-300 hover:text-white">Resources for professionals</a></li>
                  </ul>
              </div>
              
              <div>
                  <h4 class="text-lg font-bold mb-4">About Guvigeekers</h4>
                  <ul class="space-y-2">
                      <li><a href="#" class="text-gray-300 hover:text-white">Our mission</a></li>
                      <li><a href="#" class="text-gray-300 hover:text-white">Our work</a></li>
                      <li><a href="#" class="text-gray-300 hover:text-white">News & blog</a></li>
                      <li><a href="#" class="text-gray-300 hover:text-white">Contact us</a></li>
                      <li><a href="#" class="text-gray-300 hover:text-white">Careers</a></li>
                  </ul>
              </div>
          </div>

          <div class="mt-8 pt-6 border-t border-gray-700 flex flex-wrap items-center justify-between">
              <div>
                  <h4 class="text-lg font-medium mb-4">Follow us</h4>
                  <div class="flex space-x-4">
                      <a href="#" class="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center text-white hover:bg-[#099f4e]">
                          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm1.262 17.5h1.833L7.084 4.126H5.117z"/>
                          </svg>
                      </a>
                      <a href="#" class="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center text-white hover:bg-[#099f4e]">
                          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z"/>
                          </svg>
                      </a>
                      <a href="#" class="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center text-white hover:bg-[#099f4e]">
                          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                          </svg>
                      </a>
                      <a href="#" class="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center text-white hover:bg-[#099f4e]">
                          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M21.582 6.186a2.506 2.506 0 00-1.768-1.768C18.254 4 12 4 12 4s-6.254 0-7.814.418c-.86.23-1.538.908-1.768 1.768C2 7.746 2 12 2 12s0 4.254.418 5.814c.23.86.908 1.538 1.768 1.768C5.746 20 12 20 12 20s6.254 0 7.814-.418a2.506 2.506 0 001.768-1.768C22 16.254 22 12 22 12s0-4.254-.418-5.814zM9.608 15.118V8.882l5.235 3.118-5.235 3.118z"/>
                          </svg>
                      </a>
                  </div>
              </div>
              <div class="pt-6 sm:pt-0 md:pt-0">
                  <h4 class="text-lg font-medium mb-4">Get Started</h4>
                  <div class="flex flex-wrap">
                      <div class="mr-6">
                          <img src="https://www.guvi.in/assets/W3f-xw2p-app-store.webp" alt="Charity Commission Logo" class="h-10 w-auto" />
                      </div>
                      <div class="">
                          <img src="https://www.guvi.in/assets/CBovHX22-google-play.webp" alt="Fundraising Regulator Logo" class="h-10 w-auto" />
                      </div>
                  </div>
              </div>
          </div>
          
          <div class="mt-8 pt-6 border-t border-gray-700 text-sm text-gray-400">
              <div class="flex flex-wrap justify-between">
                  <div class="mb-4">
                      <a href="#" class="mr-4 hover:text-white">Privacy Policy</a>
                      <a href="#" class="mr-4 hover:text-white">Terms of Use</a>
                      <a href="#" class="mr-4 hover:text-white">Cookies</a>
                      <a href="#" class="hover:text-white">Accessibility</a>
                  </div>
                  <div>
                      &copy; 2025 Guvigeekers. All rights reserved. | <a href="#" class="hover:text-white">Sitemap</a>
                  </div>
              </div>
          </div>
      </div>
    </footer>
  )
}
