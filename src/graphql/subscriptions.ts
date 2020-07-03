/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateState = /* GraphQL */ `
  subscription OnCreateState {
    onCreateState {
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
export const onUpdateState = /* GraphQL */ `
  subscription OnUpdateState {
    onUpdateState {
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
export const onDeleteState = /* GraphQL */ `
  subscription OnDeleteState {
    onDeleteState {
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
export const onCreateCounty = /* GraphQL */ `
  subscription OnCreateCounty {
    onCreateCounty {
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
export const onUpdateCounty = /* GraphQL */ `
  subscription OnUpdateCounty {
    onUpdateCounty {
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
export const onDeleteCounty = /* GraphQL */ `
  subscription OnDeleteCounty {
    onDeleteCounty {
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
export const onCreateCaseMetric = /* GraphQL */ `
  subscription OnCreateCaseMetric {
    onCreateCaseMetric {
      countyId
      measuredOn
      confirmedCount
      deathsCount
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateCaseMetric = /* GraphQL */ `
  subscription OnUpdateCaseMetric {
    onUpdateCaseMetric {
      countyId
      measuredOn
      confirmedCount
      deathsCount
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteCaseMetric = /* GraphQL */ `
  subscription OnDeleteCaseMetric {
    onDeleteCaseMetric {
      countyId
      measuredOn
      confirmedCount
      deathsCount
      createdAt
      updatedAt
    }
  }
`;
