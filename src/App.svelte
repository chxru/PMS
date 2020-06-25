<script>
  import Router from "svelte-spa-router";

  // views
  import Home from "./views/Home.svelte";
  import AddPatient from "./views/AddPatient.svelte";

  // components
  import Sidebar from "./components/sidebar/Sidebar.svelte";

  // routes
  const routes = {
    "/": Home,
    "/addPatient": AddPatient
  };
</script>

<div class="relative flex flex-row w-full h-screen">
  <Sidebar />
  <div class="ml-4">
    <Router {routes} />
  </div>
</div>
