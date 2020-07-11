<script>
  import { createEventDispatcher } from "svelte";
  import { replace } from "svelte-spa-router";

  const { ipcRenderer } = require("electron");

  let searchResult = [];
  ipcRenderer.on("search-result-out", (event, arg) => {
    searchResult = arg;
    console.log(arg); // prints "pong"
  });

  let searchWord = "";
  const search = evt => {
    evt.preventDefault();
    ipcRenderer.send("search-by-name", searchWord);
  };

  // Drop down
  let showTopbar = false;
  const dropDown = () => {
    showTopbar = !showTopbar;
    dispatch("dropDown", showTopbar);
  };

  // Drop Down Menu
  const menuItems = [
    { path: "/", display: "Your Profile" },
    { path: "/search", display: "Setting" },
    { path: "/addPatient", display: "Sign out" }
  ];
</script>

<div
  class="flex flex-row w-full h-12 fixed z-10 bg-foreground shadow-sm
  justify-between">
  <div>
    <img
      class="h-12 w-12 rounded-full pt-1 -mt-1 ml-5"
      src="./icons/register.svg"
      alt="" />
  </div>
  <div class="pt-1 mt-1">Patient Register</div>

  <div class="pt-2 relative mx-auto -mt-1">
    <form on:submit={search}>
      <input
        class="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg
        text-sm focus:outline-none w-full"
        type="search"
        name="search"
        placeholder="Search"
        bind:value={searchWord} />
      <button type="submit" class="absolute right-0 top-0 mt-5 mr-4">
        <svg
          class="text-gray-600 h-4 w-4 fill-current"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          version="1.1"
          id="Capa_1"
          x="0px"
          y="0px"
          viewBox="0 0 56.966 56.966"
          style="enable-background:new 0 0 56.966 56.966;"
          xml:space="preserve"
          width="512px"
          height="512px">
          <path
            d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23
            s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92
            c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z
            M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17
            s-17-7.626-17-17S14.61,6,23.984,6z" />
        </svg>
      </button>
    </form>
  </div>

  <div class="pt-2 mt-1">
    Methanata Userge nama watena widiyata mokak hari liyapan
  </div>

  <div
    class="origin-top-right absolute right-0 mt-12 w-48 rounded-md shadow-lg
    bg-foreground">
    {#each menuItems as menuItem}
      <span
        class="py-1 rounded-md bg-white shadow-xs "
        role="menu"
        aria-orientation="vertical"
        on:click={() => {
          replace(menuItem.path);
        }}>
        <p
          class={showTopbar ? 'block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out' : 'hidden'}>
          {menuItem.display}
        </p>
      </span>
    {/each}
  </div>
  <div on:click={dropDown}>
    <img
      class="h-10 w-10 rounded-full pt-1 mt-1"
      src="./icons/user.svg"
      alt="" />
  </div>

</div>
