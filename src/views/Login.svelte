<script>
  const { ipcRenderer } = require("electron");

  import { replace } from "svelte-spa-router";
  import Button from "smelte/src/components/Button";
  import TextField from "smelte/src/components/TextField";
  import { newAlert } from "../store.js";

  let username = "";
  let password = "";

  // ipc events
  ipcRenderer.on("checkedPwd", (evt, arg) => {
    if (arg) {
      replace("/home");
    } else {
      newAlert(
        "Invalid username / password",
        "Please recheck your username and password"
      );
    }
  });

  const signInBtn = () => {
    ipcRenderer.send("check-uname-pwd", { username, password });
  };
</script>

<div class="flex flex-col h-screen justify-center items-center">
  <h1 class="text-2xl pb-8">Login</h1>

  <TextField label="Username" autocomplete="true" bind:value={username} />
  <TextField label="Password" type="password" bind:value={password} />

  <div class="py-2">
    <Button on:click={signInBtn}>Login</Button>
  </div>
</div>
