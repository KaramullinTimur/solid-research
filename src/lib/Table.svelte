<script lang="ts">
  import type { ITablePage, List } from "./types";


    
   export let instance: ITablePage;

   function edit() {
       instance.edit()
       instance = instance
   }
</script>

<div class="container">
        {#each instance.list as el}
        <div on:click={edit}>{el}</div>
                
        {/each}
 
</div>

<style>
   .container {
    margin: 20px 0;
       border: 1px solid black;
   }
</style>