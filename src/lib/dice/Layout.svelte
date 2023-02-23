<script>
    
    import { settingsStore } from "$lib/settings/stores";

    let num = $settingsStore.dices;

</script>

<ul class="count-{num}">
    {#each Array(num) as _, i}
        <li class="dice-{i}">
            <div>
                <slot />
            </div>
        </li>
    {/each}
</ul>

<style lang="scss">

    ul {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: var(--100vh);
        display: flex;
        text-align: center;
        justify-content: center;
        --color: white;
    }

    li {
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        + li {
            background-color: white;
            --color: black;
        }
        div {
            flex: 0 0 auto;
            height: 100%;
            width: var(--100vh);
            position: relative;
        }
    }

    @media (orientation: landscape) {
        @media ( min-height: 50vw ){
            ul div {
                height: 50vw;
                width: 50vw;
            }
        }
    }

    @media (orientation: portrait){
        li div {
            width: 50vh;
            height: 50vh;
        }
        ul {
            flex-direction: column;
            @media ( min-height: 200vw ){
                div {
                    width: 100vw;
                    height: 100vw;
                }
            }
        }
    }

</style>