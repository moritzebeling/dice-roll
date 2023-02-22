<script>

    import Meta from "$lib/Meta.svelte";
    import { onMount } from "svelte";

    function setVH() {
        document.documentElement.style.setProperty('--100vh', window.innerHeight + 'px');
    }
    onMount(()=>{
        setVH();
        setTimeout(() => {
            setVH();
        }, 100);
    });

</script>

<svelte:window on:resize={setVH} />

<Meta />

<slot />