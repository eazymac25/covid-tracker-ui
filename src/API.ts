/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateStateInput = {
  id?: string | null,
  name: string,
};

export type ModelStateConditionInput = {
  name?: ModelStringInput | null,
  and?: Array< ModelStateConditionInput | null > | null,
  or?: Array< ModelStateConditionInput | null > | null,
  not?: ModelStateConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type UpdateStateInput = {
  id: string,
  name?: string | null,
};

export type DeleteStateInput = {
  id: string,
};

export type CreateCountyInput = {
  id?: string | null,
  name: string,
  stateId: string,
};

export type ModelCountyConditionInput = {
  name?: ModelStringInput | null,
  stateId?: ModelIDInput | null,
  and?: Array< ModelCountyConditionInput | null > | null,
  or?: Array< ModelCountyConditionInput | null > | null,
  not?: ModelCountyConditionInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdateCountyInput = {
  id: string,
  name?: string | null,
  stateId?: string | null,
};

export type DeleteCountyInput = {
  id: string,
};

export type CreateCaseMetricInput = {
  countyId: string,
  measuredOn: string,
  confirmedCount: number,
  deathsCount: number,
};

export type ModelCaseMetricConditionInput = {
  confirmedCount?: ModelIntInput | null,
  deathsCount?: ModelIntInput | null,
  and?: Array< ModelCaseMetricConditionInput | null > | null,
  or?: Array< ModelCaseMetricConditionInput | null > | null,
  not?: ModelCaseMetricConditionInput | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateCaseMetricInput = {
  countyId: string,
  measuredOn: string,
  confirmedCount?: number | null,
  deathsCount?: number | null,
};

export type DeleteCaseMetricInput = {
  countyId: string,
  measuredOn: string,
};

export type ModelStateFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelStateFilterInput | null > | null,
  or?: Array< ModelStateFilterInput | null > | null,
  not?: ModelStateFilterInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelCountyFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  stateId?: ModelIDInput | null,
  and?: Array< ModelCountyFilterInput | null > | null,
  or?: Array< ModelCountyFilterInput | null > | null,
  not?: ModelCountyFilterInput | null,
};

export type ModelStringKeyConditionInput = {
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type ModelCaseMetricFilterInput = {
  countyId?: ModelIDInput | null,
  measuredOn?: ModelStringInput | null,
  confirmedCount?: ModelIntInput | null,
  deathsCount?: ModelIntInput | null,
  and?: Array< ModelCaseMetricFilterInput | null > | null,
  or?: Array< ModelCaseMetricFilterInput | null > | null,
  not?: ModelCaseMetricFilterInput | null,
};

export type CreateStateMutationVariables = {
  input: CreateStateInput,
  condition?: ModelStateConditionInput | null,
};

export type CreateStateMutation = {
  createState:  {
    __typename: "State",
    id: string,
    name: string,
    counties:  {
      __typename: "ModelCountyConnection",
      items:  Array< {
        __typename: "County",
        id: string,
        name: string,
        stateId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateStateMutationVariables = {
  input: UpdateStateInput,
  condition?: ModelStateConditionInput | null,
};

export type UpdateStateMutation = {
  updateState:  {
    __typename: "State",
    id: string,
    name: string,
    counties:  {
      __typename: "ModelCountyConnection",
      items:  Array< {
        __typename: "County",
        id: string,
        name: string,
        stateId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteStateMutationVariables = {
  input: DeleteStateInput,
  condition?: ModelStateConditionInput | null,
};

export type DeleteStateMutation = {
  deleteState:  {
    __typename: "State",
    id: string,
    name: string,
    counties:  {
      __typename: "ModelCountyConnection",
      items:  Array< {
        __typename: "County",
        id: string,
        name: string,
        stateId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateCountyMutationVariables = {
  input: CreateCountyInput,
  condition?: ModelCountyConditionInput | null,
};

export type CreateCountyMutation = {
  createCounty:  {
    __typename: "County",
    id: string,
    name: string,
    stateId: string,
    state:  {
      __typename: "State",
      id: string,
      name: string,
      counties:  {
        __typename: "ModelCountyConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    metrics:  {
      __typename: "ModelCaseMetricConnection",
      items:  Array< {
        __typename: "CaseMetric",
        countyId: string,
        measuredOn: string,
        confirmedCount: number,
        deathsCount: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateCountyMutationVariables = {
  input: UpdateCountyInput,
  condition?: ModelCountyConditionInput | null,
};

export type UpdateCountyMutation = {
  updateCounty:  {
    __typename: "County",
    id: string,
    name: string,
    stateId: string,
    state:  {
      __typename: "State",
      id: string,
      name: string,
      counties:  {
        __typename: "ModelCountyConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    metrics:  {
      __typename: "ModelCaseMetricConnection",
      items:  Array< {
        __typename: "CaseMetric",
        countyId: string,
        measuredOn: string,
        confirmedCount: number,
        deathsCount: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteCountyMutationVariables = {
  input: DeleteCountyInput,
  condition?: ModelCountyConditionInput | null,
};

export type DeleteCountyMutation = {
  deleteCounty:  {
    __typename: "County",
    id: string,
    name: string,
    stateId: string,
    state:  {
      __typename: "State",
      id: string,
      name: string,
      counties:  {
        __typename: "ModelCountyConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    metrics:  {
      __typename: "ModelCaseMetricConnection",
      items:  Array< {
        __typename: "CaseMetric",
        countyId: string,
        measuredOn: string,
        confirmedCount: number,
        deathsCount: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateCaseMetricMutationVariables = {
  input: CreateCaseMetricInput,
  condition?: ModelCaseMetricConditionInput | null,
};

export type CreateCaseMetricMutation = {
  createCaseMetric:  {
    __typename: "CaseMetric",
    countyId: string,
    measuredOn: string,
    confirmedCount: number,
    deathsCount: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateCaseMetricMutationVariables = {
  input: UpdateCaseMetricInput,
  condition?: ModelCaseMetricConditionInput | null,
};

export type UpdateCaseMetricMutation = {
  updateCaseMetric:  {
    __typename: "CaseMetric",
    countyId: string,
    measuredOn: string,
    confirmedCount: number,
    deathsCount: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteCaseMetricMutationVariables = {
  input: DeleteCaseMetricInput,
  condition?: ModelCaseMetricConditionInput | null,
};

export type DeleteCaseMetricMutation = {
  deleteCaseMetric:  {
    __typename: "CaseMetric",
    countyId: string,
    measuredOn: string,
    confirmedCount: number,
    deathsCount: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetStateQueryVariables = {
  id: string,
};

export type GetStateQuery = {
  getState:  {
    __typename: "State",
    id: string,
    name: string,
    counties:  {
      __typename: "ModelCountyConnection",
      items:  Array< {
        __typename: "County",
        id: string,
        name: string,
        stateId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListStatesQueryVariables = {
  id?: string | null,
  filter?: ModelStateFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListStatesQuery = {
  listStates:  {
    __typename: "ModelStateConnection",
    items:  Array< {
      __typename: "State",
      id: string,
      name: string,
      counties:  {
        __typename: "ModelCountyConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetCountyQueryVariables = {
  id: string,
};

export type GetCountyQuery = {
  getCounty:  {
    __typename: "County",
    id: string,
    name: string,
    stateId: string,
    state:  {
      __typename: "State",
      id: string,
      name: string,
      counties:  {
        __typename: "ModelCountyConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    metrics:  {
      __typename: "ModelCaseMetricConnection",
      items:  Array< {
        __typename: "CaseMetric",
        countyId: string,
        measuredOn: string,
        confirmedCount: number,
        deathsCount: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListCountysQueryVariables = {
  id?: string | null,
  filter?: ModelCountyFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListCountysQuery = {
  listCountys:  {
    __typename: "ModelCountyConnection",
    items:  Array< {
      __typename: "County",
      id: string,
      name: string,
      stateId: string,
      state:  {
        __typename: "State",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      metrics:  {
        __typename: "ModelCaseMetricConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetCaseMetricQueryVariables = {
  countyId: string,
  measuredOn: string,
};

export type GetCaseMetricQuery = {
  getCaseMetric:  {
    __typename: "CaseMetric",
    countyId: string,
    measuredOn: string,
    confirmedCount: number,
    deathsCount: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListCaseMetricsQueryVariables = {
  countyId?: string | null,
  measuredOn?: ModelStringKeyConditionInput | null,
  filter?: ModelCaseMetricFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListCaseMetricsQuery = {
  listCaseMetrics:  {
    __typename: "ModelCaseMetricConnection",
    items:  Array< {
      __typename: "CaseMetric",
      countyId: string,
      measuredOn: string,
      confirmedCount: number,
      deathsCount: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type OnCreateStateSubscription = {
  onCreateState:  {
    __typename: "State",
    id: string,
    name: string,
    counties:  {
      __typename: "ModelCountyConnection",
      items:  Array< {
        __typename: "County",
        id: string,
        name: string,
        stateId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateStateSubscription = {
  onUpdateState:  {
    __typename: "State",
    id: string,
    name: string,
    counties:  {
      __typename: "ModelCountyConnection",
      items:  Array< {
        __typename: "County",
        id: string,
        name: string,
        stateId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteStateSubscription = {
  onDeleteState:  {
    __typename: "State",
    id: string,
    name: string,
    counties:  {
      __typename: "ModelCountyConnection",
      items:  Array< {
        __typename: "County",
        id: string,
        name: string,
        stateId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateCountySubscription = {
  onCreateCounty:  {
    __typename: "County",
    id: string,
    name: string,
    stateId: string,
    state:  {
      __typename: "State",
      id: string,
      name: string,
      counties:  {
        __typename: "ModelCountyConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    metrics:  {
      __typename: "ModelCaseMetricConnection",
      items:  Array< {
        __typename: "CaseMetric",
        countyId: string,
        measuredOn: string,
        confirmedCount: number,
        deathsCount: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateCountySubscription = {
  onUpdateCounty:  {
    __typename: "County",
    id: string,
    name: string,
    stateId: string,
    state:  {
      __typename: "State",
      id: string,
      name: string,
      counties:  {
        __typename: "ModelCountyConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    metrics:  {
      __typename: "ModelCaseMetricConnection",
      items:  Array< {
        __typename: "CaseMetric",
        countyId: string,
        measuredOn: string,
        confirmedCount: number,
        deathsCount: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteCountySubscription = {
  onDeleteCounty:  {
    __typename: "County",
    id: string,
    name: string,
    stateId: string,
    state:  {
      __typename: "State",
      id: string,
      name: string,
      counties:  {
        __typename: "ModelCountyConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    metrics:  {
      __typename: "ModelCaseMetricConnection",
      items:  Array< {
        __typename: "CaseMetric",
        countyId: string,
        measuredOn: string,
        confirmedCount: number,
        deathsCount: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateCaseMetricSubscription = {
  onCreateCaseMetric:  {
    __typename: "CaseMetric",
    countyId: string,
    measuredOn: string,
    confirmedCount: number,
    deathsCount: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateCaseMetricSubscription = {
  onUpdateCaseMetric:  {
    __typename: "CaseMetric",
    countyId: string,
    measuredOn: string,
    confirmedCount: number,
    deathsCount: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteCaseMetricSubscription = {
  onDeleteCaseMetric:  {
    __typename: "CaseMetric",
    countyId: string,
    measuredOn: string,
    confirmedCount: number,
    deathsCount: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};
