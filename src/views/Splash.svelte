<script>
  const { ipcRenderer } = require("electron");
  import { onMount } from "svelte";
  import { replace } from "svelte-spa-router";

  ipcRenderer.on("app-init-res", (evt, args) => {
    if (args) {
      replace("/login");
    } else {
      replace("/createUser");
    }
  });

  onMount(() => {
    ipcRenderer.send("app-init-req");
  });
</script>

<div class="flex justify-center items-center w-full h-full">
  <h1>PMS</h1>
</div>
