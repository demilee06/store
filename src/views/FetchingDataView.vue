<template>
    <div>
        {{$store.state.aboutMe}}
    </div>
</template>
 <script>
 export default{
    computed:{
        getAboutMe(){
            return this.$store.dispatch("getAboutMe")
        }
    },
    mounted(){
        this.getAboutMe

    },
 }
</script>
<style>

</style>