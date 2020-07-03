/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getState = /* GraphQL */ `
  query GetState($id: ID!) {
    getState(id: $id) {
      id
      name
      counties {
        items {
          id
          name
          stateId
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listStates = /* GraphQL */ `
  query ListStates(
    $filter: ModelStateFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStates(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        counties {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getCounty = /* GraphQL */ `
  query GetCounty($id: ID!) {
    getCounty(id: $id) {
      id
      name
      stateId
      state {
        id
        name
        counties {
          nextToken
        }
        createdAt
        updatedAt
      }
      measurements {
        items {
          date
          confirmedCount
          deathsCount
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listCountys = /* GraphQL */ `
  query ListCountys(
    $filter: ModelCountyFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCountys(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        stateId
        state {
          id
          name
          createdAt
          updatedAt
        }
        measurements {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getMeasurement = /* GraphQL */ `
  query GetMeasurement($id: ID!) {
    getMeasurement(id: $id) {
      date
      confirmedCount
      deathsCount
      county {
        id
        name
        stateId
        state {
          id
          name
          createdAt
          updatedAt
        }
        measurements {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listMeasurements = /* GraphQL */ `
  query ListMeasurements(
    $filter: ModelMeasurementFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMeasurements(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        date
        confirmedCount
        deathsCount
        county {
          id
          name
          stateId
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
