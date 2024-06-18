<script lang="ts">
  import Sort from "$lib/Sort.svelte";
  import Table from "$lib/Table.svelte";
  import { List, StampSortService, StampTableService } from "$lib/types";

    
      let arr: number[] = [1,3,2]

      let sortService = new StampSortService();
      let tableSerive = new StampTableService();
      let listInstance = new List(arr, sortService, tableSerive);

</script>

<div>
    <h2 on:click={()=>console.log(listInstance)}>{listInstance.list}</h2>
   <Sort bind:instance={listInstance}/>
   <Table bind:instance={listInstance} />
</div>

<style>
    
</style>