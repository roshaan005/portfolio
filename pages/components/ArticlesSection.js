import React from 'react'
import ArticleCard from './ArticleCard'

function ArticlesSection() {
    const articles = [{title:'Demystifying the blockchain',description:'A simple and easy to grasp explanation of how blockchain works',date:'May 2, 2022',icon:'✨',link:"https://roshaan.hashnode.dev/demystifying-the-blockchain"},
    {title:'Higher-order methods in JS',description:'This is how I would explain high-order array methods to a 5-year old',date:'Apr 2, 2022',icon:'✨', link:"https://roshaan.hashnode.dev/this-is-how-i-would-explain-high-order-array-methods-to-a-5-year-old"},{
        title:'Ideation and Research',description:'Creating my portfolio :)',date:'May 26, 2022',icon:'✨',link:"https://roshaan.hashnode.dev/ideation-and-research"
    }]
  return (
    <>
    {articles.map((article) => (
<ArticleCard key={article.date} title={article.title} description={article.description} date={article.date} icon={article.icon} link={article.link}/>
))}

</>
  )
}

export default ArticlesSection