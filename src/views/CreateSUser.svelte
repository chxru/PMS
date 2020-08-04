<script>
  const { ipcRenderer } = require("electron");

  import { replace } from "svelte-spa-router";
  import Button from "smelte/src/components/Button";
  import TextField from "smelte/src/components/TextField";

  let username = "";
  let password = "";

  // ipc events
  // ipcRenderer.on("userCreated", (evt, arg) => {
  //   if (arg) replace("/home");
  // });

  const createSUserBtn = () => {
    ipcRenderer.send("create-super-user", { username, password });
  };
</script>

<div class="flex flex-col h-screen justify-center items-center">
  <h1 class="text-2xl pb-8">Create a super user</h1>

  <TextField label="Username" autocomplete="true" bind:value={username} />
  <TextField label="Password" type="password" bind:value={password} />

  <div class="py-2">
    <Button on:click={createSUserBtn}>Create</Button>
  </div>
</div>
