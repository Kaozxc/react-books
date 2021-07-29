import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react';
import Article from './Article';

const quotes = [
  'It was a pleasure to burn',
  'Fear is the mind-killer. Fear is the little-death that brings total obliteration. I will face my fear. I will permit it to pass over me and through me.',
  'It’s still magic even if you know how it’s done',
]

const articles = [
  {
  title: "Never going to give you up",
  content: "The content of the article",
  image: "https://i.ytimg.com/vi/iik25wqIuFo/maxresdefault.jpg"
  }
]

function App() {
  return (
    <div>
    {articles.map(article => (
      <Article 
      title={article.title}
      content= {article.content}
      image={article.image}
      />
    ))}
    </div>
  );
}

export default App;
