import React, { useState, useEffect } from 'react'
import '../styles/App.css';

const App = () => {
  const [category, setCategory] = useState("general");
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState();
  
  useEffect(()=>{
    async function fetchNews(){
      try{
      setLoading(true);
      const response=await fetch(`https://gnews.io/api/v4/top-headlines?category=${category}&apikey=[API_KEY]&max=10&lang=en`);
      
      const data=await response.json();
      setNewsData(data.articles);
      setLoading(false);
      }catch(err){
        console.log(err);
      }
    }
    fetchNews(); 
  },[category])
  
  const handleCategoryChange=(event)=>{
    setCategory(event.target.value);
  }

  return (
    <div id="main">
      <h1 className='heading'>Top 10 {category} news.</h1>
      <select value={category} onChange={handleCategoryChange}>
        <option value="general">General</option>
        <option value="business">Business</option>
        <option value="sports">Sports</option>
        <option value="technology">Technology</option>
        <option value="world">World</option>
        <option value="entertainment">Entertainment</option>
        <option value="science">Science</option>
      </select>

{loading ? (<p className='loader'>Loading...</p>):(
      <ol>
        <li key="">
          <img className='news-img' src="" alt=""/>
          <section className='new-title-content-author'>
            <h3 className='news-title'>news title</h3>
            <section className='new-content-author'>
              <p className='news-description'>news description</p>
              <p className='news-source'><strong>Source:</strong> source name</p>
            </section>
          </section>
        </li>
      </ol>
     )}
    </div>
  )
}


export default App;
