<script>
  import { replace } from "svelte-spa-router";

  // sidebar toggle
  let showSidebar = true;
  const toggleSidebar = () => {
    showSidebar = !showSidebar;
  };

  // menu item list
  const menuItems = [
    { path: "/", display: "Home", icon: "home" },
    { path: "/addPatient", display: "Add Patient", icon: "plus-circle" }
  ];
</script>

<div
  class="flex flex-col items-center justify-between overflow-hidden {showSidebar ? 'w-64' : 'w-12'}
  h-full bg-primary transition-all duration-300 ease-in-out">
  Sidebar
  <div>
    {#each menuItems as menuItem}
      <span
        class="flex flex-row"
        on:click={() => {
          replace(menuItem.path);
        }}>
        <img src="./icons/{menuItem.icon}.svg" style="stroke: white;" alt="" />
        {menuItem.display}
      </span>
    {/each}
  </div>
  <p on:click={toggleSidebar}>close</p>
</div>
