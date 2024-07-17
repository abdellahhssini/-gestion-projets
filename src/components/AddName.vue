<template>
    <input @keyup.enter="newName" v-model="nameContenu" placeholder="Add a name" />
</template>
<script>
    export default {
        name: 'AddName',
        data(){
            return{
                nameContenu: '',
            }
        },
        methods: {
            newName() {
                if (this.nameContenu.trim() !== ''){
                    const name = {
                        id: Date.now(),
                        contenu: this.nameContenu, 
                    };
                    this.$emit('new-name',name);
                    this.nameContenu='';
                }
            }
        }
    }
</script>