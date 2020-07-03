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
    $id: ID
    $filter: ModelStateFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listStates(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
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
      metrics {
        items {
          countyId
          measuredOn
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
    $id: ID
    $filter: ModelCountyFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listCountys(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
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
        metrics {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getCaseMetric = /* GraphQL */ `
  query GetCaseMetric($countyId: ID!, $measuredOn: AWSDate!) {
    getCaseMetric(countyId: $countyId, measuredOn: $measuredOn) {
      countyId
      measuredOn
      confirmedCount
      deathsCount
      createdAt
      updatedAt
    }
  }
`;
export const listCaseMetrics = /* GraphQL */ `
  query ListCaseMetrics(
    $countyId: ID
    $measuredOn: ModelStringKeyConditionInput
    $filter: ModelCaseMetricFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listCaseMetrics(
      countyId: $countyId
      measuredOn: $measuredOn
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        countyId
        measuredOn
        confirmedCount
        deathsCount
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
