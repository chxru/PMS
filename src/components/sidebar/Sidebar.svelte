<script>
  import { createEventDispatcher } from "svelte";
  import { replace } from "svelte-spa-router";

  const dispatch = createEventDispatcher();

  // sidebar toggle
  let showSidebar = true;
  const toggleSidebar = () => {
    showSidebar = !showSidebar;
    dispatch("toggleSidebar", showSidebar);
  };

  // menu item list
  const menuItems = [
    { path: "/", display: "Home", icon: "home" },
    { path: "/search", display: "Search", icon: "search" },
    { path: "/addPatient", display: "Add Patient", icon: "plus-circle" }
  ];
</script>

<div
  class="flex flex-col overflow-hidden {showSidebar ? 'w-64 ' : 'w-16'} h-full
  bg-white transition-all duration-300 ease-in-out fixed border-r-2 shadow-2xl
  border-gray-600">
  <div class="divide-y divide-white">
    <div class="py-2">
      <div>
        {#each menuItems as menuItem}
          <span
            class="flex flex-row py-10 border rounded text-dark border-white
            hover:text-dark "
            on:click={() => {
              replace(menuItem.path);
            }}>
            <img
              class="{showSidebar ? 'px-10 ' : 'px-5 py-5'} hover:bg-green-900
              bg-2"
              src="./icons/{menuItem.icon}.svg"
              style="stroke:white; "
              alt="" />
            {menuItem.display}
          </span>
        {/each}
      </div>
    </div>
  </div>
  <p on:click={toggleSidebar}>
    <img
      class={showSidebar ? ' px-10 py-64 w-32' : 'px-5 py-32'}
      src={showSidebar ? './icons/left.svg' : './icons/right.svg'}
      alt="" />
  </p>
</div>
