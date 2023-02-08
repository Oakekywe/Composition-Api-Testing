import { ref } from "vue"
import {db} from "../firebase/config"

let getPosts=()=>{
    let posts= ref([])
    let error= ref("")
    let load= async ()=>{
        try{
            let res= await db.collection("posts").orderBy("create_at", "desc").get()
                posts.value= res.docs.map((doc)=>{
                return {id:doc.id, ...doc.data()}
            })


            // // await new Promise((resovle, reject)=>{
            // //     setTimeout(resovle, 2500)
            // // })

            // let response= await fetch("http://localhost:3000/posts")
            // if(response.status=== 404){
            //     throw new Error("Not Found URL")
            // }
            // let datas= await response.json()
            // posts.value= datas

        }catch(err){
            error.value= err.message
        }
    }
    return {posts, error, load}
}
export default getPosts