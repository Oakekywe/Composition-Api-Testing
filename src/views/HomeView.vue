<template>
  <div class="home">
    <input type="text" v-model="search">
    <p>search - {{search}}</p>
    <div v-for="name in filteredName" :key="name">
      <p>{{name}}</p>
    </div>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import { computed } from '@vue/runtime-core'

export default {
 setup(){
  let search= ref("")
  let names= ref(["aung aung", "kyaw kyaw", "Zaw zaw", "khine khine"])
  let filteredName= computed(()=>{
    return names.value.filter(name=>{
      return name.includes(search.value)
    })
  })

  return {names, search, filteredName}
 }
}
</script>
