import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Items from './components/Items';
import Categories from './components/Categories';



class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      orders: [],
      currentItems: [],
      items: [
        {
          id: 1,
          title: 'Iphone 15pro Max',
          img: '15-pro-beliy.png',
          desc: ' TItanium White, 1tb',
          category: 'iphone',
          price: '549.99'
        },
        {
          id: 2,
          title: 'Iphone 15pro Max',
          img: '15-pro-cherniy.png',
          desc: ' Titanium black, 1tb',
          category: 'iphone',
          price: '549.00'
        },
        {
          id: 3,
          title: 'Iphone 15pro Max',
          img: '15-pro-siniy.png',
          desc: ' Titanium Blue, 1tb',
          category: 'iphone',
          price: '549.99'
        },
        {
          id: 4,
          title: 'Iphone 15pro Max',
          img: '15-pro-bezheviy.png',
          desc: ' Titanium Natural, 1tb',
          category: 'iphone',
          price: '549.99'
        },
        {
          id: 5,
          title: 'Samsung S23 ultra',
          img: 's23zelen.webp',
          desc: ' Nature Green, 1tb',
          category: 'samsung',
          price: '449.99'
        },
        {
          id: 6,
          title: 'Iphone 14pro Max',
          img: '14promax.jpg',
          desc: '  Deep Purple, 1tb',
          category: 'iphone',
          price: '499.99'
        }
      ]
    }
    this.state.currentItems = this.state.items
    this.addToOrder = this.addToOrder.bind(this)
    this.deleteOrder = this.deleteOrder.bind(this)
    this.chooseCategory = this.chooseCategory.bind(this)
  }
  render () {
    return (
      <div className="wrapper">
        <Header orders={this.state.orders} onDelete={this.deleteOrder}/>
        <Categories chooseCategory={this.chooseCategory}/>
        <Items items={this.state.currentItems} onAdd={this.addToOrder}/>
        <Footer/> 
      </div>
    );
  }
  
  chooseCategory(category) {
    if(category === 'all') {
      this.setState({currentItems: this.state.items})
      return
    }
  
   
    this.setState({
      currentItems: this.state.currentItems.filter(el => el.category === category)
    })
  }


  deleteOrder(id) {
    this.setState({ orders: this.state.orders.filter(el => el.id !== id)})
  }



  addToOrder(item) {
    let isInArr = false
    this.state.orders.forEach(el => {
      if (el.id === item.id)
        isInArr = true
    })
    if (!isInArr)
    this.setState({ orders: [...this.state.orders, item]})
  }
}

export default App;
