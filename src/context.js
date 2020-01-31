import React from 'react';
import config from './config';

export const Context = React.createContext({
 catsQ: null,
 dogsQ: null,
 adoptCat: () => {},
 adoptDog: () => {},
 fetchDogs: () => {},
 fetchCats: () => {},
})

export class ContextProvider extends React.Component {
  state = {
        catsQ: null,
        dogsQ: null
      }
      
      componentDidMount (){
        this.setState({ catsQ: this.fetchCats() })
        this.setState({ dogsQ: this.fetchDogs() })
      }

      fetchCats=()=>{
          fetch(`${config.API_ENDPOINT}/cats`, {
            method: 'GET'
          })
            .then(res => res.json())
            .then(res => {
              this.setState({
                catsQ: res
              })
            })
            
        }
      fetchDogs=()=>{
          fetch(`${config.API_ENDPOINT}/dogs`, {
            method: 'GET'
          })
            .then(res => res.json())
            .then(res => {
              this.setState({
                dogsQ: res
              })
            })
            
        }
      
      adoptDog=()=>{
        fetch(`${config.API_ENDPOINT}/dogs`,{
          method: 'DELETE'
        })
        .then( () => {
            this.fetchDogs();       
        })
        .catch(err=>{
          console.log('Error!', err);
        })
      }
      adoptCat=()=>{
        fetch(`${config.API_ENDPOINT}/cats`,{
          method: 'DELETE'
        })
        .then( () => {
            this.fetchCats();
        })
        .catch(err=>{
          console.log('Error!', err);
        })
      }
    render(){
        const value = {
            dogsQ: this.state.dogsQ,
            catsQ: this.state.catsQ,
            adoptCat: this.adoptCat,
            adoptDog: this.adoptDog,
            fetchCats: this.fetchCats,
            fetchDogs: this.fetchDogs

        }
        return (
            <Context.Provider value ={value}>
                {this.props.children}
            </Context.Provider>
        )
    }
  }