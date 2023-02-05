import React from 'react'
import axios from 'axios'
import './RecommendationList.css'
import ItemCard from '../molecules/ItemCard'
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom'


function RecommendationList() {

  const [itemsList, setItemsList] = React.useState([]);
  React.useEffect( () => {
    // Get API call using axios
    axios.get("https://buy-and-sell-f5fe8-default-rtdb.asia-southeast1.firebasedatabase.app/item-list.json")
      .then(response => {
        let itemsList = [];
        for (let key in response.data) {
          itemsList.push({...response.data[key], id: key})
        }
        setItemsList(itemsList)
      })
      .catch(error => {
        console.log(error)
      })

  }, [] )


  return (
    <div>
        <Container>
            <section className='recommendation-section'>
                <h4 className="recommendation-list-title">
                    <span>Recommendations</span>
                </h4>
                <div className="recommendation-list">
                    <div className="recommendation-list-slider">
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
                </div>
            </section>
        </Container>
    </div>
  )
}

export default RecommendationList