<script lang="ts">
  import type { ITablePage, List } from "./types";

  export let instance: ITablePage;

  function edit() {
    instance.edit();
    instance = instance;
  }
</script>

{#if instance.list}
  <div class="container">
    {#each instance.list as el}
      <div >{el}</div>
    {/each}
  </div>
  <button on:click={edit}>EDIT</button>
{/if}

<style>
  .container {
    margin: 20px 0;
    border: 1px solid black;
  }
</style>
