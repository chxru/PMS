<script>
  import Router from "svelte-spa-router";

  // views
  import AddPatient from "./views/AddPatient.svelte";
  import CreateUser from "./views/CreateUser.svelte";
  import Home from "./views/Home.svelte";
  import Login from "./views/Login.svelte";
  import Search from "./views/Search.svelte";

  // components
  import Sidebar from "./components/sidebar/Sidebar.svelte";

  // routes
  const routes = {
    "/": Login,
    "/addPatient": AddPatient,
    "/createUser": CreateUser,
    "/home": Home,
    "/search": Search
  };

  // toggle sidebar
  let sidebarExpanded = false;
  const toggleSidebar = evt => {
    sidebarExpanded = evt.detail;
  };

  // on route change
  let currentLocation = "Home";
  const showSidebarOn = ["Home", "AddPatient", "Search"];
  const routeEvent = evt => {
    currentLocation = evt.detail.name;
  };
</script>

<div class="relative flex flex-row w-full min-h-screen bg-background">
  {#if showSidebarOn.indexOf(currentLocation) != -1}
    <Sidebar on:toggleSidebar={toggleSidebar} />
  {/if}
  <div
    class=" w-full mt-8 pl-4 {showSidebarOn.indexOf(currentLocation) != -1 ? (sidebarExpanded ? 'ml-64' : 'ml-16') : 'ml-0'}
    transition-all duration-300 ease-in-out">
    <Router {routes} on:routeLoaded={routeEvent} />
  </div>
</div>
