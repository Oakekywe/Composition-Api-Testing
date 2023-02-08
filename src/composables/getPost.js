import { ref } from "vue"
import {db} from '../firebase/config'

let getPost=(id)=>{
    let post= ref(null)
    let error= ref("")

    let load= async()=>{
        try{
            let doc= await db.collection("posts").doc(id).get()            
            post.value= {id:doc.id,...doc.data()}
            

            // // await new Promise((resovle, reject)=>{
            // //     setTimeout(resovle, 2500)
            // // })
            
            // let response= await fetch("http://localhost:3000/posts/"+id)
            // if(response.status===404){
            //     throw new Error("Not Found URL")
            // }
            // let data= await response.json()
            // post.value= data
        }catch(err){
            error.value= err.message
        }
    }
    return {post, error, load}
}
export default getPost;