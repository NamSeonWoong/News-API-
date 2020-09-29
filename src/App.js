import React  from 'react';
import NewsList from './components/NewsList';
import Categories from './components/Categories';

  const App = () => {
    return (
    <>
      <Categories/>
      <NewsList/>
    </>
    );
  };
// const App =() =>{
//   const [data,setData] = useState(null);
//   const onClick=async() =>{
//     try {
//       const response =await axios.get(
//         'https://newsapi.org/v2/top-headlines?country=kr&apiKey=700cddc57e6c415fb06b55ca8985b5fe',
//       );
//       setData(response.data);
//     } catch(e) {
//       console.log(e);
//     }
//   };

//   return (
//     <div>
//       <div>
//         <button onClick={onClick}>
//           불러오기
//         </button>
//       </div>
//       {data &&<textarea row={7} value={JSON.stringify(data,null,2)} readOnly={true}/>}
//     </div>
//   );
// };

export default App;