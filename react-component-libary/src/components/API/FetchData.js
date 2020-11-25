import React, {useState, useEffect} from 'react';

export const Item = ({item}) => {
  return(  
  <li>
    <p>{item}</p>
  </li>
  )
}



export const FetchData = () => {
  const [ fetchtData, setFetchtData ] = useState([]);
  const [ errorMessage, setErrorMessage] = useState("");
  const url = `https://randomuser.me/api/`

  const fetchApi = () => {
    fetch(url, {
      //method: 'POST',
      //mode: 'cors',
      //cache: 'no-cache',
      //credentials: 'same-origin',
      //headers: {'Content-Type':'application/json'},
      //redirect: 'follow',
      //referrerPolicy: 'no-referrer',
      //body: JSON.stringify(data)
    })
      .then(response => {
        return response.json();
      })
      .then(data => {
        setFetchtData(data);
      })
      .catch(e => {
        setErrorMessage(e);
      })
  }
  useEffect(() => {
    fetchApi();  
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url])

  return (
  <ul>
    <Item  item={JSON.stringify(fetchtData)} />
    {/* { fetchtData ?
      fetchtData.map((item, i) => <Item key={i}  item={item.gender} />) 
      : "Nepodarilo sa načítať obsah"} */}
    {errorMessage}
  </ul>
  )
}