<script>
  import { onDestroy } from "svelte";
  import { alertArr } from "../../store.js";

  let alerts;
  let clearNotificationJob;
  const unsubscribe = alertArr.subscribe(value => {
    alerts = value;

    // clear notification after 3seconds
    if (value.length != 0) {
      // if alert clearing job exist, reset it
      clearTimeout(clearNotificationJob);
      clearNotifications();
    }
  });

  const clearNotifications = () => {
    clearNotificationJob = setTimeout(() => {
      $alertArr = [];
    }, 3000);
  };

  onDestroy(unsubscribe);
</script>

<div class="flex flex-col items-end w-full sticky z-20 bottom-0 right-0">
  {#each alerts as alert}
    <div
      class="flex flex-col w-96 {alert.type == 'error' ? 'bg-red-600' : 'bg-primary-600'}
      m-2 px-4 py-2">
      <p>{alert.title}</p>
      <p>{alert.description}</p>
    </div>
  {/each}
</div>
