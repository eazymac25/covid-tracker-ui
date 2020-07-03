/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createState = /* GraphQL */ `
  mutation CreateState(
    $input: CreateStateInput!
    $condition: ModelStateConditionInput
  ) {
    createState(input: $input, condition: $condition) {
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
export const updateState = /* GraphQL */ `
  mutation UpdateState(
    $input: UpdateStateInput!
    $condition: ModelStateConditionInput
  ) {
    updateState(input: $input, condition: $condition) {
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
export const deleteState = /* GraphQL */ `
  mutation DeleteState(
    $input: DeleteStateInput!
    $condition: ModelStateConditionInput
  ) {
    deleteState(input: $input, condition: $condition) {
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
export const createCounty = /* GraphQL */ `
  mutation CreateCounty(
    $input: CreateCountyInput!
    $condition: ModelCountyConditionInput
  ) {
    createCounty(input: $input, condition: $condition) {
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
export const updateCounty = /* GraphQL */ `
  mutation UpdateCounty(
    $input: UpdateCountyInput!
    $condition: ModelCountyConditionInput
  ) {
    updateCounty(input: $input, condition: $condition) {
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
export const deleteCounty = /* GraphQL */ `
  mutation DeleteCounty(
    $input: DeleteCountyInput!
    $condition: ModelCountyConditionInput
  ) {
    deleteCounty(input: $input, condition: $condition) {
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
export const createMeasurement = /* GraphQL */ `
  mutation CreateMeasurement(
    $input: CreateMeasurementInput!
    $condition: ModelMeasurementConditionInput
  ) {
    createMeasurement(input: $input, condition: $condition) {
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
export const updateMeasurement = /* GraphQL */ `
  mutation UpdateMeasurement(
    $input: UpdateMeasurementInput!
    $condition: ModelMeasurementConditionInput
  ) {
    updateMeasurement(input: $input, condition: $condition) {
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
export const deleteMeasurement = /* GraphQL */ `
  mutation DeleteMeasurement(
    $input: DeleteMeasurementInput!
    $condition: ModelMeasurementConditionInput
  ) {
    deleteMeasurement(input: $input, condition: $condition) {
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
