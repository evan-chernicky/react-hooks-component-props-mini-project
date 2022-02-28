import React from "react";
import Article from "./Article"


function ArticleList (posts) {


    return (

        <main>

            {renderArticles(posts)}

        </main>

    )

    function renderArticles ({posts}) {

        const mapPosts = posts.map( post => {
            
            return (
           <Article

           key = {post.id}           
           title = {post.title}
           date = {post.date}
           preview = {post.preview}
           
           />
            )

        })

        return mapPosts


    }

}



export default ArticleList