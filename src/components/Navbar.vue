<template>
  <nav class="bg-white border-gray-200 px-2 sm:px-4 py-2.5 dark:bg-gray-900">
    <div class="container flex flex-wrap items-center justify-between mx-auto">
      <router-link to="/" class="flex items-center">
        <img
          src="https://flowbite.com/docs/images/logo.svg"
          class="h-6 mr-3 sm:h-9"
          alt="Flowbite Logo"
        />
        <span
          class="self-center text-xl font-semibold whitespace-nowrap dark:text-white"
          >Assistant Services</span
        >
      </router-link>
      <button
        data-collapse-toggle="navbar-default"
        type="button"
        class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        aria-controls="navbar-default"
        aria-expanded="false"
      >
        <span class="sr-only">Open main menu</span>
        <svg
          class="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </button>
      <div class="hidden w-full md:block md:w-auto" id="navbar-default">
        <ul
          class="flex flex-col items-center p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"
        >
          <li>
            <router-link
              to="/"
              class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
              aria-current="page"
              >Home</router-link
            >
          </li>
          <li>
            <!-- <a
              href="#"
              class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >Services</a
            > -->
            <button
              id="mega-menu-full-dropdown-button"
              data-collapse-toggle="mega-menu-full-dropdown"
              class="py-2 pl-3 pr-4 flex items-center justify-between w-full py-2 pl-3 pr-4 font-medium text-gray-700 rounded md:w-auto hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
            >
              Services
              <svg
                class="w-5 h-5 ml-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </li>
          <li>
            <a
              href="#"
              class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >Pricing</a
            >
          </li>
          <li>
            <a
              href="#"
              class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >About</a
            >
          </li>
          <li>
            <i
              :class="[
                isDark
                  ? true
                  : 'block py-2 pl-3 pr-4 bi bi-moon text-gray-700 font-bold md:dark:hover:text-blue-700 hover:text-blue-700 block py-2 pl-3 pr-4 ',
                'block py-2 pl-3 pr-4 bi bi-brightness-high text-gray-500 font-bold md:dark:hover:text-white dark:hover:text-white block py-2 pl-3 pr-4 ',
              ]"
              @click="toggleDark()"
            ></i>
          </li>

          <li>
            <button
              type="button"
              class="block py-2 pl-3 pr-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 text-center mr-2 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              @click="gotoLogin()"
            >
              Login
            </button>
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <span class="sr-only">Open main menu</span>
              <!-- <svg
                class="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                ></path>
              </svg> -->
            </button>
          </li>
        </ul>
      </div>
    </div>

    <!--expand -->
    <div
      id="mega-menu-full-dropdown"
      class="mt-1 mb-8 border-gray-200 shadow-sm bg-gray-50 md:bg-white border-y dark:bg-gray-800 dark:border-gray-600"
    >
      <div
        class="grid max-w-screen-xl px-4 py-5 mx-auto text-gray-900 dark:text-white sm:grid-cols-2 md:px-6"
      >
        <ul>
          <li>
            <a
              href="#"
              class="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <div class="font-semibold">Weather</div>
              <span class="text-sm font-light text-gray-500 dark:text-gray-400"
                >Assistant report the weather that you stay and some were that
                you ask</span
              >
            </a>
          </li>
          <li>
            <a
              href="#"
              class="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <div class="font-semibold">Knowledge</div>
              <span class="text-sm font-light text-gray-500 dark:text-gray-400"
                >Find the Knowledge that you ask and summarize article to text
                response</span
              >
            </a>
          </li>
          <li>
            <a
              href="#"
              class="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <div class="font-semibold">Music</div>
              <span class="text-sm font-light text-gray-500 dark:text-gray-400"
                >Connect youtube and spotify in Assistants that help you to find
                the song that you want</span
              >
            </a>
          </li>
        </ul>
        <ul>
          <li>
            <a
              href="#"
              class="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <div class="font-semibold">Restaurant</div>
              <span class="text-sm font-light text-gray-500 dark:text-gray-400"
                >Find Restaurant near you and show the map in hologram</span
              >
            </a>
          </li>
          <li>
            <a
              href="#"
              class="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <div class="font-semibold">Remember</div>
              <span class="text-sm font-light text-gray-500 dark:text-gray-400"
                >Help you to remember something and remind you to do it</span
              >
            </a>
          </li>
          <li>
            <a
              href="#"
              class="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <div class="font-semibold">Platform</div>
              <span class="text-sm font-light text-gray-500 dark:text-gray-400"
                >Assistants services has a native app for discord , mobile and
                web application</span
              >
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { onMounted } from "vue";
import {
  initModals,
  initAccordions,
  initCarousels,
  initCollapses,
  initDials,
  initDismisses,
  initDrawers,
  initDropdowns,
  initPopovers,
  initTabs,
  initTooltips,
} from "flowbite";
import { useDark, useToggle } from "@vueuse/core";

export default {
  name: "Navbar",
  setup() {
    const isDark = useDark();
    const toggleDark = useToggle(isDark);

    onMounted(() => {
      initModals();
      initAccordions();
      initCarousels();
      initCollapses();
      initDials();
      initDismisses();
      initDrawers();
      initDropdowns();

      initPopovers();
      initTabs();
      initTooltips();
    });

    return {
      isDark,
      toggleDark,
    };
  },
  methods: {
    gotoLogin() {
      this.$router.push("/login");
    },
  },
};
</script>
