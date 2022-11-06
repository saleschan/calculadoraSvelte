<script>
  import Calculadora from './Components/Calculadora.svelte';
</script>

<main>
  <Calculadora/>
</main>

<style>
  :global(body){
    background-color: black;
  }

  :root{
    --cor-fundo: #2b2b2b;
  }

  main{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
</style>
