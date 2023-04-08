
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "https://aipromptor.com/graphql",
  generates: {
    "./src/graphql/types.d.ts": {
      plugins: [
        "typescript"
      ]
    }
  }
};

export default config;
