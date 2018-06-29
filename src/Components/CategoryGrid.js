import React, { Component } from 'react'
import { graphql, Query } from 'react-apollo'
import gql from 'graphql-tag'

import { Grid, GridColumn as Column } from '@progress/kendo-react-grid'

export class CategoryGrid extends Component {
  state = {
    lastSelectedIndex: 0,
    data: []
  }
  selectionChange = event => {
    event.dataItem = {
      ...event.dataItem,
      selected: !event.dataItem.selected
    }
    this.forceUpdate()
  }

  rowClick = event => {
    let last = this.state.lastSelectedIndex
    let current = this.data.findIndex(dataItem => dataItem === event.dataItem)

    if (!event.nativeEvent.shiftKey) {
      //TODO set last selected index
      this.lastSelectedIndex = last = current
    }

    let select = !event.dataItem.selected
    for (let i = Math.min(last, current); i <= Math.max(last, current); i++) {
      this.data[i] = { ...this.data[i], selected: select }
    }
    this.forceUpdate()
  }

  headerSelectionChange = event => {
    const checked = event.syntheticEvent.target.checked
    //WHOOOOP
    this.data.forEach(item => (item.selected = checked))
    this.forceUpdate()
  }
  render() {
    if (this.props.getState && this.props.getState.loading) {
      return <div>Loading</div>
    }

    if (this.props.getState && this.props.getState.error) {
      console.log(
        'GetState for category grid error: ' + this.props.getState.error.message
      )
      return <div>Error</div>
    }

    const state = this.props
    this.data = Array.from(this.props.allProductFamilyCategories)
    console.log('you mean THIS state!?  ' + JSON.stringify(this.data))

    return (
      <div className="CategoryGrid">
        <Grid
          data={this.data}
          selectedField="selected"
          headerSelectionValue={
            this.data.findIndex(dataItem => dataItem.selected === false) === -1
          }
          onSelectionChange={this.selectionChange}
          onHeaderSelectionChange={this.headerSelectionChange}
          onRowClick={this.rowClick}>
          <Column field="name" title="Category" />
          <Column field="discipline" title="discipline" />
          <Column field="firm.name" title="firm" />
          <Column field="selected" />
        </Grid>
      </div>
    )
  }
}

const INITIALSTATE_QUERY = gql`
  query GetCategoryGridState {
    categories @client {
      lastSelectedIndex
    }
  }
`
export default graphql(INITIALSTATE_QUERY, { name: 'getState' })(CategoryGrid)
