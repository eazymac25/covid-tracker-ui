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
export const onCreateMeasurement = /* GraphQL */ `
  subscription OnCreateMeasurement {
    onCreateMeasurement {
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
export const onUpdateMeasurement = /* GraphQL */ `
  subscription OnUpdateMeasurement {
    onUpdateMeasurement {
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
export const onDeleteMeasurement = /* GraphQL */ `
  subscription OnDeleteMeasurement {
    onDeleteMeasurement {
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
