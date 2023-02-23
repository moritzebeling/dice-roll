<script>

    import Visual from "$lib/dice/Visual.svelte";
    import { Dice } from "$lib/dice/Dice.js";
    import Menu from "$lib/settings/Menu.svelte";
    
    const dice = new Dice();
    
    let number = false;
    let sequence = false;
    let running = false;

    async function roll(){
        if( running ){ return; }
        running = true;

        let intensity = Dice.random(3,30);
        sequence = dice.sequence( intensity );

        let speed = Math.floor( 500 / sequence.length );
        let step = Math.floor( (500 - speed) / sequence.length );
        document.body.style.setProperty('--speed', speed + 'ms');

        console.log({
            length: sequence.length,
            speed: speed,
            step: step,
        });

        let i = 0;
        while( i < sequence.length ){
            await Dice.delay( speed );
            number = sequence[i];
            speed += step;
            document.body.style.setProperty('--speed', speed + 'ms');
            i++;
        }

        running = false;
    }

</script>

<Menu />

<Visual {number} finished={!running} />

{#if !number}
    <main>
        <button on:click={roll}>Click to roll dice</button>
    </main>
{/if}

<style>

    main {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        text-align: center;
        justify-content: center;
    }

    button {
        color: var(--color);
        background: transparent;
        font-size: 2rem;
    }

</style>