<template>
    <div v-for="nam in names" :key="nam.id">
        <CardCom :name="nam.contenu"/>
    </div>
    <div>
        <AddName @new-name="addNewName"/>
    </div>
</template>
<script>
import AddName from "./AddName.vue"
import CardCom from './CardCom.vue'
export default {
    name: 'AffichTable',
    components:{
        AddName,
        CardCom
    },
    data(){
        return{
            names:[],
        }
    },
    methods:{
        addNewName(name){
            this.names.push(name);
        }
    }
}
</script>