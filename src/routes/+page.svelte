<script>

    import Visual from "$lib/Visual.svelte";
    import { Dice } from "$lib/Dice";
    
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
            number = sequence[i];
            await Dice.delay( speed );
            speed += step;
            console.log({
                i: i,
                number: number,
                speed: speed,
            });
            document.body.style.setProperty('--speed', speed + 'ms');
            i++;
        }

        running = false;
    }

</script>

<svelte:window on:keydown={roll} on:click={roll} />

<Visual {number} />