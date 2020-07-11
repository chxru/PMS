<script>
  import { replace } from "svelte-spa-router";

  import NotificationCard from "../cards/Notification.svelte";

  // toggle dropdown
  let showDropdown = false;
  const toggleDropdown = () => {
    showNotification = false;
    showDropdown = !showDropdown;
  };

  // toggle notification
  let showNotification = false;
  const toggleNotification = () => {
    showDropdown = false;
    showNotification = !showNotification;
  };

  // signout
  const signout = () => {
    showDropdown = false;
    replace("/");
  };
</script>

<div
  class="flex flex-row w-full fixed h-16 z-10 bg-foreground shadow-sm
  justify-between px-4 items-center">
  <div>
    <h1 class="text-base">Patient Tracking System</h1>
  </div>
  <div class="flex flex-row items-center">
    <h1 class="text-base mr-4">User</h1>
    <img
      src="./icons/bell.svg"
      alt="notification"
      class="ml-2 h-4"
      on:click={toggleNotification} />
    <img
      src="./icons/chevron-down.svg"
      alt="dropdown"
      class="ml-2 h-4"
      on:click={toggleDropdown} />
  </div>
</div>

<div
  class="flex w-32 bg-foreground absolute right-0 mt-16 mr-4 {showDropdown ? 'visible' : 'hidden'}
  justify-center py-4 cursor-pointer rounded-md"
  on:click={signout}>
  Signout
</div>

<div
  class="flex flex-col w-96 bg-foreground absolute right-0 mt-16 mr-4 {showNotification ? 'visible' : 'hidden'}
  justify-center py-4 cursor-pointer rounded-md">
  <NotificationCard />
</div>
