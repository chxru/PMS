<script>
  // iews
  import Home from "./views/Home.svelte";
  import AddPatient from "./views/AddPatient.svelte";

  // components
  import Sidebar from "./components/sidebar/Sidebar.svelte";

  // handling view
  let currentView = "home";
  const changeView = event => {
    currentView = event.detail.route;
  };
</script>

<div class="relative flex flex-row w-full h-screen">
  <Sidebar on:menuClick={changeView} />
  <div class="ml-12">
    {#if currentView == 'home'}
      <Home />
    {:else if currentView == 'add_patient'}
      <AddPatient />
    {/if}
  </div>
</div>
