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
export const createCaseMetric = /* GraphQL */ `
  mutation CreateCaseMetric(
    $input: CreateCaseMetricInput!
    $condition: ModelCaseMetricConditionInput
  ) {
    createCaseMetric(input: $input, condition: $condition) {
      countyId
      measuredOn
      confirmedCount
      deathsCount
      createdAt
      updatedAt
    }
  }
`;
export const updateCaseMetric = /* GraphQL */ `
  mutation UpdateCaseMetric(
    $input: UpdateCaseMetricInput!
    $condition: ModelCaseMetricConditionInput
  ) {
    updateCaseMetric(input: $input, condition: $condition) {
      countyId
      measuredOn
      confirmedCount
      deathsCount
      createdAt
      updatedAt
    }
  }
`;
export const deleteCaseMetric = /* GraphQL */ `
  mutation DeleteCaseMetric(
    $input: DeleteCaseMetricInput!
    $condition: ModelCaseMetricConditionInput
  ) {
    deleteCaseMetric(input: $input, condition: $condition) {
      countyId
      measuredOn
      confirmedCount
      deathsCount
      createdAt
      updatedAt
    }
  }
`;
