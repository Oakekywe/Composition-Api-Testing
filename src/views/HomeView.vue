<template>
  <div class="home">
    <div v-if="showPosts">
      <PostsList :posts="posts"></PostsList>

    </div>
    <button @click="showPosts= !showPosts">Toggle post lists</button>
    <button @click="posts.pop()">Delete</button>
  </div>
  
</template>

<script>
import PostsList from '../components/PostsList'
import { ref } from '@vue/reactivity';


export default {
  components: { PostsList },
 setup(){
  let showPosts= ref(true);
  let posts =ref([
    {title: "post title 1",body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque rem repellat fuga, aut deleniti ab impedit hic minus blanditiis, provident possimus mollitia, labore in. Laudantium alias quidem et rem repudiandae?", id:1},
    {title: "post title 2",body: "Lorem ipsum", id:2},
    {title: "post title 3",body: "Lorem ipsum", id:3},
    ])
    return {posts, showPosts};
    
 }
}
</script>
