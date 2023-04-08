
export type PromptProps = {
    id: string;
    title: string;
    tag: string;
}

export type GenerateTextToImageArgs = {
    pickedPrompts: PromptProps[];
} 