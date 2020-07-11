<script>
  const { ipcRenderer } = require("electron");

  import MediumCard from "../components/cards/Medium.svelte";

  let searchResult = [];
  ipcRenderer.on("search-result-out", (event, arg) => {
    searchResult = arg;
  });

  let searchWord = "";
  const search = evt => {
    evt.preventDefault();
    ipcRenderer.send("search-by-name", searchWord);
  };
</script>

<div class="flex flex-col">
  <!-- search bar -->
  <div class="pt-2 relative mx-auto text-gray-600 w-1/2">
    <form on:submit={search}>
      <input
        class="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg
        text-sm focus:outline-none w-full"
        type="search"
        name="search"
        placeholder="Search"
        bind:value={searchWord} />
      <button type="submit" class="absolute right-0 top-0 mt-5 mr-4">
        <img src="./icons/search.svg" alt="search icon" class="h-4 w-4" />
      </button>
    </form>
  </div>

  <!-- search result -->
  {#if searchResult.length != 0}
    <p>search result</p>
    <div class="flex flex-row flex-wrap">
      {#each searchResult as result}
        <MediumCard data={result} />
      {/each}
    </div>
  {/if}
</div>
