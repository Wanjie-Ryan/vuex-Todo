<template>

    <h4 style="color:black;">add</h4>

    <div class="add">   

        <form>

            <input type="text" v-model="title" placeholder="Add Todo..."/>
            <button type="submit">Add</button>


        </form>



    </div>
  
</template>

<script>
export default {

    name:'AddTodo'
}
</script>

<style>

</style>