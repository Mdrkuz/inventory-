import React, { useState } from 'react';
import './App.css';
import { connect } from 'react-redux';
import {createLine} from './app/actions/action'
import {removeLine} from './app/actions/action'
import {incrementQuantity} from './app/actions/action'
import {decrementQuantity} from './app/actions/action'
import {findProduct} from './app/actions/action'
import {showAll} from './app/actions/action'
import {sortByQuantity} from './app/actions/action'




const mapStateToProps = (state) => {
  const filtered = state.line.productName ? state.line.list.filter(it => it.name.includes(state.line.productName)) : state.line.list
  const sorted = state.line.mode ? [...filtered].sort((a, b) => {
    return a.quantity - b.quantity 
  }) : filtered ;
  console.log(state);
  return {
    list: sorted,
  }
}

const mapDispatchToProps = dispatch => ({
  create: (name, price, quantity) => dispatch(createLine(name, price, quantity)),
  delete: line => dispatch(removeLine(line)),
  increment: line => dispatch(incrementQuantity(line)),
  decrement: line => dispatch(decrementQuantity(line)),
  find: productName => dispatch(findProduct(productName)),
  all: () => dispatch(showAll()) ,
  sort: () => dispatch(sortByQuantity())
})

function App(props) {
  const [name, changeNameText] = useState('')
  const changeName = event => changeNameText(event.target.value)
  const [price, changePriceText] = useState('')
  const changePrice = event => changePriceText(event.target.value)
  const [quantity, changeQuantityText] = useState('')
  const changeQuantity = event => changeQuantityText(event.target.value)
  const [productName, changeProductText] = useState('')
  const changeProduct = event => changeProductText(event.target.value)

  return (
    <div className="App">
      <div align = "right">
        <input type = 'text' placeholder = 'product name' onChange={changeProduct} value={productName}></input> 
        <button onClick={() => { 
            changeProductText('')
            props.find(productName)    
        }}> find </button>
      </div>

      <input type ='text' placeholder ='name' onChange={changeName} value={name}/>
      <input type ='text' placeholder ='price' onChange={changePrice} value={price}/>
      <input type ='text' placeholder ='quantity' onChange={changeQuantity} value={quantity}/>

      <button onClick={() => {
        changeNameText('')
        changePriceText('')
        changeQuantityText('')
        props.create(name, price, quantity);
      }}> add </button> 
      <button onClick={() => {
        props.all();
      }}>all</button>

      <table align="center" className = 'table'>
        <tr>
          <th className = "TH"></th>
          <th className = "TH">Name </th>
          <th className = "TH">Price </th>
          <th className = "TH"><button onClick={() => {
            props.sort()
          }}> Quantity </button> </th>
          <th className = "TH">Id</th> 
          <th className = "TH"> </th>
        </tr>
          {props.list.map(it => 
            <tr>
              <td className="TD">{it.id}</td>
              <td className="TD">{it.name}</td>
              <td className="TD">{it.price}</td>
              <td className="TD">{it.quantity}
                <button onClick ={() => {
                  props.decrement(it)
                }}>-</button>
                <button onClick ={() => {
                  props.increment(it)
                }}>+</button>
              </td>
              <td className="TD">{it.code}</td>
              <td className="TD"> <button onClick={() => props.delete(it)}>delete</button></td>
              
            </tr>  
          )}
      </table>
    </div>
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
