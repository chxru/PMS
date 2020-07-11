<script>
  import { createEventDispatcher } from "svelte";
  import { replace } from "svelte-spa-router";

  const dispatch = createEventDispatcher();

  // sidebar toggle
  let showSidebar = false;
  const toggleSidebar = () => {
    showSidebar = !showSidebar;
    dispatch("toggleSidebar", showSidebar);
  };

  // menu item list
  const menuItems = [
    { path: "/home", display: "Home", icon: "home" },
    { path: "/search", display: "Search", icon: "search" },
    { path: "/addPatient", display: "Add Patient", icon: "plus-circle" }
  ];
</script>

<div
  class="flex flex-col overflow-hidden {showSidebar ? 'w-64 ' : 'w-16'} h-full
  bg-foreground transition-all duration-300 ease-in-out fixed shadow-lg
  justify-between py-2 items-center pt-12">
  <div>
    {#each menuItems as menuItem}
      <span
        class="flex flex-row py-8"
        on:click={() => {
          replace(menuItem.path);
        }}>
        <img
          class="px-4 cursor-pointer"
          src="./icons/{menuItem.icon}.svg"
          alt={menuItem.display} />
        <p class={showSidebar ? 'block' : 'hidden'}>{menuItem.display}</p>
      </span>
    {/each}
  </div>
  <div on:click={toggleSidebar}>
    <img
      src={showSidebar ? './icons/chevron-left.svg' : './icons/chevron-right.svg'}
      alt="sidebar toggle icon" />
  </div>
</div>
