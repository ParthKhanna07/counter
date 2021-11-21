import React, { Component } from 'react'
import axios from 'axios'
import Loader from './loader';


export default class Counter extends Component {
  constructor (props) {
    super(props)
    this.state = {
      count: 1,
      load: false,

      isEditing: false
    }
  }

  componentDidMount () {
    

   
    const url =
      'https://interview-8e4c5-default-rtdb.firebaseio.com/front-end/parthkhanna.json'

    axios
      .get(url)
      .then(result => {
        this.setState({ count: result.data ? result.data : 1 })
        //console.log(result.data)
      })
      .catch(error => {
        console.log(error)
      })
      .finally(() => {
        //console.log("i should go second");
      })
      
  }

  handleChange (e) {
    //console.log(typeof(e.target.value))
    this.setState({ count: parseInt(e.target.value) })
  }

  handleKeyDown = event => {
    this.setState({ load: true })
    
    if (event.key === 'Enter') {
      const url =
        'https://interview-8e4c5-default-rtdb.firebaseio.com/front-end.json'
      var post = this.state.count

      const params = JSON.stringify({
        parthkhanna: post
      })
      this.setState({ load: true })
      axios
        .put(url, params, {
          headers: {
            'content-type': 'application/json; charset=utf-8'
          }
        })
        .then(result => {
          // console.log(result)
          // console.log(this.state.count)
        })
        .catch(error => {
          console.log(error)
        })
      //this.setState({ load: false })
      this.setState({ count: this.state.count })
      this.setState({ isEditing: false })
    }
  }

  handleIncrement = e => {
  
    this.setState({load: true})
    const url =
      'https://interview-8e4c5-default-rtdb.firebaseio.com/front-end.json'

    let post = this.state.count != 1000 ? this.state.count + 1 : 1000

    const params = JSON.stringify({
      parthkhanna: post
    })      
     axios.put(url, params, {
        headers: {
          'content-type': 'application/json; charset=utf-8'
        }
      })
      .then(result => {
        // console.log(result)
        // console.log(result.data)
      })
      .catch(error => {
        console.log(error)
      })
      .finally(() => {
        //console.log("i should go second");
      })

    this.setState({ count: post })
   
  }

  handleDecrement = e => {
    this.setState({ load: true })
    
   

    const url =
      'https://interview-8e4c5-default-rtdb.firebaseio.com/front-end.json'
    let post = this.state.count != 1 ? this.state.count - 1 : 1

    const params = JSON.stringify({
      parthkhanna: post
    })

    this.setState({ load: true })

    // console.log(user); console.log(post);
    axios
      .put(url, params, {
        headers: {
          'content-type': 'application/json'
        }
      })
      .then(result => {})
      .catch(error => {
        console.log(error)
      })

    //this.setState({ load: false })

    this.setState({ count: post })
  }

  render () {
    return (
      <div
        className='container'
        style={{
          position: 'absolute',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)'
        }}
      >
        <div
          style={{
            padding: '10px',
            height: '56px',
            width: '180px',
            backgroundColor: 'white'
          }}
        >
          {this.state.load ? (
            <div
              style={{
                textAlign: 'left',
                marginBottom: '5px',
                height: '16px',
                fontSize: '12px',
                fontWeight: '500'
              }}
            >
             
                    <Loader /> Saving counter value
               
            </div>
          ) : (
            <span></span>
          )}
          <div
            className='row'
            style={{
              border: '1px solid #B24242',

              borderBottomLeftRadius: '8px',
              borderBottomRightRadius: '8px',
              borderTopRightRadius: '8px',
              borderTopLeftRadius: '8px',
              height: '100%',

              display: 'flex'
            }}
          >
            <button
              id='button3'
              style={{
                fontSize: '21px',
                fontWeight: '900',
                width: '60px',
                height: '56px',

                borderBottomLeftRadius: '8px',

                borderTopLeftRadius: '8px'
              }}
              onClick={this.handleDecrement}
            >
              -
            </button>
            {this.state.isEditing ? (
              <input
                style={{ textAlign: 'center', width: '70px', color: 'red' }}
                type='text'
                defaultValue={this.state.count}
                onChange={this.handleChange.bind(this)}
                onKeyDown={this.handleKeyDown}
              />
            ) : (
              <button
                id='button2'
                style={{
                  textAlign: 'center',
                  width: '60px',
                  height: '56px'
                }}
                onClick={() => this.setState({ isEditing: true })}
              >
                <span style={{ fontSize: '21px', fontWeight: '900' }}>
                  {this.state.count}
                </span>
              </button>
            )}
            <button
              id='button1'
              style={{
                fontSize: '21px',
                fontWeight: '900',
                width: '60px',
                height: '56px',

                borderBottomRightRadius: '8px',
                borderTopRightRadius: '8px'
              }}
              onClick={this.handleIncrement}
            >
              +
            </button>
          </div>
          <div
            style={{
              textAlign: 'left',
              marginTop: '5px',
              height: '16px',
              fontSize: '12px',
              fontWeight: '500'
            }}
          >
            Counter Value: {this.state.count}
          </div>
        </div>
      </div>
    )
  }
}
