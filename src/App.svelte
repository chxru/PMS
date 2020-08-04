<script>
  import Router from "svelte-spa-router";

  // views
  import About from "./views/About.svelte";
  import AddPatient from "./views/AddPatient.svelte";
  import CreateUser from "./views/CreateUser.svelte";
  import CreateSUser from "./views/CreateSUser.svelte";
  import Home from "./views/Home.svelte";
  import Login from "./views/Login.svelte";
  import Search from "./views/Search.svelte";
  import SplashScreen from "./views/SplashScreen.svelte";

  // components
  import Topbar from "./components/topbar/Topbar.svelte";
  import Sidebar from "./components/sidebar/Sidebar.svelte";

  // routes
  const routes = {
    "/": SplashScreen,
    "/about": About,
    "/addPatient": AddPatient,
    "/createUser": CreateUser,
    "/createSUser": CreateSUser,
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

<div class="relative flex flex-row w-full min-h-screen bg-background">
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
