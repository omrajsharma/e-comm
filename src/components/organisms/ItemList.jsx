import React from 'react'
import { Container } from 'react-bootstrap'
import ItemCard from '../molecules/ItemCard'
import './ItemList.css'
import axios from 'axios'
import { Link } from 'react-router-dom'

function ItermList() {

  const [itemsList, setItemsList] = React.useState([]);

  React.useEffect( () => {

    //  Get API call
    // fetch("https://buy-and-sell-f5fe8-default-rtdb.asia-southeast1.firebasedatabase.app/item-list.json")
    //   .then(response => response.json())
    //   .then(data => {
    //     let itemsList = [];
    //     for (let key in data) {
    //       itemsList.push(data[key])
    //     }
    //     setItemsList(itemsList)
    //     return data;
    //   })

    
    // Get API call using axios
    axios.get("https://buy-and-sell-f5fe8-default-rtdb.asia-southeast1.firebasedatabase.app/item-list.json")
      .then(response => {
        let itemsList = [];
        for (let key in response.data) {
          itemsList.push({...response.data[key], id: key})
        }
        setItemsList(itemsList)
        console.log(itemsList)
      })
      .catch(error => {
        console.log(error)
      })


  }, [] )

  return (
    <div>
      <Container>
        <div className='item-list'>

          {
            itemsList.length === 0 
            ? <h3>No items found</h3>
            : itemsList.map((item, index) => (
              <Link to={`/product/${item.id}`} key={index}>
                <ItemCard
                  itemImg={item.itemImg}
                  itemPrice={item.itemPrice}
                  itemTitle={item.itemTitle}
                  itemDesc={item.itemDesc}
                  itemPlace={item.itemPlace}
                  itemDate={item.itemDate}
                />
              </Link>
            ))
          }

        </div>

      </Container>
    </div>
  )
}

export default ItermList