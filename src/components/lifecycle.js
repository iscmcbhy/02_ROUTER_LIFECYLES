import React, { PureComponent } from 'react';

// Class-based Component
class LifeCycle extends PureComponent {

    // Steps
    
    // 1 get default props

    // 2 set default state

    state = {
        title: 'Life Cycles'
    }

    // // 3 Before Render
    // // This will execute first
    // componentWillMount(){
    //     console.log("Before render")
    // }

    // // 5 after jsx
    // // Always execute last
    // componentDidMount(){
    //     console.log('after render');
    //     document.querySelector('h3').style.color = 'red';
    // }

    // // Run whenever there is update in render()
    // componentDidUpdate(){
    //     console.log('Render Updated')
    // }

    // boolean for you to tell if update is necessary
    // you can control to update or not to update
    // shouldComponentUpdate(nextProps, nextState){
    //     // console.log(nextState);
    //     if(nextState.title === this.state.title){
    //         return false;
    //     }
        
    //     return true;
    // }

    // // Listening for new props
    // componentWillReceiveProps(){
    //     console.log('Before receive props');
    // }

    // // Listening whenever the render is unmounted
    // componentWillUnmount(){
    //     console.log('Unmount')
    // }

    // // 4 render jxs

    render(){
        console.log('Main Render')
        return (
            <div>
                <h3> {this.state.title} </h3>
                <div onClick={
                    () => this.setState({
                        title:'Clicked!'
                    })
                }
                > Click To Change </div>
            </div>
        )
    }
}

export default LifeCycle;