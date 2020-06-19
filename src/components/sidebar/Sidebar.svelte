<script>
  import { createEventDispatcher } from "svelte";

  // sidebar toggle
  let showSidebar = false;
  const toggleSidebar = () => {
    showSidebar = !showSidebar;
  };

  // dispatch menu click
  const dispatch = createEventDispatcher();
  const dispatchMenuClick = route => {
    dispatch("menuClick", { route });
  };

  // menu item list
  const menuItems = [
    { path: "home", display: "Home", icon: "home" },
    { path: "add_patient", display: "Add Patient", icon: "plus-circle" }
  ];
</script>

<div
  class="absolute z-20 flex flex-col items-center justify-between
  overflow-hidden {showSidebar ? 'w-64' : 'w-12'} h-full bg-primary
  transition-all duration-300 ease-in-out">
  Sidebar
  <div>
    {#each menuItems as menuItem}
      <span
        class="flex flex-row"
        on:click={() => {
          dispatchMenuClick(menuItem.path);
        }}>
        <img src="./icons/{menuItem.icon}.svg" style="stroke: white;" alt="" />
        {menuItem.display}
      </span>
    {/each}
  </div>
  <p on:click={toggleSidebar}>close</p>
</div>
