<script>

    export let number = false;
    export let finished = false;

    function pick( n ){
        return [1,2,3,4,5,6,7].sort(() => 0.5 - Math.random()).slice(0, n);
    }

    $: selected = pick( number );

</script>

<main>
    <div class="die-1" class:finished class:visible={selected.includes(1)}></div>
    <div class="die-2" class:finished class:visible={selected.includes(2)}></div>
    <div class="die-3" class:finished class:visible={selected.includes(3)}></div>
    <div class="die-4" class:finished class:visible={selected.includes(4)}></div>
    <div class="die-5" class:finished class:visible={selected.includes(5)}></div>
    <div class="die-6" class:finished class:visible={selected.includes(6)}></div>
    <div class="die-7" class:finished class:visible={selected.includes(7)}></div>
</main>

<style lang="scss">

    main {
        --size: 12vh;
        width: 100%;
        height: 100%;
        position: relative;
        @media (orientation: landscape){
            --size: 22vh;
        }
    }

    div {
        width: var(--size);
        height: var(--size);
        border-radius: 100%;
        background-color: var(--color);
        position: absolute;
        transform: translate(-50%, -50%) scale(0);
        transition: transform var(--speed) ease;
        &.visible {
            transform: translate(-50%, -50%) scale(0.75);
        }
        &.visible.finished {
            transform: translate(-50%, -50%) scale(1.1);
        }
    }

    .die {
        &-1,
        &-7,
        &-4 {
            left: 50%;
        }
        &-6,
        &-5 {
            left: 21.33%;
        }
        &-2,
        &-3 {
            left: 78.66%;
        }
        
        &-1 {
            top: 16.66%;
        }
        &-6,
        &-2 {
            top: 33.33%;
        }
        &-7 {
            top: 50%;
        }
        &-5,
        &-3 {
            top: 66.66%;
        }
        &-4 {
            top: 83.33%;
        }
    }


</style>