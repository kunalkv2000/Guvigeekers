import React from "react";
import avail from "../assets/icons/avil.png";
import live from "../assets/icons/live.png";
import net from "../assets/icons/net.png";
import offer from "../assets/icons/offer.png";
import pay from "../assets/icons/pay.png";
import real from "../assets/icons/real.png";
import ticket from "../assets/icons/ticket.png";

export default function Why() {
  return (
    <section
      id="features"
      class="container mx-auto px-4 space-y-6 bg-slate-50 py-8 md:py-12 lg:py-20"
    >
      <div class="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
        <h2 class="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-6xl text-[#057538]">
          Features
        </h2>

        <p class="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          Guvigeekers, a leading entertainment ticketing platform in India,
          offers features like booking tickets for movies, events, concerts,
          exclusive offers and etc...
        </p>
      </div>

      <div class="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
        <div class="relative overflow-hidden rounded-lg bg-white select-none shadow-lg shadow-[#bce4ce] hover:shadow-[#057538] hover:shadow-2xl duration-1000 p-2">
          <div class="flex h-[180px] flex-col justify-between rounded-md p-6">
            <img src={ticket} class="h-12 w-12 fill-current text-[#057538]" />
            <div class="space-y-2">
              <h3 class="font-bold">Easy booking process</h3>
              <p class="text-sm text-muted-foreground">
                Select dates, times, and seats, and complete the purchase with
                minimal effort.
              </p>
            </div>
          </div>
        </div>

        <div class="relative overflow-hidden rounded-lg bg-white select-none shadow-lg shadow-[#bce4ce] hover:shadow-[#057538] hover:shadow-2xl duration-1000 p-2">
          <div class="flex h-[180px] flex-col justify-between rounded-md p-6">
            <img src={avail} class="h-12 w-12 fill-current text-[#057538]" />
            <div class="space-y-2">
              <h3 class="font-bold">Real-time seat availability</h3>
              <p class="text-sm">
                The platform provides real-time updates on seat availability.
              </p>
            </div>
          </div>
        </div>

        <div class="relative overflow-hidden rounded-lg bg-white select-none shadow-lg shadow-[#bce4ce] hover:shadow-[#057538] hover:shadow-2xl duration-1000 p-2">
          <div class="flex h-[180px] flex-col justify-between rounded-md p-6">
            <img src={pay} class="h-12 w-12 fill-current text-[#057538]" />
            <div class="space-y-2">
              <h3 class="font-bold">Multiple payment options</h3>
              <p class="text-sm text-muted-foreground">
                We supports various payment methods, making it easy for users.
              </p>
            </div>
          </div>
        </div>

        <div class="relative overflow-hidden rounded-lg bg-white select-none shadow-lg shadow-[#bce4ce] hover:shadow-[#057538] hover:shadow-2xl duration-1000 p-2">
          <div class="flex h-[180px] flex-col justify-between rounded-md p-6">
            <img src={live} class="h-12 w-12 fill-current text-[#057538]" />
            <div class="space-y-2">
              <h3 class="font-bold">Live event updates</h3>
              <p class="text-sm text-muted-foreground">
                We inform you about upcoming events and changes with live event
                updates.
              </p>
            </div>
          </div>
        </div>

        <div class="relative overflow-hidden rounded-lg bg-white select-none shadow-lg shadow-[#bce4ce] hover:shadow-[#057538] hover:shadow-2xl duration-1000 p-2">
          <div class="flex h-[180px] flex-col justify-between rounded-md p-6">
            <img src={offer} class="h-12 w-12 fill-current text-[#057538]" />
            <div class="space-y-2">
              <h3 class="font-bold">Exclusive offers and discounts</h3>
              <p class="text-sm text-muted-foreground">
                We often provides exclusive offers and discounts on tickets.
              </p>
            </div>
          </div>
        </div>

        <div class="relative overflow-hidden rounded-lg bg-white select-none shadow-lg shadow-[#bce4ce] hover:shadow-[#057538] hover:shadow-2xl duration-1000 p-2">
          <div class="flex h-[180px] flex-col justify-between rounded-md p-6">
            <img src={net} class="h-12 w-12 fill-current text-[#057538]" />
            <div class="space-y-2">
              <h3 class="font-bold">Extensive network</h3>
              <p class="text-sm text-muted-foreground">
                We have partnered with a wide network of cinemas, theaters and
                event venues
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
