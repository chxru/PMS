<script>
  import Router from "svelte-spa-router";

  // views
  import About from "./views/About.svelte";
  import AddPatient from "./views/AddPatient.svelte";
  import CreateUser from "./views/CreateUser.svelte";
  import Home from "./views/Home.svelte";
  import Login from "./views/Login.svelte";
  import Search from "./views/Search.svelte";
  import Splash from "./views/Splash.svelte";

  // components
  import Topbar from "./components/topbar/Topbar.svelte";
  import Sidebar from "./components/sidebar/Sidebar.svelte";
  import Alert from "./components/cards/Alert.svelte";

  // routes
  const routes = {
    "/": Splash,
    "/about": About,
    "/addPatient": AddPatient,
    "/createUser": CreateUser,
    "/home": Home,
    "/login": Login,
    "/search": Search
  };

  // toggle sidebar
  let sidebarExpanded = false;
  const toggleSidebar = evt => {
    sidebarExpanded = evt.detail;
  };

  // on route change
  let currentLocation = "Home";
  const showSidebarOn = ["Home", "AddPatient", "Search", "About"];
  const routeEvent = evt => {
    currentLocation = evt.detail.name;
  };
</script>

<div class="relative flex flex-col w-full min-h-screen bg-background">
  <div class="flex flex-row">
    {#if showSidebarOn.indexOf(currentLocation) != -1}
      <Topbar />
      <Sidebar on:toggleSidebar={toggleSidebar} />
    {/if}
    <div
      class="w-full {showSidebarOn.indexOf(currentLocation) != -1 ? (sidebarExpanded ? 'ml-64 mt-16' : 'ml-16 mt-16') : 'ml-0 mt-0'}
      transition-all duration-300 ease-in-out ">
      <Router {routes} on:routeLoaded={routeEvent} />
    </div>
  </div>
  <Alert />
</div>
