import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type AddGatewayKeyInput = {
  gatewayId: Scalars['ID']['input'];
  name: Scalars['String']['input'];
};

export type AddGatewayKeyPayload = {
  __typename?: 'AddGatewayKeyPayload';
  gatewayKey?: Maybe<GatewayKey>;
  key?: Maybe<Scalars['String']['output']>;
};

export type CreateGatewayInput = {
  name: Scalars['String']['input'];
};

export type CreateGatewayPayload = {
  __typename?: 'CreateGatewayPayload';
  gateway?: Maybe<Gateway>;
};

export type CreateInferenceEndpointInput = {
  deploymentName?: InputMaybe<Scalars['String']['input']>;
  endpoint: Scalars['String']['input'];
  key?: InputMaybe<Scalars['String']['input']>;
  modelName?: InputMaybe<Scalars['String']['input']>;
  modelVersion?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  platform: Scalars['String']['input'];
  region?: InputMaybe<Scalars['String']['input']>;
};

export type CreateInferenceEndpointPayload = {
  __typename?: 'CreateInferenceEndpointPayload';
  inferenceEndpoint?: Maybe<InferenceEndpoint>;
};

export type Gateway = Node & {
  __typename?: 'Gateway';
  createdAt: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  inferenceEndpoints?: Maybe<GatewayInferenceEndpointConnection>;
  keys?: Maybe<GatewayKeyConnection>;
  name: Scalars['String']['output'];
  status: Scalars['String']['output'];
  updatedAt: Scalars['String']['output'];
};


export type GatewayInferenceEndpointsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type GatewayKeysArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type GatewayConnection = {
  __typename?: 'GatewayConnection';
  edges?: Maybe<Array<Maybe<GatewayEdge>>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type GatewayEdge = {
  __typename?: 'GatewayEdge';
  cursor: Scalars['String']['output'];
  node?: Maybe<Gateway>;
};

export type GatewayInferenceEndpointConnection = {
  __typename?: 'GatewayInferenceEndpointConnection';
  edges?: Maybe<Array<Maybe<GatewayInferenceEndpointEdge>>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type GatewayInferenceEndpointEdge = {
  __typename?: 'GatewayInferenceEndpointEdge';
  cursor: Scalars['String']['output'];
  node?: Maybe<InferenceEndpoint>;
  order: Scalars['Int']['output'];
};

export type GatewayKey = Node & {
  __typename?: 'GatewayKey';
  createdAt: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  maskedKey: Scalars['String']['output'];
  name: Scalars['String']['output'];
  status: Scalars['String']['output'];
  updatedAt: Scalars['String']['output'];
};

export type GatewayKeyConnection = {
  __typename?: 'GatewayKeyConnection';
  edges?: Maybe<Array<Maybe<GatewayKeyEdge>>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type GatewayKeyEdge = {
  __typename?: 'GatewayKeyEdge';
  cursor: Scalars['String']['output'];
  node?: Maybe<GatewayKey>;
};

export type InferenceEndpoint = Node & {
  __typename?: 'InferenceEndpoint';
  createdAt: Scalars['String']['output'];
  deploymentName?: Maybe<Scalars['String']['output']>;
  endpoint: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  modelName?: Maybe<Scalars['String']['output']>;
  modelVersion?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  platform: Scalars['String']['output'];
  region?: Maybe<Scalars['String']['output']>;
  status: Scalars['String']['output'];
  updatedAt: Scalars['String']['output'];
};

export type InferenceEndpointConnection = {
  __typename?: 'InferenceEndpointConnection';
  edges?: Maybe<Array<Maybe<InferenceEndpointEdge>>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type InferenceEndpointEdge = {
  __typename?: 'InferenceEndpointEdge';
  cursor: Scalars['String']['output'];
  node?: Maybe<InferenceEndpoint>;
};

export type LoginInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type LoginPayload = {
  __typename?: 'LoginPayload';
  token?: Maybe<Scalars['String']['output']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  _empty?: Maybe<Scalars['String']['output']>;
  addGatewayKey?: Maybe<AddGatewayKeyPayload>;
  createGateway?: Maybe<CreateGatewayPayload>;
  createInferenceEndpoint?: Maybe<CreateInferenceEndpointPayload>;
  login?: Maybe<LoginPayload>;
  logout?: Maybe<Scalars['Boolean']['output']>;
  revokeGatewayKey?: Maybe<RevokeGatewayKeyPayload>;
  updateGateway?: Maybe<UpdateGatewayPayload>;
  updateInferenceEndpoint?: Maybe<UpdateInferenceEndpointPayload>;
};


export type MutationAddGatewayKeyArgs = {
  input: AddGatewayKeyInput;
};


export type MutationCreateGatewayArgs = {
  input: CreateGatewayInput;
};


export type MutationCreateInferenceEndpointArgs = {
  input: CreateInferenceEndpointInput;
};


export type MutationLoginArgs = {
  input: LoginInput;
};


export type MutationRevokeGatewayKeyArgs = {
  input: RevokeGatewayKeyInput;
};


export type MutationUpdateGatewayArgs = {
  input: UpdateGatewayInput;
};


export type MutationUpdateInferenceEndpointArgs = {
  input: UpdateInferenceEndpointInput;
};

export type Node = {
  id: Scalars['ID']['output'];
};

export type PageInfo = {
  __typename?: 'PageInfo';
  endCursor?: Maybe<Scalars['String']['output']>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPreviousPage: Scalars['Boolean']['output'];
  startCursor?: Maybe<Scalars['String']['output']>;
};

export type Query = {
  __typename?: 'Query';
  gateways?: Maybe<GatewayConnection>;
  inferenceEndpoints?: Maybe<InferenceEndpointConnection>;
  node?: Maybe<Node>;
  viewer?: Maybe<Viewer>;
};


export type QueryGatewaysArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryInferenceEndpointsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryNodeArgs = {
  id: Scalars['ID']['input'];
};

export type RevokeGatewayKeyInput = {
  gatewayKeyId: Scalars['ID']['input'];
};

export type RevokeGatewayKeyPayload = {
  __typename?: 'RevokeGatewayKeyPayload';
  gatewayKey?: Maybe<GatewayKey>;
};

export type UpdateGatewayInput = {
  gatewayId: Scalars['ID']['input'];
  inferenceEndpointIds: Array<Scalars['ID']['input']>;
  name: Scalars['String']['input'];
};

export type UpdateGatewayPayload = {
  __typename?: 'UpdateGatewayPayload';
  gateway?: Maybe<Gateway>;
};

export type UpdateInferenceEndpointInput = {
  deploymentName?: InputMaybe<Scalars['String']['input']>;
  endpoint?: InputMaybe<Scalars['String']['input']>;
  inferenceEndpointId: Scalars['ID']['input'];
  key?: InputMaybe<Scalars['String']['input']>;
  modelName?: InputMaybe<Scalars['String']['input']>;
  modelVersion?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  platform: Scalars['String']['input'];
  region?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateInferenceEndpointPayload = {
  __typename?: 'UpdateInferenceEndpointPayload';
  inferenceEndpoint?: Maybe<InferenceEndpoint>;
};

export type Viewer = {
  __typename?: 'Viewer';
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
};

export type GatewayList_GatewaysFragment = { __typename?: 'GatewayConnection', edges?: Array<{ __typename?: 'GatewayEdge', node?: { __typename?: 'Gateway', id: string, name: string, status: string } | null } | null> | null };

export type UpdateGatewayForm_GatewayFragment = { __typename?: 'Gateway', id: string, name: string, inferenceEndpoints?: { __typename?: 'GatewayInferenceEndpointConnection', edges?: Array<{ __typename?: 'GatewayInferenceEndpointEdge', node?: { __typename?: 'InferenceEndpoint', id: string } | null } | null> | null } | null };

export type UpdateGatewayForm_InferenceEndpointsFragment = { __typename?: 'InferenceEndpointConnection', edges?: Array<{ __typename?: 'InferenceEndpointEdge', node?: { __typename?: 'InferenceEndpoint', id: string, name: string, platform: string, status: string } | null } | null> | null };

export type AddGatewayKeyMutationVariables = Exact<{
  input: AddGatewayKeyInput;
}>;


export type AddGatewayKeyMutation = { __typename?: 'Mutation', addGatewayKey?: { __typename?: 'AddGatewayKeyPayload', key?: string | null, gatewayKey?: { __typename?: 'GatewayKey', id: string, name: string, maskedKey: string, status: string } | null } | null };

export type RevokeGatewayKeyMutationVariables = Exact<{
  input: RevokeGatewayKeyInput;
}>;


export type RevokeGatewayKeyMutation = { __typename?: 'Mutation', revokeGatewayKey?: { __typename?: 'RevokeGatewayKeyPayload', gatewayKey?: { __typename?: 'GatewayKey', id: string, name: string, maskedKey: string, status: string } | null } | null };

export type UpdateGatewayKeysForm_GatewayKeysFragment = { __typename?: 'GatewayKeyConnection', totalCount: number, edges?: Array<{ __typename?: 'GatewayKeyEdge', node?: { __typename?: 'GatewayKey', id: string, name: string, maskedKey: string, status: string } | null } | null> | null };

export type UpdateGatewayKeysForm_GatewayFragment = { __typename?: 'Gateway', id: string };

export type GatewayPageQueryVariables = Exact<{
  gatewayId: Scalars['ID']['input'];
}>;


export type GatewayPageQuery = { __typename?: 'Query', gateway?: { __typename?: 'Gateway', id: string, name: string, keys?: { __typename?: 'GatewayKeyConnection', totalCount: number, edges?: Array<{ __typename?: 'GatewayKeyEdge', node?: { __typename?: 'GatewayKey', id: string, name: string, maskedKey: string, status: string } | null } | null> | null } | null, inferenceEndpoints?: { __typename?: 'GatewayInferenceEndpointConnection', edges?: Array<{ __typename?: 'GatewayInferenceEndpointEdge', node?: { __typename?: 'InferenceEndpoint', id: string } | null } | null> | null } | null } | { __typename?: 'GatewayKey' } | { __typename?: 'InferenceEndpoint' } | null, inferenceEndpoints?: { __typename?: 'InferenceEndpointConnection', edges?: Array<{ __typename?: 'InferenceEndpointEdge', node?: { __typename?: 'InferenceEndpoint', id: string, name: string, platform: string, status: string } | null } | null> | null } | null, viewer?: { __typename?: 'Viewer', id: string, email: string } | null };

export type UpdateGatewayMutationVariables = Exact<{
  input: UpdateGatewayInput;
}>;


export type UpdateGatewayMutation = { __typename?: 'Mutation', updateGateway?: { __typename?: 'UpdateGatewayPayload', gateway?: { __typename?: 'Gateway', id: string, name: string, inferenceEndpoints?: { __typename?: 'GatewayInferenceEndpointConnection', edges?: Array<{ __typename?: 'GatewayInferenceEndpointEdge', node?: { __typename?: 'InferenceEndpoint', id: string } | null } | null> | null } | null } | null } | null };

export type CreateGatewayPageQueryVariables = Exact<{ [key: string]: never; }>;


export type CreateGatewayPageQuery = { __typename?: 'Query', viewer?: { __typename?: 'Viewer', id: string, email: string } | null };

export type CreateGatewayMutationVariables = Exact<{
  input: CreateGatewayInput;
}>;


export type CreateGatewayMutation = { __typename?: 'Mutation', createGateway?: { __typename?: 'CreateGatewayPayload', gateway?: { __typename?: 'Gateway', id: string } | null } | null };

export type GatewaysPageQueryVariables = Exact<{ [key: string]: never; }>;


export type GatewaysPageQuery = { __typename?: 'Query', gateways?: { __typename?: 'GatewayConnection', totalCount: number, edges?: Array<{ __typename?: 'GatewayEdge', node?: { __typename?: 'Gateway', id: string, name: string, status: string } | null } | null> | null } | null, viewer?: { __typename?: 'Viewer', id: string, email: string } | null };

export type InferenceEndpointForm_InferenceEndpointFragment = { __typename?: 'InferenceEndpoint', id: string, name: string, platform: string, region?: string | null, endpoint: string, modelName?: string | null, modelVersion?: string | null, deploymentName?: string | null };

export type InferenceEndpointList_InferenceEndpointsFragment = { __typename?: 'InferenceEndpointConnection', edges?: Array<{ __typename?: 'InferenceEndpointEdge', node?: { __typename?: 'InferenceEndpoint', id: string, name: string, platform: string, region?: string | null, endpoint: string, status: string } | null } | null> | null };

export type InferenceEndpointPageQueryVariables = Exact<{
  inferenceEndpointId: Scalars['ID']['input'];
}>;


export type InferenceEndpointPageQuery = { __typename?: 'Query', inferenceEndpoint?: { __typename?: 'Gateway' } | { __typename?: 'GatewayKey' } | { __typename?: 'InferenceEndpoint', id: string, name: string, platform: string, region?: string | null, endpoint: string, modelName?: string | null, modelVersion?: string | null, deploymentName?: string | null } | null, viewer?: { __typename?: 'Viewer', id: string, email: string } | null };

export type UpdateInferenceEndpointMutationVariables = Exact<{
  input: UpdateInferenceEndpointInput;
}>;


export type UpdateInferenceEndpointMutation = { __typename?: 'Mutation', updateInferenceEndpoint?: { __typename?: 'UpdateInferenceEndpointPayload', inferenceEndpoint?: { __typename?: 'InferenceEndpoint', id: string, name: string, platform: string, region?: string | null, endpoint: string, modelName?: string | null, modelVersion?: string | null, deploymentName?: string | null } | null } | null };

export type CreateInferenceEndpointPageQueryVariables = Exact<{ [key: string]: never; }>;


export type CreateInferenceEndpointPageQuery = { __typename?: 'Query', viewer?: { __typename?: 'Viewer', id: string, email: string } | null };

export type CreateInferenceEndpointMutationVariables = Exact<{
  input: CreateInferenceEndpointInput;
}>;


export type CreateInferenceEndpointMutation = { __typename?: 'Mutation', createInferenceEndpoint?: { __typename?: 'CreateInferenceEndpointPayload', inferenceEndpoint?: { __typename?: 'InferenceEndpoint', id: string } | null } | null };

export type InferenceEndpointsPageQueryVariables = Exact<{ [key: string]: never; }>;


export type InferenceEndpointsPageQuery = { __typename?: 'Query', inferenceEndpoints?: { __typename?: 'InferenceEndpointConnection', totalCount: number, edges?: Array<{ __typename?: 'InferenceEndpointEdge', node?: { __typename?: 'InferenceEndpoint', id: string, name: string, platform: string, region?: string | null, endpoint: string, status: string } | null } | null> | null } | null, viewer?: { __typename?: 'Viewer', id: string, email: string } | null };

export type LoginMutationVariables = Exact<{
  input: LoginInput;
}>;


export type LoginMutation = { __typename?: 'Mutation', login?: { __typename?: 'LoginPayload', token?: string | null } | null };

export type HomePageQueryVariables = Exact<{ [key: string]: never; }>;


export type HomePageQuery = { __typename?: 'Query', gateways?: { __typename?: 'GatewayConnection', totalCount: number } | null, inferenceEndpoints?: { __typename?: 'InferenceEndpointConnection', totalCount: number } | null, viewer?: { __typename?: 'Viewer', id: string, email: string } | null };

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = { __typename?: 'Mutation', logout?: boolean | null };

export type Layout_ViewerFragment = { __typename?: 'Viewer', id: string, email: string };

export const GatewayList_GatewaysFragmentDoc = gql`
    fragment GatewayList_gateways on GatewayConnection {
  edges {
    node {
      id
      name
      status
    }
  }
}
    `;
export const UpdateGatewayForm_GatewayFragmentDoc = gql`
    fragment UpdateGatewayForm_gateway on Gateway {
  id
  name
  inferenceEndpoints {
    edges {
      node {
        id
      }
    }
  }
}
    `;
export const UpdateGatewayForm_InferenceEndpointsFragmentDoc = gql`
    fragment UpdateGatewayForm_inferenceEndpoints on InferenceEndpointConnection {
  edges {
    node {
      id
      name
      platform
      status
    }
  }
}
    `;
export const UpdateGatewayKeysForm_GatewayKeysFragmentDoc = gql`
    fragment UpdateGatewayKeysForm_gatewayKeys on GatewayKeyConnection {
  totalCount
  edges {
    node {
      id
      name
      maskedKey
      status
    }
  }
}
    `;
export const UpdateGatewayKeysForm_GatewayFragmentDoc = gql`
    fragment UpdateGatewayKeysForm_gateway on Gateway {
  id
}
    `;
export const InferenceEndpointForm_InferenceEndpointFragmentDoc = gql`
    fragment InferenceEndpointForm_inferenceEndpoint on InferenceEndpoint {
  id
  name
  platform
  region
  endpoint
  modelName
  modelVersion
  deploymentName
}
    `;
export const InferenceEndpointList_InferenceEndpointsFragmentDoc = gql`
    fragment InferenceEndpointList_inferenceEndpoints on InferenceEndpointConnection {
  edges {
    node {
      id
      name
      platform
      region
      endpoint
      status
    }
  }
}
    `;
export const Layout_ViewerFragmentDoc = gql`
    fragment Layout_viewer on Viewer {
  id
  email
}
    `;
export const AddGatewayKeyDocument = gql`
    mutation AddGatewayKey($input: AddGatewayKeyInput!) {
  addGatewayKey(input: $input) {
    gatewayKey {
      id
      name
      maskedKey
      status
    }
    key
  }
}
    `;
export type AddGatewayKeyMutationFn = Apollo.MutationFunction<AddGatewayKeyMutation, AddGatewayKeyMutationVariables>;

/**
 * __useAddGatewayKeyMutation__
 *
 * To run a mutation, you first call `useAddGatewayKeyMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddGatewayKeyMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addGatewayKeyMutation, { data, loading, error }] = useAddGatewayKeyMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAddGatewayKeyMutation(baseOptions?: Apollo.MutationHookOptions<AddGatewayKeyMutation, AddGatewayKeyMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddGatewayKeyMutation, AddGatewayKeyMutationVariables>(AddGatewayKeyDocument, options);
      }
export type AddGatewayKeyMutationHookResult = ReturnType<typeof useAddGatewayKeyMutation>;
export type AddGatewayKeyMutationResult = Apollo.MutationResult<AddGatewayKeyMutation>;
export type AddGatewayKeyMutationOptions = Apollo.BaseMutationOptions<AddGatewayKeyMutation, AddGatewayKeyMutationVariables>;
export const RevokeGatewayKeyDocument = gql`
    mutation RevokeGatewayKey($input: RevokeGatewayKeyInput!) {
  revokeGatewayKey(input: $input) {
    gatewayKey {
      id
      name
      maskedKey
      status
    }
  }
}
    `;
export type RevokeGatewayKeyMutationFn = Apollo.MutationFunction<RevokeGatewayKeyMutation, RevokeGatewayKeyMutationVariables>;

/**
 * __useRevokeGatewayKeyMutation__
 *
 * To run a mutation, you first call `useRevokeGatewayKeyMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRevokeGatewayKeyMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [revokeGatewayKeyMutation, { data, loading, error }] = useRevokeGatewayKeyMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useRevokeGatewayKeyMutation(baseOptions?: Apollo.MutationHookOptions<RevokeGatewayKeyMutation, RevokeGatewayKeyMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RevokeGatewayKeyMutation, RevokeGatewayKeyMutationVariables>(RevokeGatewayKeyDocument, options);
      }
export type RevokeGatewayKeyMutationHookResult = ReturnType<typeof useRevokeGatewayKeyMutation>;
export type RevokeGatewayKeyMutationResult = Apollo.MutationResult<RevokeGatewayKeyMutation>;
export type RevokeGatewayKeyMutationOptions = Apollo.BaseMutationOptions<RevokeGatewayKeyMutation, RevokeGatewayKeyMutationVariables>;
export const GatewayPageDocument = gql`
    query GatewayPage($gatewayId: ID!) {
  gateway: node(id: $gatewayId) {
    ... on Gateway {
      id
      name
      ...UpdateGatewayForm_gateway
      ...UpdateGatewayKeysForm_gateway
      keys {
        ...UpdateGatewayKeysForm_gatewayKeys
      }
    }
  }
  inferenceEndpoints {
    ...UpdateGatewayForm_inferenceEndpoints
  }
  viewer {
    ...Layout_viewer
  }
}
    ${UpdateGatewayForm_GatewayFragmentDoc}
${UpdateGatewayKeysForm_GatewayFragmentDoc}
${UpdateGatewayKeysForm_GatewayKeysFragmentDoc}
${UpdateGatewayForm_InferenceEndpointsFragmentDoc}
${Layout_ViewerFragmentDoc}`;

/**
 * __useGatewayPageQuery__
 *
 * To run a query within a React component, call `useGatewayPageQuery` and pass it any options that fit your needs.
 * When your component renders, `useGatewayPageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGatewayPageQuery({
 *   variables: {
 *      gatewayId: // value for 'gatewayId'
 *   },
 * });
 */
export function useGatewayPageQuery(baseOptions: Apollo.QueryHookOptions<GatewayPageQuery, GatewayPageQueryVariables> & ({ variables: GatewayPageQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GatewayPageQuery, GatewayPageQueryVariables>(GatewayPageDocument, options);
      }
export function useGatewayPageLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GatewayPageQuery, GatewayPageQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GatewayPageQuery, GatewayPageQueryVariables>(GatewayPageDocument, options);
        }
export function useGatewayPageSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GatewayPageQuery, GatewayPageQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GatewayPageQuery, GatewayPageQueryVariables>(GatewayPageDocument, options);
        }
export type GatewayPageQueryHookResult = ReturnType<typeof useGatewayPageQuery>;
export type GatewayPageLazyQueryHookResult = ReturnType<typeof useGatewayPageLazyQuery>;
export type GatewayPageSuspenseQueryHookResult = ReturnType<typeof useGatewayPageSuspenseQuery>;
export type GatewayPageQueryResult = Apollo.QueryResult<GatewayPageQuery, GatewayPageQueryVariables>;
export const UpdateGatewayDocument = gql`
    mutation UpdateGateway($input: UpdateGatewayInput!) {
  updateGateway(input: $input) {
    gateway {
      id
      name
      ...UpdateGatewayForm_gateway
    }
  }
}
    ${UpdateGatewayForm_GatewayFragmentDoc}`;
export type UpdateGatewayMutationFn = Apollo.MutationFunction<UpdateGatewayMutation, UpdateGatewayMutationVariables>;

/**
 * __useUpdateGatewayMutation__
 *
 * To run a mutation, you first call `useUpdateGatewayMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateGatewayMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateGatewayMutation, { data, loading, error }] = useUpdateGatewayMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateGatewayMutation(baseOptions?: Apollo.MutationHookOptions<UpdateGatewayMutation, UpdateGatewayMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateGatewayMutation, UpdateGatewayMutationVariables>(UpdateGatewayDocument, options);
      }
export type UpdateGatewayMutationHookResult = ReturnType<typeof useUpdateGatewayMutation>;
export type UpdateGatewayMutationResult = Apollo.MutationResult<UpdateGatewayMutation>;
export type UpdateGatewayMutationOptions = Apollo.BaseMutationOptions<UpdateGatewayMutation, UpdateGatewayMutationVariables>;
export const CreateGatewayPageDocument = gql`
    query CreateGatewayPage {
  viewer {
    ...Layout_viewer
  }
}
    ${Layout_ViewerFragmentDoc}`;

/**
 * __useCreateGatewayPageQuery__
 *
 * To run a query within a React component, call `useCreateGatewayPageQuery` and pass it any options that fit your needs.
 * When your component renders, `useCreateGatewayPageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCreateGatewayPageQuery({
 *   variables: {
 *   },
 * });
 */
export function useCreateGatewayPageQuery(baseOptions?: Apollo.QueryHookOptions<CreateGatewayPageQuery, CreateGatewayPageQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CreateGatewayPageQuery, CreateGatewayPageQueryVariables>(CreateGatewayPageDocument, options);
      }
export function useCreateGatewayPageLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CreateGatewayPageQuery, CreateGatewayPageQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CreateGatewayPageQuery, CreateGatewayPageQueryVariables>(CreateGatewayPageDocument, options);
        }
export function useCreateGatewayPageSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<CreateGatewayPageQuery, CreateGatewayPageQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<CreateGatewayPageQuery, CreateGatewayPageQueryVariables>(CreateGatewayPageDocument, options);
        }
export type CreateGatewayPageQueryHookResult = ReturnType<typeof useCreateGatewayPageQuery>;
export type CreateGatewayPageLazyQueryHookResult = ReturnType<typeof useCreateGatewayPageLazyQuery>;
export type CreateGatewayPageSuspenseQueryHookResult = ReturnType<typeof useCreateGatewayPageSuspenseQuery>;
export type CreateGatewayPageQueryResult = Apollo.QueryResult<CreateGatewayPageQuery, CreateGatewayPageQueryVariables>;
export const CreateGatewayDocument = gql`
    mutation CreateGateway($input: CreateGatewayInput!) {
  createGateway(input: $input) {
    gateway {
      id
    }
  }
}
    `;
export type CreateGatewayMutationFn = Apollo.MutationFunction<CreateGatewayMutation, CreateGatewayMutationVariables>;

/**
 * __useCreateGatewayMutation__
 *
 * To run a mutation, you first call `useCreateGatewayMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateGatewayMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createGatewayMutation, { data, loading, error }] = useCreateGatewayMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateGatewayMutation(baseOptions?: Apollo.MutationHookOptions<CreateGatewayMutation, CreateGatewayMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateGatewayMutation, CreateGatewayMutationVariables>(CreateGatewayDocument, options);
      }
export type CreateGatewayMutationHookResult = ReturnType<typeof useCreateGatewayMutation>;
export type CreateGatewayMutationResult = Apollo.MutationResult<CreateGatewayMutation>;
export type CreateGatewayMutationOptions = Apollo.BaseMutationOptions<CreateGatewayMutation, CreateGatewayMutationVariables>;
export const GatewaysPageDocument = gql`
    query GatewaysPage {
  gateways {
    totalCount
    ...GatewayList_gateways
  }
  viewer {
    ...Layout_viewer
  }
}
    ${GatewayList_GatewaysFragmentDoc}
${Layout_ViewerFragmentDoc}`;

/**
 * __useGatewaysPageQuery__
 *
 * To run a query within a React component, call `useGatewaysPageQuery` and pass it any options that fit your needs.
 * When your component renders, `useGatewaysPageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGatewaysPageQuery({
 *   variables: {
 *   },
 * });
 */
export function useGatewaysPageQuery(baseOptions?: Apollo.QueryHookOptions<GatewaysPageQuery, GatewaysPageQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GatewaysPageQuery, GatewaysPageQueryVariables>(GatewaysPageDocument, options);
      }
export function useGatewaysPageLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GatewaysPageQuery, GatewaysPageQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GatewaysPageQuery, GatewaysPageQueryVariables>(GatewaysPageDocument, options);
        }
export function useGatewaysPageSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GatewaysPageQuery, GatewaysPageQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GatewaysPageQuery, GatewaysPageQueryVariables>(GatewaysPageDocument, options);
        }
export type GatewaysPageQueryHookResult = ReturnType<typeof useGatewaysPageQuery>;
export type GatewaysPageLazyQueryHookResult = ReturnType<typeof useGatewaysPageLazyQuery>;
export type GatewaysPageSuspenseQueryHookResult = ReturnType<typeof useGatewaysPageSuspenseQuery>;
export type GatewaysPageQueryResult = Apollo.QueryResult<GatewaysPageQuery, GatewaysPageQueryVariables>;
export const InferenceEndpointPageDocument = gql`
    query InferenceEndpointPage($inferenceEndpointId: ID!) {
  inferenceEndpoint: node(id: $inferenceEndpointId) {
    ... on InferenceEndpoint {
      id
      name
      ...InferenceEndpointForm_inferenceEndpoint
    }
  }
  viewer {
    ...Layout_viewer
  }
}
    ${InferenceEndpointForm_InferenceEndpointFragmentDoc}
${Layout_ViewerFragmentDoc}`;

/**
 * __useInferenceEndpointPageQuery__
 *
 * To run a query within a React component, call `useInferenceEndpointPageQuery` and pass it any options that fit your needs.
 * When your component renders, `useInferenceEndpointPageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useInferenceEndpointPageQuery({
 *   variables: {
 *      inferenceEndpointId: // value for 'inferenceEndpointId'
 *   },
 * });
 */
export function useInferenceEndpointPageQuery(baseOptions: Apollo.QueryHookOptions<InferenceEndpointPageQuery, InferenceEndpointPageQueryVariables> & ({ variables: InferenceEndpointPageQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<InferenceEndpointPageQuery, InferenceEndpointPageQueryVariables>(InferenceEndpointPageDocument, options);
      }
export function useInferenceEndpointPageLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<InferenceEndpointPageQuery, InferenceEndpointPageQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<InferenceEndpointPageQuery, InferenceEndpointPageQueryVariables>(InferenceEndpointPageDocument, options);
        }
export function useInferenceEndpointPageSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<InferenceEndpointPageQuery, InferenceEndpointPageQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<InferenceEndpointPageQuery, InferenceEndpointPageQueryVariables>(InferenceEndpointPageDocument, options);
        }
export type InferenceEndpointPageQueryHookResult = ReturnType<typeof useInferenceEndpointPageQuery>;
export type InferenceEndpointPageLazyQueryHookResult = ReturnType<typeof useInferenceEndpointPageLazyQuery>;
export type InferenceEndpointPageSuspenseQueryHookResult = ReturnType<typeof useInferenceEndpointPageSuspenseQuery>;
export type InferenceEndpointPageQueryResult = Apollo.QueryResult<InferenceEndpointPageQuery, InferenceEndpointPageQueryVariables>;
export const UpdateInferenceEndpointDocument = gql`
    mutation UpdateInferenceEndpoint($input: UpdateInferenceEndpointInput!) {
  updateInferenceEndpoint(input: $input) {
    inferenceEndpoint {
      id
      name
      ...InferenceEndpointForm_inferenceEndpoint
    }
  }
}
    ${InferenceEndpointForm_InferenceEndpointFragmentDoc}`;
export type UpdateInferenceEndpointMutationFn = Apollo.MutationFunction<UpdateInferenceEndpointMutation, UpdateInferenceEndpointMutationVariables>;

/**
 * __useUpdateInferenceEndpointMutation__
 *
 * To run a mutation, you first call `useUpdateInferenceEndpointMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateInferenceEndpointMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateInferenceEndpointMutation, { data, loading, error }] = useUpdateInferenceEndpointMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateInferenceEndpointMutation(baseOptions?: Apollo.MutationHookOptions<UpdateInferenceEndpointMutation, UpdateInferenceEndpointMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateInferenceEndpointMutation, UpdateInferenceEndpointMutationVariables>(UpdateInferenceEndpointDocument, options);
      }
export type UpdateInferenceEndpointMutationHookResult = ReturnType<typeof useUpdateInferenceEndpointMutation>;
export type UpdateInferenceEndpointMutationResult = Apollo.MutationResult<UpdateInferenceEndpointMutation>;
export type UpdateInferenceEndpointMutationOptions = Apollo.BaseMutationOptions<UpdateInferenceEndpointMutation, UpdateInferenceEndpointMutationVariables>;
export const CreateInferenceEndpointPageDocument = gql`
    query CreateInferenceEndpointPage {
  viewer {
    ...Layout_viewer
  }
}
    ${Layout_ViewerFragmentDoc}`;

/**
 * __useCreateInferenceEndpointPageQuery__
 *
 * To run a query within a React component, call `useCreateInferenceEndpointPageQuery` and pass it any options that fit your needs.
 * When your component renders, `useCreateInferenceEndpointPageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCreateInferenceEndpointPageQuery({
 *   variables: {
 *   },
 * });
 */
export function useCreateInferenceEndpointPageQuery(baseOptions?: Apollo.QueryHookOptions<CreateInferenceEndpointPageQuery, CreateInferenceEndpointPageQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CreateInferenceEndpointPageQuery, CreateInferenceEndpointPageQueryVariables>(CreateInferenceEndpointPageDocument, options);
      }
export function useCreateInferenceEndpointPageLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CreateInferenceEndpointPageQuery, CreateInferenceEndpointPageQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CreateInferenceEndpointPageQuery, CreateInferenceEndpointPageQueryVariables>(CreateInferenceEndpointPageDocument, options);
        }
export function useCreateInferenceEndpointPageSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<CreateInferenceEndpointPageQuery, CreateInferenceEndpointPageQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<CreateInferenceEndpointPageQuery, CreateInferenceEndpointPageQueryVariables>(CreateInferenceEndpointPageDocument, options);
        }
export type CreateInferenceEndpointPageQueryHookResult = ReturnType<typeof useCreateInferenceEndpointPageQuery>;
export type CreateInferenceEndpointPageLazyQueryHookResult = ReturnType<typeof useCreateInferenceEndpointPageLazyQuery>;
export type CreateInferenceEndpointPageSuspenseQueryHookResult = ReturnType<typeof useCreateInferenceEndpointPageSuspenseQuery>;
export type CreateInferenceEndpointPageQueryResult = Apollo.QueryResult<CreateInferenceEndpointPageQuery, CreateInferenceEndpointPageQueryVariables>;
export const CreateInferenceEndpointDocument = gql`
    mutation CreateInferenceEndpoint($input: CreateInferenceEndpointInput!) {
  createInferenceEndpoint(input: $input) {
    inferenceEndpoint {
      id
    }
  }
}
    `;
export type CreateInferenceEndpointMutationFn = Apollo.MutationFunction<CreateInferenceEndpointMutation, CreateInferenceEndpointMutationVariables>;

/**
 * __useCreateInferenceEndpointMutation__
 *
 * To run a mutation, you first call `useCreateInferenceEndpointMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateInferenceEndpointMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createInferenceEndpointMutation, { data, loading, error }] = useCreateInferenceEndpointMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateInferenceEndpointMutation(baseOptions?: Apollo.MutationHookOptions<CreateInferenceEndpointMutation, CreateInferenceEndpointMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateInferenceEndpointMutation, CreateInferenceEndpointMutationVariables>(CreateInferenceEndpointDocument, options);
      }
export type CreateInferenceEndpointMutationHookResult = ReturnType<typeof useCreateInferenceEndpointMutation>;
export type CreateInferenceEndpointMutationResult = Apollo.MutationResult<CreateInferenceEndpointMutation>;
export type CreateInferenceEndpointMutationOptions = Apollo.BaseMutationOptions<CreateInferenceEndpointMutation, CreateInferenceEndpointMutationVariables>;
export const InferenceEndpointsPageDocument = gql`
    query InferenceEndpointsPage {
  inferenceEndpoints {
    totalCount
    ...InferenceEndpointList_inferenceEndpoints
  }
  viewer {
    ...Layout_viewer
  }
}
    ${InferenceEndpointList_InferenceEndpointsFragmentDoc}
${Layout_ViewerFragmentDoc}`;

/**
 * __useInferenceEndpointsPageQuery__
 *
 * To run a query within a React component, call `useInferenceEndpointsPageQuery` and pass it any options that fit your needs.
 * When your component renders, `useInferenceEndpointsPageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useInferenceEndpointsPageQuery({
 *   variables: {
 *   },
 * });
 */
export function useInferenceEndpointsPageQuery(baseOptions?: Apollo.QueryHookOptions<InferenceEndpointsPageQuery, InferenceEndpointsPageQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<InferenceEndpointsPageQuery, InferenceEndpointsPageQueryVariables>(InferenceEndpointsPageDocument, options);
      }
export function useInferenceEndpointsPageLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<InferenceEndpointsPageQuery, InferenceEndpointsPageQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<InferenceEndpointsPageQuery, InferenceEndpointsPageQueryVariables>(InferenceEndpointsPageDocument, options);
        }
export function useInferenceEndpointsPageSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<InferenceEndpointsPageQuery, InferenceEndpointsPageQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<InferenceEndpointsPageQuery, InferenceEndpointsPageQueryVariables>(InferenceEndpointsPageDocument, options);
        }
export type InferenceEndpointsPageQueryHookResult = ReturnType<typeof useInferenceEndpointsPageQuery>;
export type InferenceEndpointsPageLazyQueryHookResult = ReturnType<typeof useInferenceEndpointsPageLazyQuery>;
export type InferenceEndpointsPageSuspenseQueryHookResult = ReturnType<typeof useInferenceEndpointsPageSuspenseQuery>;
export type InferenceEndpointsPageQueryResult = Apollo.QueryResult<InferenceEndpointsPageQuery, InferenceEndpointsPageQueryVariables>;
export const LoginDocument = gql`
    mutation Login($input: LoginInput!) {
  login(input: $input) {
    token
  }
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const HomePageDocument = gql`
    query HomePage {
  gateways {
    totalCount
  }
  inferenceEndpoints {
    totalCount
  }
  viewer {
    ...Layout_viewer
  }
}
    ${Layout_ViewerFragmentDoc}`;

/**
 * __useHomePageQuery__
 *
 * To run a query within a React component, call `useHomePageQuery` and pass it any options that fit your needs.
 * When your component renders, `useHomePageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useHomePageQuery({
 *   variables: {
 *   },
 * });
 */
export function useHomePageQuery(baseOptions?: Apollo.QueryHookOptions<HomePageQuery, HomePageQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<HomePageQuery, HomePageQueryVariables>(HomePageDocument, options);
      }
export function useHomePageLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<HomePageQuery, HomePageQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<HomePageQuery, HomePageQueryVariables>(HomePageDocument, options);
        }
export function useHomePageSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<HomePageQuery, HomePageQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<HomePageQuery, HomePageQueryVariables>(HomePageDocument, options);
        }
export type HomePageQueryHookResult = ReturnType<typeof useHomePageQuery>;
export type HomePageLazyQueryHookResult = ReturnType<typeof useHomePageLazyQuery>;
export type HomePageSuspenseQueryHookResult = ReturnType<typeof useHomePageSuspenseQuery>;
export type HomePageQueryResult = Apollo.QueryResult<HomePageQuery, HomePageQueryVariables>;
export const LogoutDocument = gql`
    mutation Logout {
  logout
}
    `;
export type LogoutMutationFn = Apollo.MutationFunction<LogoutMutation, LogoutMutationVariables>;

/**
 * __useLogoutMutation__
 *
 * To run a mutation, you first call `useLogoutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLogoutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [logoutMutation, { data, loading, error }] = useLogoutMutation({
 *   variables: {
 *   },
 * });
 */
export function useLogoutMutation(baseOptions?: Apollo.MutationHookOptions<LogoutMutation, LogoutMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LogoutMutation, LogoutMutationVariables>(LogoutDocument, options);
      }
export type LogoutMutationHookResult = ReturnType<typeof useLogoutMutation>;
export type LogoutMutationResult = Apollo.MutationResult<LogoutMutation>;
export type LogoutMutationOptions = Apollo.BaseMutationOptions<LogoutMutation, LogoutMutationVariables>;

      export interface PossibleTypesResultData {
        possibleTypes: {
          [key: string]: string[]
        }
      }
      const result: PossibleTypesResultData = {
  "possibleTypes": {
    "Node": [
      "Gateway",
      "GatewayKey",
      "InferenceEndpoint"
    ]
  }
};
      export default result;
    