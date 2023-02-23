<script>
  
    import { onMount } from "svelte";

    let expand = true;

    onMount(()=>{
        leave();
    });
    
    function leave(){
        setTimeout(() => {
            expand = false;
        }, 3000);
    }

</script>

<nav on:mouseenter={()=>expand = true} on:mouseleave={leave}>
    <a href="/settings" class="button" class:expand>
        {#if expand}
            Settings
        {/if}
    </a>
</nav>

<style>

    nav {
        position: absolute;
        top: 0;
        left: 0;
        padding: 1rem;
        z-index: 100;
    }

    a {
        transition: 0.3s ease;
    }
    
    a:not(.expand) {
        background-color: #333;
        padding: 0.5rem;
    }

</style>