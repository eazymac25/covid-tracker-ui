import React from 'react';
import styles from './StateList.module.css';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import {listStates} from '../../graphql/queries';
import { API, graphqlOperation } from 'aws-amplify'

interface StateData {
  states: Array<String>
}

export default class StateList extends React.Component<any, StateData> {
  constructor(props: any) {
    super(props);
    this.state = {states: []};
  }

  componentDidMount() {
    this.fetchStates();
    console.log(this.state.states);
  }

  fetchStates() {
    new Promise<any>((resolve, reject) => {
      API.graphql(graphqlOperation(listStates));
    }).then(data => {
      this.setState(
        {states: data.listStates.items}
      );
      console.log(data);
    }).catch(err => console.error(err));
  }

  render() {
    return <div className={styles.StateList}>
    StateList Component
    <List>
      <ListItem>Florida</ListItem>
      <ListItem>New York</ListItem>
    </List>
  </div>
  }
}
