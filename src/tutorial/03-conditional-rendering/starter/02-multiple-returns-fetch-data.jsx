import React from 'react';
const url = 'https://api.github.com/users/QuincyLarson';

const MultipleReturnsFetchData = () => {
  const [data, setData] = React.useState([]);
  const [isFetching, setIsFetching ] = React.useState(false);
  const [isError, setIsError] = React.useState(false)

  const fetchData = async() => {
    try{
      const response = await fetch(url)
      if(!response.ok){
        setIsError(true)
        setIsFetching(false);
        return
      }
      const data = await response.json();
      setData(data)  
      setIsFetching(false)
      setIsError(false)
    }catch(e){
      console.log(e.message)
    }
  }
  React.useEffect(() => {
      setIsFetching(true)
      fetchData()
      console.log(data)
  },[])

  if(isFetching){
    return <h2>Loading ...</h2>
  }
  if(isError){
    return <h2>Sorry, something went wrong ...</h2>
  }
  return (
    <div>
      <img style={{width: '150px', borderRadius:'25px'}} src={data.avatar_url} alt={data.name} />
      <h2>{data.name}</h2>
      <h4>works at {data.company}</h4>
      <p>{data.bio}</p>
    </div>
  )
};
export default MultipleReturnsFetchData;
