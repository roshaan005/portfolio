import React from 'react'
import ArticleCard from './ArticleCard'

function ArticlesSection() {
    const articles = [{title:'Demystifying the blockchain',description:'A simple and easy to grasp explanation of how blockchain works',date:'May 2, 2022',icon:'✨'},
    {title:'Higher-order methods in JS',description:'This is how I would explain high-order array methods to a 5-year old',date:'Apr 2, 2022',icon:'✨'},{
        title:'Ideation and Research',description:'Creating my portfolio :)',date:'May 26, 2022',icon:'✨'
    }]
  return (
    <>
    {articles.map((article) => (
<ArticleCard key={article.date} title={article.title} description={article.description} date={article.date} icon={article.icon}/>
))}

</>
  )
}

export default ArticlesSection