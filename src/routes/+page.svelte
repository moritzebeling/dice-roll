<script>
    
    import Dice from "$lib/dice/Dice.svelte";
    import Layout from "$lib/dice/Layout.svelte";
    import Menu from "$lib/settings/Menu.svelte";

    let roll;

</script>

<svelte:window on:click={roll} />

<!-- <Menu /> -->

<Layout>
    <Dice bind:roll={roll} />
</Layout>

<style>
</style>