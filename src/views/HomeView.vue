<template>
  <div class="home">
    <PostsList :posts="posts"></PostsList>
  </div>
  
</template>

<script>
import PostsList from '../components/PostsList'
import { ref } from '@vue/reactivity';


export default {
  components: { PostsList },
 setup(){
  let posts =ref([
    {title: "post title 1",body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque rem repellat fuga, aut deleniti ab impedit hic minus blanditiis, provident possimus mollitia, labore in. Laudantium alias quidem et rem repudiandae?", id:1},
    {title: "post title 2",body: "Lorem ipsum", id:2},
    ])
    return {posts};
    
 }
}
</script>
