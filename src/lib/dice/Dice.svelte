<script>

    import Visual from "$lib/dice/Visual.svelte";
    import { Dice } from "$lib/dice/Dice.js";
    
    const dice = new Dice();
    
    let number = false;
    let sequence = false;
    let running = false;

    export let roll = async () => {
        if( running ){ return; }
        running = true;

        console.log('roll');

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

<Visual {number} finished={!running} />