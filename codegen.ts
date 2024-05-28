import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  // schema: 'http://localhost:3000/api/graphql',
  schema: '../modelgw/src/endpoints/graphql/schema/generated/graphql.schema.json',
  generates: {
    'src/generated/graphql-client.tsx': {
      documents: ['src/app/**/*.tsx', 'src/components/**/*.tsx'],
      plugins: ['typescript', 'typescript-operations', 'typescript-react-apollo', 'fragment-matcher'],
      config: {
        withHooks: true,
        // withFragmentHooks: true,
      }
    },
  }
};
export default config;
