<template>
    <div class="card">
        <input @keyup.enter="newCard" v-model="cardContenu" placeholder="Add a card" />
    </div>
</template>
<script>
export default {
    name: 'CardName',
    data(){
        return {
            cardContenu: '',
        }
    },
    methods: {
        newCard() {
            if (this.cardContenu.trim() !== ''){
                const card = {
                    id: '',
                    contenu: this.cardContenu, 
                };
                this.$emit('new-card',card);
                this.cardContenu='';
            }
        }
    }
}
</script>
<style>
    .card input{
        border: solid 1px black;
        padding-left: 0.25rem;
        padding-right: 1rem;
        padding-top: 0.5rem;
        box-shadow: 6px 6px 0px rgba(0, 0, 0, 0.25) ;
        margin: auto;
    }
    .card input:hover{
        border: 2px solid var(--primary);
    }
</style>