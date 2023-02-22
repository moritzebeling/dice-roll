<script>

    export let number = false;

    function pick( n ){
        return [1,2,3,4,5,6,7].sort(() => 0.5 - Math.random()).slice(0, n);
    }

    $: selected = pick( number );

</script>

<main>
    <div class="die-1" class:visible={selected.includes(1)}></div>
    <div class="die-2" class:visible={selected.includes(2)}></div>
    <div class="die-3" class:visible={selected.includes(3)}></div>
    <div class="die-4" class:visible={selected.includes(4)}></div>
    <div class="die-5" class:visible={selected.includes(5)}></div>
    <div class="die-6" class:visible={selected.includes(6)}></div>
    <div class="die-7" class:visible={selected.includes(7)}></div>
</main>

<style>

    main {
        position: fixed;
        top: calc( ( 100vh - 100vw ) / 2 );
        left: 0;
        width: 100vw;
        height: 100vw;
        --size: 23vw;
    }
    @media (orientation: landscape){
        main {
            top: 0;
            left: calc( ( 100vw - 100vh ) / 2 );
            width: 100vh;
            height: 100vh;
            --size: 23vh;
        }
    }

    div {
        width: var(--size);
        height: var(--size);
        border-radius: 100%;
        background-color: white;
        position: absolute;
        transform: translate(-50%, -50%) scale(0);
        transition: transform var(--speed) ease;
    }
    div.visible {
        transform: translate(-50%, -50%) scale(1);
    }

    .die-1,
    .die-7,
    .die-4 {
        left: 50%;
    }

    .die-6,
    .die-5 {
        left: 21.33%;
    }
    
    .die-2,
    .die-3 {
        left: 78.66%;
    }

    .die-1 {
        top: 16.66%;
    }
    .die-6,
    .die-2 {
        top: 33.33%;
    }
    .die-7 {
        top: 50%;
    }
    .die-5,
    .die-3 {
        top: 66.66%;
    }
    .die-4 {
        top: 83.33%;
    }

</style>