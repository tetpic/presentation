import BlogItem from "./blogItem";
import {blogsObject, BlogObject} from "./blogsObject"

export default function Blog () {
    return <>
    {
        blogsObject.map((el: BlogObject)=> {
            return(<BlogItem {...el}/>)

        })
    }
    </>
}