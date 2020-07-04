<script>
  import Router from "svelte-spa-router";

  // views
  import Home from "./views/Home.svelte";
  import AddPatient from "./views/AddPatient.svelte";
  import Search from "./views/Search.svelte";

  // components
  import Sidebar from "./components/sidebar/Sidebar.svelte";

  // routes
  const routes = {
    "/": Home,
    "/addPatient": AddPatient,
    "/search": Search
  };

  let sidebarExpanded = false;
  const toggleSidebar = evt => {
    sidebarExpanded = evt.detail;
  };
</script>

<div class="relative flex flex-row w-full h-screen bg-background">
  <Sidebar on:toggleSidebar={toggleSidebar} />
  <div
    class=" w-full mt-8 pl-4 {sidebarExpanded ? 'ml-64' : 'ml-16'}
    transition-all duration-300 ease-in-out">
    <Router {routes} />
  </div>
</div>
