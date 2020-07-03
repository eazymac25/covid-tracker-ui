import React from 'react';
import styles from './StateList.module.css';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import {listStates} from '../../graphql/queries';
import {GraphQLResult} from '@aws-amplify/api';
import { API, graphqlOperation } from 'aws-amplify'
import { ListStatesQuery } from '../../API';

interface StateData {
  states: Array<IState>|undefined
}

interface IState {
  id: string,
  name: string,
}

export default class StateList extends React.Component<any, StateData> {
  constructor(props: any) {
    super(props);
    this.state = {states: []};
  }

  componentDidMount() {
    this.fetchStates();
  }

  fetchStates() {
    const listPromise: Promise<GraphQLResult<ListStatesQuery>> = 
      API.graphql(graphqlOperation(listStates)) as Promise<GraphQLResult<ListStatesQuery>>;
    
    listPromise
      .then(res => {
        this.setState({states: res!.data!.listStates!.items?.map(s => {
          return {id: s!.id, name: s!.name};
        })});
      })
      .catch(err => console.error(err));
  }

  render() {
    const {states} = this.state;
    const listItems = states?.map(s => <ListItem key={s.id}>{s.name}</ListItem>);
    return <div className={styles.StateList}>
    StateList Component
    <List>
      {listItems}
    </List>
  </div>
  }
}
