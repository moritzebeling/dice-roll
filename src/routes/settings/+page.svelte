<script>
    
    import { settingsStore } from "$lib/stores";

    settingsStore.subscribe( s => {
        console.log(s);
    });

</script>

<main>
    <form>

        <label>
            <p>Number of dices</p>
            <select bind:value={$settingsStore.dices}>
                <option value={1}>1</option>
                <option value={2}>2</option>
            </select>
        </label>

        <label class:color={$settingsStore.colors}>
            <p>Color mode</p>
            <input type="checkbox" bind:checked={$settingsStore.colors} />
        </label>
        
    </form>
    <a href="/" class="button">Save</a>
</main>

<style>

    main {
        height: var(--100vh);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    
    form {
        width: 100%;
        max-width: 600px;
        padding: 2rem;
    }

    label {
        background-color: #fff;
        color: #000;
        margin: 10px 0;
        padding: 0.5em 1em;
        border-radius: 44em;
        display: flex;
        font-size: 22px;
        align-items: center;
    }

    label.color {
        background: linear-gradient(90deg, #f00, #ff0, #0f0, #0ff, #00f, #f0f, #f00, #ff0);
        background-size: 800% 100%;
        animation: gradient 10s linear infinite;
    }

    @keyframes gradient {
        from {
            background-position: 0% 100%;
        }
        to {
            background-position: 100% 100%;
        }
    }

    label p {
        flex: 1;
    }

    select {
        min-width: 2em;
        text-align: right;
        text-align-last: right; 
    }

</style>