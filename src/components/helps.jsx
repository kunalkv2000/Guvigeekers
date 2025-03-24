import React from "react";

export default function Helps() {
  return (
    <section class="py-10 bg-[#099f4e] text-white">
      <div class="container mx-auto px-4">
        <div class="flex flex-col md:flex-row items-center justify-between">
          <div class="md:w-1/2 mb-6 md:mb-0">
            <h2 class="text-2xl md:text-3xl font-bold mb-4">
              Looking for more help?
            </h2>
            <p class="text-lg mb-6">
              Most of your Booking / Cancellation / Payment & Refund related
              queries can be solved by our experienced Team.
            </p>
            <div class="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
              <button class="bg-white text-[#099f4e] hover:bg-gray-100 px-6 py-3 rounded-full font-medium">
                Call our helpline
              </button>
              <button class="bg-gray-700 hover:bg-gray-950 text-white px-6 py-3 rounded-full font-medium">
                Find local support
              </button>
            </div>
          </div>
          <div class="md:w-1/3">
            <div class="bg-white text-gray-800 p-6 rounded-lg">
              <h3 class="text-xl font-bold mb-2">Guvigeekers helpline</h3>
              <p class="mb-4">
                Ticket cancellation / Cancellation, Refund & Exchange Request /
                Payment & Refund / Guvigeekers Gift Card
              </p>
              <div class="text-xl font-bold text-[#099f4e]">0300 123 1110</div>
              <div class="text-sm text-gray-600 mt-1">
                Weekdays 9am–8pm
                <br />
                Weekends 11am–4pm
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
