import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'
import { ApolloConsumer } from 'react-apollo'
/*
  renders the category based on the current route
*/
export class Category extends Component {
  //thing = <span onClick={() => client.writeData({ data: { category.selected: this.props.Id } })}></span>
  clickSelect = id => (
    <ApolloConsumer>
      {client => (
        <div
          onClick={() =>
            client.writeData({
              data: { category: { __typename: 'Category', selected: id } }
            })
          }>
          select
        </div>
      )}
    </ApolloConsumer>
  )

  render() {
    return (
      <div className="Category">
        {this.props.Category.name}
        {this.props.Selected ? (
          <div>ooOOOoo</div>
        ) : (
          this.clickSelect(this.props.Id)
        )}
      </div>
    )
  }
}

export default withRouter(Category)
