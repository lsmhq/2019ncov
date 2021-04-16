import React, { Component, Children } from 'react'

export default class SildeShow extends Component {
    constructor(){
        super()
        this.state = {
            total: 0,
            current: 0,
            interval:{}
        }
    }
    componentDidMount() {
        const { children } = this.props
        this.setState({
            total: Children.count(children)
        });
        //定时轮播
        this.setState({
            interval:setInterval(this.showNext,4000)
        })
        // this.state.interval = setInterval(this.showNext,1000)
    }
    componentWillUnmount() {
        clearInterval(this.state.interval)
    }
    showNext = () => {
        const {total,current}=this.state
        this.setState({
            current:current+1===total?0:current+1
        })
    }
    render() {
        const { children } = this.props;
        const bullets = Array(this.state.total).fill("o");
        bullets[this.state.current] = "•";
        return (
            <div className="slideshow" style={{overflow:'hidden'}}>
                <div>{bullets}</div>
                {Children.toArray(children)[this.state.current]}
            </div>
        )
    }
}