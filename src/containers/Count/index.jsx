import React, { Component } from 'react'
// 引入actionCreateor，专门用于创建action对象
import { connect } from 'react-redux'
import { createIncrementAction, createDecrementAction, createIncrementAsyncAction } from '../../redux/actions/count'

// 定义UI组件
class Count extends Component {

  increment = () => {
    const { value } = this.selectNumber
    this.props.increment(value*1)
  }

  decrement = () => {
    const { value } = this.selectNumber
    this.props.decrement(value*1)
  }

  incrementIfOdd = () => {
    const { value } = this.selectNumber
    if (this.props.count %2 !==0) {
      this.props.increment(value*1)
    }
  }

  incrementAsync = () => {
    const { value } = this.selectNumber
    this.props.incrementAsync(value*1, 500)
  }
  render () {
    return (
      <div>
        <h1>当前求和为：{this.props.count},下方组件总人数为：{this.props.renshu}</h1>
        <select ref={c => this.selectNumber = c}>
          <option value="1">1</option>&nbsp;
          <option value="2">2</option>&nbsp;
          <option value="3">3</option>&nbsp;
        </select>
        <button onClick={this.increment}>+</button>&nbsp;
        <button onClick={this.decrement}>-</button>&nbsp;
        <button onClick={this.incrementIfOdd}>当前求和为奇数再加</button>&nbsp;
        <button onClick={this.incrementAsync}>异步加</button>&nbsp;
      </div>
    )
  }
}

// 引入connect用于链接UI组件与redux
// mapStateToProps函数返回的对象中的key就作为传递给UI组件props的key，value就作为传递给UI组件props的value-状态

// const mapStateToProps = state => ({ count: state })

// mapDispatchToProps函数返回的对象中的key就作为传递给UI组件props的key，value就作为传递给UI组件props的value-操作状态的方法

// const mapDispatchToProps = dispatch => ({
//   increment: data => dispatch(createIncrementAction(data)),
//   decrement: data => dispatch(createDecrementAction(data)),
//   incrementasync: (data, time) => dispatch(createIncrementAsyncAction(data, time))
// })

// 使用connect()()创建并暴露一个Count的容器组件

// mapDispatchToProps的简写
export default connect(state => ({ count: state.he, renshu:state.rens.length }), 
{
  increment:createIncrementAction,
  decrement:createDecrementAction,
  incrementasync:createIncrementAsyncAction
}
)(Count)
