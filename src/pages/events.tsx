import axios from "axios"
import { useEffect, useState } from "react"

interface Article {
    title: String,
    paragraph: String
}

export default function Events() {
    const [articles, setArticles] = useState<Article[]>([])

    useEffect(() => {
        axios.get('https://app-demo-backend.onrender.com/articles').then(
            (res) => {
                setArticles(res.data.items)
            }
        ).catch(e => {
            window.alert(e)
        })
    }, [])

    const renderArticles = () => {
        if (articles.length == 0) return <>No Articles</>
        else
            return articles.map(item => {
                return <div className="flex m-3 h-56 p-3 border rounded-xl">
                    <div className="w-1/2 bg-slate-100 ">Photo</div>
                    <div className="flex flex-col ml-2">
                        <div className="text-lg font-bold">{item.title}</div>
                        <p>{item.paragraph}</p>
                    </div>
                </div>
            })


    }

    return <>
        {renderArticles()}
    </>
}