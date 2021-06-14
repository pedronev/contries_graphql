import './App.css';

import {ApolloClient, InMemoryCache, gql, useQuery} from '@apollo/client';


const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: 'https://countries.trevorblades.com'
});
const LIST_COUNTRIES = gql`
  {
    countries {
      name
      native
      emoji
      currency
      languages{
          code
          name
        }
    }
  }
`;

function App() {

   const {data, loading, error} = useQuery(LIST_COUNTRIES, {client});

console.log(data);
function getDeatils(country) {
  alert(`This country name is: ${country.name}.
        The currency is: ${country.currency}.
        The native is: ${country.native}.
        the languaje is: ${country.languages[0].name}
  `
  
  );
}
if (loading || error) {
  return <p>{error ? error.message : 'Loading...'}</p>;
}



  return ( 
    <div className="App">
        { data.countries.map(country =>{
         return ([
         <div>
           <p key={country.code}>{country.name}</p> 
          <button  onClick={() => getDeatils(country)}  >details</button>
           </div>
         
         ])
        })
        }
    </div>
  )

  


}



export default App;
