import { GQLConnector } from "../infra/index";
import { gql } from '@apollo/client';
import { PromptEntity } from '../entity';
const listPrompt = gql`
query listPrompt($locale: String){
    prompts(locale: $locale) {
      data {
        id
        attributes {
          title
        }
      }
    }
  }
`
class PromptRepository {
  async all(): Promise<PromptEntity[]> {
    var response = await new GQLConnector().query<PromptEntity[]>(listPrompt );
    const prompts = response.data;
    return prompts;
  }
}


export const repo = new PromptRepository();