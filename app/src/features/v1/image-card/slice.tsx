import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import produce from 'immer';
import { RootState } from "../../../app/store";
import { generateTextToImage } from "../selected-panel/slice";

export interface ImageCardState {
    prompt: string;
    negativePrompt: string;
    //model: string;
    // sampler: string;
    // steps: number;
    // cfgScale: number;
    // width: number;
    // height: number;
    base64RawData: string | null;
    url: string | null;
}

export interface ImageScrollPanelState {
    images: ImageCardState[];
}

const initialState: ImageScrollPanelState = {
    images: [
        {
            url: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
            base64RawData: null,
            prompt: "wwwwdddddddddddddddddddddddddddddddddddddddddddddddddd",
            negativePrompt: "xcxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
        }],
    //images: [],
}

const imageScrollPanelSlice = createSlice({
    name: "imageScroll",
    initialState,
    reducers: {
        insertImage: (state, action: PayloadAction<{ index: number, image: ImageCardState }>) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            state.images.splice(action.payload.index, 0, action.payload.image);
        },
    },
    extraReducers: (builder) => {
        builder
            // generate text to image
            .addCase(generateTextToImage.pending, (state) => {
            })
            .addCase(generateTextToImage.fulfilled, (state, action) => {
                console.log(action.payload.info, action.payload.parameters);
                const newImages = action.payload.images?.map(m => {

                    return {
                        base64RawData: m,
                        prompt: action.payload.parameters.prompt,
                        negativePrompt: action.payload.parameters.negative_prompt,
                    };
                }) as ImageCardState[] || [];

                //state.images = newImages;
                // produce(state, (draft) => {
                //     draft.images.unshift(...newImages);
                // });
                state.images = produce(state.images, (draft) => {
                    draft.unshift(...newImages);
                });
            })
            .addCase(generateTextToImage.rejected, (state, action) => {
                console.error("image-card.generateTextToImage.rejected");
            });
    },
});

export const getImages = (state: RootState) => state.imageTimeline.images;
export const getImage = (index: number) => (state: RootState) => state.imageTimeline.images[index];

export const { insertImage } = imageScrollPanelSlice.actions;

export default imageScrollPanelSlice.reducer;
