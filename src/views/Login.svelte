<script>
  const { ipcRenderer } = require("electron");

  import { replace } from "svelte-spa-router";
  import Button from "smelte/src/components/Button";
  import TextField from "smelte/src/components/TextField";

  let username = "test";
  let password = "password";
  let errMsg = "";

  // ipc events
  ipcRenderer.on("checkedPwd", (evt, arg) => {
    if (arg) {
      replace("/home");
    } else {
      errMsg = "Username password mismatch";
    }
  });

  const signInBtn = () => {
    errMsg = "";
    ipcRenderer.send("check-uname-pwd", { username, password });
  };
</script>

<div class="flex flex-col h-screen justify-center items-center">
  <h1 class="text-2xl pb-8">Login</h1>

  <TextField label="Username" autocomplete="true" bind:value={username} />
  <TextField label="Password" type="password" bind:value={password} />

  <p>{errMsg}</p>

  <div class="py-2">
    <Button on:click={signInBtn}>Login</Button>
  </div>
  <div class="py-2">
    <Button
      on:click={() => {
        replace('/createUser');
      }}>
      Create User
    </Button>
  </div>
</div>
