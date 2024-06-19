<script lang="ts">
  import Sort from "$lib/Sort.svelte";
  import Table from "$lib/Table.svelte";
  import { FlexList, List, StampList, StampPermissionsService, StampSortService, StampTableService } from "$lib/types";

    

      let instance = new StampList();
      // let instance = new FlexList();

      // fetch ...
      instance.edit();
</script>

<div>
    <h2 on:click={()=>console.log(instance)}>{instance.department}</h2>
   <Sort bind:instance={instance}/>
   <Table bind:instance={instance} />
</div>

<style>
    
</style>