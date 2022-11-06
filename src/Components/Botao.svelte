<script>
    export let texto = ''
    export let triplo = false
    export let duplo = false
    export let operacao = false
    export let destaque = false
    export let onClick = (valor) => {}

</script>

<button class=botao class:triplo class:duplo class:operacao class:destaque on:click={() => onClick(texto)}>
    {texto}
</button>

<style>
    .botao{
        height: 2.2em;
        width: 2.2em;
        margin: 0;
        border: 1px solid var(--cor-fundo);
        border-radius: 2px;
        flex-basis: 25%;
    }

    .triplo{
       flex-basis: 75%;
    }

    .duplo{
        flex-basis: 50%;
    }

    .operacao{
        background-color: darkorchid;
        color: white;
    }

    .destaque{
        background-color: blueviolet;
        color: white;
    }
</style>