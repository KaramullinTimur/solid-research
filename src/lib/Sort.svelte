<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import type { ISortPage, ISortService, List } from "./types";

  const dispatch = createEventDispatcher()

    
    export let instance: ISortPage

    function sort() {
        instance.sort()
        instance = instance
    }
</script>

<div class="container">
    <button on:click={sort}>SORT</button>
    {instance.list}
</div>

<style>
    
</style>