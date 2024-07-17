<template>
    <div class="premier">
        <h4>{{ name }}</h4>
        <ul>
            <li v-for="card in cards" :key="card.id">
                <input @keyup.enter="updateCard(card.id, $event)" :value="card.contenu"/>
                <button @click="deleteCard(card.id)">DELETE</button>
            </li>
        </ul>
        <div class="cards">
            <CardName @new-card="addNewCard" />
        </div>
    </div>
</template>
<script>
import CardName from "./CardName.vue"
export default {
    name: 'CardCom',
    props: {
        name: {
            type: String,
            default: ''
        }
    },
    data(){
        return {
            cards: [],
        }
    },
    methods: {
        addNewCard(card){
            this.cards.push(card);
        },
        updateCard(cardID, event){
            const cardin = this.cards.findIndex(card => card.id === cardID);
            if(cardin !== -1){
                this.cards.splice(cardin, 1, { ...this.cards[cardin], contenu: event.target.value });
                console.log("Done",this.cards[cardin]);
            }
        },
        deleteCard(cardId) {
            this.cards = this.cards.filter(card => card.id !== cardId);
        }
    },
    components: {
        CardName
    }
}
</script>
<style>
    body{
        background-color: #ec74eb;
    }
    .cards {
        margin-bottom: 10px
    }
    .premier {
        border: solid 1px black;
        padding: 1rem;
        box-shadow: 6px 6px 0px rgba(0, 0, 0, 0.25) ;
        margin: auto;
        background-color: #f4ddf4;
    }
    .premier:hover{
        border: 2px solid var(--primary);
    }
    .premier h4 {
        border-bottom: 1px solid var(--davys-grey);
        padding-bottom: 1rem;
        margin-bottom: 0.5rem;
    }
</style>