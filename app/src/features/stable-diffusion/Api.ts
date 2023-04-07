/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

/** Body_detect_controlnet_detect_post */
export interface BodyDetectControlnetDetectPost {
  /**
   * Controlnet Module
   * @default "none"
   */
  controlnet_module?: string;
  /**
   * Controlnet Input Images
   * @default []
   */
  controlnet_input_images?: string[];
  /**
   * Controlnet Processor Resolution
   * @default 512
   */
  controlnet_processor_res?: number;
  /**
   * Controlnet Threshold a
   * @default 64
   */
  controlnet_threshold_a?: number;
  /**
   * Controlnet Threshold b
   * @default 64
   */
  controlnet_threshold_b?: number;
}

/** Body_login_login__post */
export interface BodyLoginLoginPost {
  /**
   * Grant Type
   * @pattern password
   */
  grant_type?: string;
  /** Username */
  username: string;
  /** Password */
  password: string;
  /**
   * Scope
   * @default ""
   */
  scope?: string;
  /** Client Id */
  client_id?: string;
  /** Client Secret */
  client_secret?: string;
}

/** Body_login_login_post */
export interface BodyLoginLoginPost {
  /**
   * Grant Type
   * @pattern password
   */
  grant_type?: string;
  /** Username */
  username: string;
  /** Password */
  password: string;
  /**
   * Scope
   * @default ""
   */
  scope?: string;
  /** Client Id */
  client_id?: string;
  /** Client Secret */
  client_secret?: string;
}

/** ControlNetStableDiffusionProcessingImg2Img */
export interface ControlNetStableDiffusionProcessingImg2Img {
  /** Init Images */
  init_images?: any[];
  /**
   * Resize Mode
   * @default 0
   */
  resize_mode?: number;
  /**
   * Denoising Strength
   * @default 0.75
   */
  denoising_strength?: number;
  /** Image Cfg Scale */
  image_cfg_scale?: number;
  /** Mask */
  mask?: string;
  /**
   * Mask Blur
   * @default 4
   */
  mask_blur?: number;
  /**
   * Inpainting Fill
   * @default 0
   */
  inpainting_fill?: number;
  /**
   * Inpaint Full Res
   * @default true
   */
  inpaint_full_res?: boolean;
  /**
   * Inpaint Full Res Padding
   * @default 0
   */
  inpaint_full_res_padding?: number;
  /**
   * Inpainting Mask Invert
   * @default 0
   */
  inpainting_mask_invert?: number;
  /** Initial Noise Multiplier */
  initial_noise_multiplier?: number;
  /**
   * Prompt
   * @default ""
   */
  prompt?: string;
  /** Styles */
  styles?: string[];
  /**
   * Seed
   * @default -1
   */
  seed?: number;
  /**
   * Subseed
   * @default -1
   */
  subseed?: number;
  /**
   * Subseed Strength
   * @default 0
   */
  subseed_strength?: number;
  /**
   * Seed Resize From H
   * @default -1
   */
  seed_resize_from_h?: number;
  /**
   * Seed Resize From W
   * @default -1
   */
  seed_resize_from_w?: number;
  /** Sampler Name */
  sampler_name?: string;
  /**
   * Batch Size
   * @default 1
   */
  batch_size?: number;
  /**
   * N Iter
   * @default 1
   */
  n_iter?: number;
  /**
   * Steps
   * @default 50
   */
  steps?: number;
  /**
   * Cfg Scale
   * @default 7
   */
  cfg_scale?: number;
  /**
   * Width
   * @default 512
   */
  width?: number;
  /**
   * Height
   * @default 512
   */
  height?: number;
  /**
   * Restore Faces
   * @default false
   */
  restore_faces?: boolean;
  /**
   * Tiling
   * @default false
   */
  tiling?: boolean;
  /** Negative Prompt */
  negative_prompt?: string;
  /** Eta */
  eta?: number;
  /**
   * S Churn
   * @default 0
   */
  s_churn?: number;
  /** S Tmax */
  s_tmax?: number;
  /**
   * S Tmin
   * @default 0
   */
  s_tmin?: number;
  /**
   * S Noise
   * @default 1
   */
  s_noise?: number;
  /** Override Settings */
  override_settings?: object;
  /**
   * Override Settings Restore Afterwards
   * @default true
   */
  override_settings_restore_afterwards?: boolean;
  /**
   * Script Args
   * @default []
   */
  script_args?: any[];
  /**
   * Sampler Index
   * @default "Euler"
   */
  sampler_index?: string;
  /**
   * Include Init Images
   * @default false
   */
  include_init_images?: boolean;
  /** Script Name */
  script_name?: string;
  /**
   * Controlnet Units
   * ControlNet Processing Units
   * @default [{"input_image":"","mask":"","module":"none","model":"None","weight":1,"resize_mode":"Scale to Fit (Inner Fit)","lowvram":false,"processor_res":64,"threshold_a":64,"threshold_b":64,"guidance":1,"guidance_start":0,"guidance_end":1,"guessmode":true}]
   */
  controlnet_units?: ControlNetUnitRequest[];
}

/** ControlNetStableDiffusionProcessingTxt2Img */
export interface ControlNetStableDiffusionProcessingTxt2Img {
  /**
   * Enable Hr
   * @default false
   */
  enable_hr?: boolean;
  /**
   * Denoising Strength
   * @default 0
   */
  denoising_strength?: number;
  /**
   * Firstphase Width
   * @default 0
   */
  firstphase_width?: number;
  /**
   * Firstphase Height
   * @default 0
   */
  firstphase_height?: number;
  /**
   * Hr Scale
   * @default 2
   */
  hr_scale?: number;
  /** Hr Upscaler */
  hr_upscaler?: string;
  /**
   * Hr Second Pass Steps
   * @default 0
   */
  hr_second_pass_steps?: number;
  /**
   * Hr Resize X
   * @default 0
   */
  hr_resize_x?: number;
  /**
   * Hr Resize Y
   * @default 0
   */
  hr_resize_y?: number;
  /**
   * Prompt
   * @default ""
   */
  prompt?: string;
  /** Styles */
  styles?: string[];
  /**
   * Seed
   * @default -1
   */
  seed?: number;
  /**
   * Subseed
   * @default -1
   */
  subseed?: number;
  /**
   * Subseed Strength
   * @default 0
   */
  subseed_strength?: number;
  /**
   * Seed Resize From H
   * @default -1
   */
  seed_resize_from_h?: number;
  /**
   * Seed Resize From W
   * @default -1
   */
  seed_resize_from_w?: number;
  /** Sampler Name */
  sampler_name?: string;
  /**
   * Batch Size
   * @default 1
   */
  batch_size?: number;
  /**
   * N Iter
   * @default 1
   */
  n_iter?: number;
  /**
   * Steps
   * @default 50
   */
  steps?: number;
  /**
   * Cfg Scale
   * @default 7
   */
  cfg_scale?: number;
  /**
   * Width
   * @default 512
   */
  width?: number;
  /**
   * Height
   * @default 512
   */
  height?: number;
  /**
   * Restore Faces
   * @default false
   */
  restore_faces?: boolean;
  /**
   * Tiling
   * @default false
   */
  tiling?: boolean;
  /** Negative Prompt */
  negative_prompt?: string;
  /** Eta */
  eta?: number;
  /**
   * S Churn
   * @default 0
   */
  s_churn?: number;
  /** S Tmax */
  s_tmax?: number;
  /**
   * S Tmin
   * @default 0
   */
  s_tmin?: number;
  /**
   * S Noise
   * @default 1
   */
  s_noise?: number;
  /** Override Settings */
  override_settings?: object;
  /**
   * Override Settings Restore Afterwards
   * @default true
   */
  override_settings_restore_afterwards?: boolean;
  /**
   * Script Args
   * @default []
   */
  script_args?: any[];
  /**
   * Sampler Index
   * @default "Euler"
   */
  sampler_index?: string;
  /** Script Name */
  script_name?: string;
  /**
   * Controlnet Units
   * ControlNet Processing Units
   * @default [{"input_image":"","mask":"","module":"none","model":"None","weight":1,"resize_mode":"Scale to Fit (Inner Fit)","lowvram":false,"processor_res":64,"threshold_a":64,"threshold_b":64,"guidance":1,"guidance_start":0,"guidance_end":1,"guessmode":true}]
   */
  controlnet_units?: ControlNetUnitRequest[];
}

/** ControlNetUnitRequest */
export interface ControlNetUnitRequest {
  /**
   * ControlNet Input Image
   * @default ""
   */
  input_image?: string;
  /**
   * ControlNet Input Mask
   * @default ""
   */
  mask?: string;
  /**
   * Controlnet Module
   * @default "none"
   */
  module?: string;
  /**
   * Controlnet Model
   * @default "None"
   */
  model?: string;
  /**
   * Controlnet Weight
   * @default 1
   */
  weight?: number;
  /**
   * Controlnet Resize Mode
   * @default "Scale to Fit (Inner Fit)"
   */
  resize_mode?: any;
  /**
   * Controlnet Low VRAM
   * @default false
   */
  lowvram?: boolean;
  /**
   * Controlnet Processor Res
   * @default 64
   */
  processor_res?: number;
  /**
   * Controlnet Threshold a
   * @default 64
   */
  threshold_a?: number;
  /**
   * Controlnet Threshold b
   * @default 64
   */
  threshold_b?: number;
  /**
   * ControlNet Guidance Strength
   * @default 1
   */
  guidance?: number;
  /**
   * ControlNet Guidance Start
   * @default 0
   */
  guidance_start?: number;
  /**
   * ControlNet Guidance End
   * @default 1
   */
  guidance_end?: number;
  /**
   * Guess Mode
   * @default true
   */
  guessmode?: boolean;
}

/** CreateResponse */
export interface CreateResponse {
  /**
   * Create info
   * Response string from create embedding or hypernetwork task.
   */
  info: string;
}

/** EmbeddingItem */
export interface EmbeddingItem {
  /**
   * Step
   * The number of steps that were used to train this embedding, if available
   */
  step?: number;
  /**
   * SD Checkpoint
   * The hash of the checkpoint this embedding was trained on, if available
   */
  sd_checkpoint?: string;
  /**
   * SD Checkpoint Name
   * The name of the checkpoint this embedding was trained on, if available. Note that this is the name that was used by the trainer; for a stable identifier, use `sd_checkpoint` instead
   */
  sd_checkpoint_name?: string;
  /**
   * Shape
   * The length of each individual vector in the embedding
   */
  shape: number;
  /**
   * Vectors
   * The number of vectors in the embedding
   */
  vectors: number;
}

/** EmbeddingsResponse */
export interface EmbeddingsResponse {
  /**
   * Loaded
   * Embeddings loaded for the current model
   */
  loaded: Record<string, EmbeddingItem>;
  /**
   * Skipped
   * Embeddings skipped for the current model (likely due to architecture incompatibility)
   */
  skipped: Record<string, EmbeddingItem>;
}

/** Estimation */
export interface Estimation {
  /**
   * Msg
   * @default "estimation"
   */
  msg?: string;
  /** Rank */
  rank?: number;
  /** Queue Size */
  queue_size: number;
  /** Avg Event Process Time */
  avg_event_process_time?: number;
  /** Avg Event Concurrent Process Time */
  avg_event_concurrent_process_time?: number;
  /** Rank Eta */
  rank_eta?: number;
  /** Queue Eta */
  queue_eta: number;
}

/** ExtrasBatchImagesRequest */
export interface ExtrasBatchImagesRequest {
  /**
   * Resize Mode
   * Sets the resize mode: 0 to upscale by upscaling_resize amount, 1 to upscale up to upscaling_resize_h x upscaling_resize_w.
   * @default 0
   */
  resize_mode?: 0 | 1;
  /**
   * Show results
   * Should the backend return the generated image?
   * @default true
   */
  show_extras_results?: boolean;
  /**
   * GFPGAN Visibility
   * Sets the visibility of GFPGAN, values should be between 0 and 1.
   * @min 0
   * @max 1
   * @default 0
   */
  gfpgan_visibility?: number;
  /**
   * CodeFormer Visibility
   * Sets the visibility of CodeFormer, values should be between 0 and 1.
   * @min 0
   * @max 1
   * @default 0
   */
  codeformer_visibility?: number;
  /**
   * CodeFormer Weight
   * Sets the weight of CodeFormer, values should be between 0 and 1.
   * @min 0
   * @max 1
   * @default 0
   */
  codeformer_weight?: number;
  /**
   * Upscaling Factor
   * By how much to upscale the image, only used when resize_mode=0.
   * @min 1
   * @max 8
   * @default 2
   */
  upscaling_resize?: number;
  /**
   * Target Width
   * Target width for the upscaler to hit. Only used when resize_mode=1.
   * @min 1
   * @default 512
   */
  upscaling_resize_w?: number;
  /**
   * Target Height
   * Target height for the upscaler to hit. Only used when resize_mode=1.
   * @min 1
   * @default 512
   */
  upscaling_resize_h?: number;
  /**
   * Crop to fit
   * Should the upscaler crop the image to fit in the chosen size?
   * @default true
   */
  upscaling_crop?: boolean;
  /**
   * Main upscaler
   * The name of the main upscaler to use, it has to be one of this list: None , Lanczos , Nearest , 4x-UltraSharp , R-ESRGAN 4x+ , R-ESRGAN 4x+ Anime6B
   * @default "None"
   */
  upscaler_1?: string;
  /**
   * Secondary upscaler
   * The name of the secondary upscaler to use, it has to be one of this list: None , Lanczos , Nearest , 4x-UltraSharp , R-ESRGAN 4x+ , R-ESRGAN 4x+ Anime6B
   * @default "None"
   */
  upscaler_2?: string;
  /**
   * Secondary upscaler visibility
   * Sets the visibility of secondary upscaler, values should be between 0 and 1.
   * @min 0
   * @max 1
   * @default 0
   */
  extras_upscaler_2_visibility?: number;
  /**
   * Upscale first
   * Should the upscaler run before restoring faces?
   * @default false
   */
  upscale_first?: boolean;
  /**
   * Images
   * List of images to work on. Must be Base64 strings
   */
  imageList: FileData[];
}

/** ExtrasBatchImagesResponse */
export interface ExtrasBatchImagesResponse {
  /**
   * HTML info
   * A series of HTML tags containing the process info.
   */
  html_info: string;
  /**
   * Images
   * The generated images in base64 format.
   */
  images: string[];
}

/** ExtrasSingleImageRequest */
export interface ExtrasSingleImageRequest {
  /**
   * Resize Mode
   * Sets the resize mode: 0 to upscale by upscaling_resize amount, 1 to upscale up to upscaling_resize_h x upscaling_resize_w.
   * @default 0
   */
  resize_mode?: 0 | 1;
  /**
   * Show results
   * Should the backend return the generated image?
   * @default true
   */
  show_extras_results?: boolean;
  /**
   * GFPGAN Visibility
   * Sets the visibility of GFPGAN, values should be between 0 and 1.
   * @min 0
   * @max 1
   * @default 0
   */
  gfpgan_visibility?: number;
  /**
   * CodeFormer Visibility
   * Sets the visibility of CodeFormer, values should be between 0 and 1.
   * @min 0
   * @max 1
   * @default 0
   */
  codeformer_visibility?: number;
  /**
   * CodeFormer Weight
   * Sets the weight of CodeFormer, values should be between 0 and 1.
   * @min 0
   * @max 1
   * @default 0
   */
  codeformer_weight?: number;
  /**
   * Upscaling Factor
   * By how much to upscale the image, only used when resize_mode=0.
   * @min 1
   * @max 8
   * @default 2
   */
  upscaling_resize?: number;
  /**
   * Target Width
   * Target width for the upscaler to hit. Only used when resize_mode=1.
   * @min 1
   * @default 512
   */
  upscaling_resize_w?: number;
  /**
   * Target Height
   * Target height for the upscaler to hit. Only used when resize_mode=1.
   * @min 1
   * @default 512
   */
  upscaling_resize_h?: number;
  /**
   * Crop to fit
   * Should the upscaler crop the image to fit in the chosen size?
   * @default true
   */
  upscaling_crop?: boolean;
  /**
   * Main upscaler
   * The name of the main upscaler to use, it has to be one of this list: None , Lanczos , Nearest , 4x-UltraSharp , R-ESRGAN 4x+ , R-ESRGAN 4x+ Anime6B
   * @default "None"
   */
  upscaler_1?: string;
  /**
   * Secondary upscaler
   * The name of the secondary upscaler to use, it has to be one of this list: None , Lanczos , Nearest , 4x-UltraSharp , R-ESRGAN 4x+ , R-ESRGAN 4x+ Anime6B
   * @default "None"
   */
  upscaler_2?: string;
  /**
   * Secondary upscaler visibility
   * Sets the visibility of secondary upscaler, values should be between 0 and 1.
   * @min 0
   * @max 1
   * @default 0
   */
  extras_upscaler_2_visibility?: number;
  /**
   * Upscale first
   * Should the upscaler run before restoring faces?
   * @default false
   */
  upscale_first?: boolean;
  /**
   * Image
   * Image to work on, must be a Base64 string containing the image's data.
   * @default ""
   */
  image?: string;
}

/** ExtrasSingleImageResponse */
export interface ExtrasSingleImageResponse {
  /**
   * HTML info
   * A series of HTML tags containing the process info.
   */
  html_info: string;
  /**
   * Image
   * The generated image in base64 format.
   */
  image?: string;
}

/** FaceRestorerItem */
export interface FaceRestorerItem {
  /** Name */
  name: string;
  /** Path */
  cmd_dir?: string;
}

/** FileData */
export interface FileData {
  /**
   * File data
   * Base64 representation of the file
   */
  data: string;
  /** File name */
  name: string;
}

/** Flags */
export interface Flags {
  /**
   * Data Dir
   * base path where all user data is stored
   * @default "/content/stable-diffusion-webui"
   */
  data_dir?: string;
  /**
   * Config
   * path to config which constructs model
   * @default "/content/stable-diffusion-webui/configs/v1-inference.yaml"
   */
  config?: string;
  /**
   * Ckpt
   * path to checkpoint of stable diffusion model; if specified, this checkpoint will be added to the list of checkpoints and loaded
   * @default "/content/stable-diffusion-webui/model.ckpt"
   */
  ckpt?: string;
  /**
   * Ckpt Dir
   * Path to directory with stable diffusion checkpoints
   */
  ckpt_dir?: string;
  /**
   * Vae Dir
   * Path to directory with VAE files
   */
  vae_dir?: string;
  /**
   * Gfpgan Dir
   * GFPGAN directory
   * @default "./GFPGAN"
   */
  gfpgan_dir?: string;
  /**
   * Gfpgan Model
   * GFPGAN model file name
   */
  gfpgan_model?: string;
  /**
   * No Half
   * do not switch the model to 16-bit floats
   * @default false
   */
  no_half?: boolean;
  /**
   * No Half Vae
   * do not switch the VAE model to 16-bit floats
   * @default false
   */
  no_half_vae?: boolean;
  /**
   * No Progressbar Hiding
   * do not hide progressbar in gradio UI (we hide it because it slows down ML if you have hardware acceleration in browser)
   * @default false
   */
  no_progressbar_hiding?: boolean;
  /**
   * Max Batch Count
   * maximum batch count value for the UI
   * @default 16
   */
  max_batch_count?: number;
  /**
   * Embeddings Dir
   * embeddings directory for textual inversion (default: embeddings)
   * @default "/content/stable-diffusion-webui/embeddings"
   */
  embeddings_dir?: string;
  /**
   * Textual Inversion Templates Dir
   * directory with textual inversion templates
   * @default "/content/stable-diffusion-webui/textual_inversion_templates"
   */
  textual_inversion_templates_dir?: string;
  /**
   * Hypernetwork Dir
   * hypernetwork directory
   * @default "/content/stable-diffusion-webui/models/hypernetworks"
   */
  hypernetwork_dir?: string;
  /**
   * Localizations Dir
   * localizations directory
   * @default "/content/stable-diffusion-webui/localizations"
   */
  localizations_dir?: string;
  /**
   * Allow Code
   * allow custom script execution from webui
   * @default false
   */
  allow_code?: boolean;
  /**
   * Medvram
   * enable stable diffusion model optimizations for sacrificing a little speed for low VRM usage
   * @default false
   */
  medvram?: boolean;
  /**
   * Lowvram
   * enable stable diffusion model optimizations for sacrificing a lot of speed for very low VRM usage
   * @default false
   */
  lowvram?: boolean;
  /**
   * Lowram
   * load stable diffusion checkpoint weights to VRAM instead of RAM
   * @default false
   */
  lowram?: boolean;
  /**
   * Always Batch Cond Uncond
   * disables cond/uncond batching that is enabled to save memory with --medvram or --lowvram
   * @default false
   */
  always_batch_cond_uncond?: boolean;
  /**
   * Unload Gfpgan
   * does not do anything.
   * @default false
   */
  unload_gfpgan?: boolean;
  /**
   * Precision
   * evaluate at this precision
   * @default "autocast"
   */
  precision?: string;
  /**
   * Upcast Sampling
   * upcast sampling. No effect with --no-half. Usually produces similar results to --no-half with better performance while using less memory.
   * @default false
   */
  upcast_sampling?: boolean;
  /**
   * Share
   * use share=True for gradio and make the UI accessible through their site
   * @default false
   */
  share?: boolean;
  /**
   * Ngrok
   * ngrok authtoken, alternative to gradio --share
   */
  ngrok?: string;
  /**
   * Ngrok Region
   * The region in which ngrok should start.
   * @default "us"
   */
  ngrok_region?: string;
  /**
   * Enable Insecure Extension Access
   * enable extensions tab regardless of other options
   * @default false
   */
  enable_insecure_extension_access?: boolean;
  /**
   * Codeformer Models Path
   * Path to directory with codeformer model file(s).
   * @default "/content/stable-diffusion-webui/models/Codeformer"
   */
  codeformer_models_path?: string;
  /**
   * Gfpgan Models Path
   * Path to directory with GFPGAN model file(s).
   * @default "/content/stable-diffusion-webui/models/GFPGAN"
   */
  gfpgan_models_path?: string;
  /**
   * Esrgan Models Path
   * Path to directory with ESRGAN model file(s).
   * @default "/content/stable-diffusion-webui/models/ESRGAN"
   */
  esrgan_models_path?: string;
  /**
   * Bsrgan Models Path
   * Path to directory with BSRGAN model file(s).
   * @default "/content/stable-diffusion-webui/models/BSRGAN"
   */
  bsrgan_models_path?: string;
  /**
   * Realesrgan Models Path
   * Path to directory with RealESRGAN model file(s).
   * @default "/content/stable-diffusion-webui/models/RealESRGAN"
   */
  realesrgan_models_path?: string;
  /**
   * Clip Models Path
   * Path to directory with CLIP model file(s).
   */
  clip_models_path?: string;
  /**
   * Xformers
   * enable xformers for cross attention layers
   * @default false
   */
  xformers?: boolean;
  /**
   * Force Enable Xformers
   * enable xformers for cross attention layers regardless of whether the checking code thinks you can run it; do not make bug reports if this fails to work
   * @default false
   */
  force_enable_xformers?: boolean;
  /**
   * Xformers Flash Attention
   * enable xformers with Flash Attention to improve reproducibility (supported for SD2.x or variant only)
   * @default false
   */
  xformers_flash_attention?: boolean;
  /**
   * Deepdanbooru
   * does not do anything
   * @default false
   */
  deepdanbooru?: boolean;
  /**
   * Opt Split Attention
   * force-enables Doggettx's cross-attention layer optimization. By default, it's on for torch cuda.
   * @default false
   */
  opt_split_attention?: boolean;
  /**
   * Opt Sub Quad Attention
   * enable memory efficient sub-quadratic cross-attention layer optimization
   * @default false
   */
  opt_sub_quad_attention?: boolean;
  /**
   * Sub Quad Q Chunk Size
   * query chunk size for the sub-quadratic cross-attention layer optimization to use
   * @default 1024
   */
  sub_quad_q_chunk_size?: number;
  /**
   * Sub Quad Kv Chunk Size
   * kv chunk size for the sub-quadratic cross-attention layer optimization to use
   */
  sub_quad_kv_chunk_size?: string;
  /**
   * Sub Quad Chunk Threshold
   * the percentage of VRAM threshold for the sub-quadratic cross-attention layer optimization to use chunking
   */
  sub_quad_chunk_threshold?: string;
  /**
   * Opt Split Attention Invokeai
   * force-enables InvokeAI's cross-attention layer optimization. By default, it's on when cuda is unavailable.
   * @default false
   */
  opt_split_attention_invokeai?: boolean;
  /**
   * Opt Split Attention V1
   * enable older version of split attention optimization that does not consume all the VRAM it can find
   * @default false
   */
  opt_split_attention_v1?: boolean;
  /**
   * Disable Opt Split Attention
   * force-disables cross-attention layer optimization
   * @default false
   */
  disable_opt_split_attention?: boolean;
  /**
   * Disable Nan Check
   * do not check if produced images/latent spaces have nans; useful for running without a checkpoint in CI
   * @default false
   */
  disable_nan_check?: boolean;
  /**
   * Use Cpu
   * use CPU as torch device for specified modules
   * @default []
   */
  use_cpu?: any[];
  /**
   * Listen
   * launch gradio with 0.0.0.0 as server name, allowing to respond to network requests
   * @default false
   */
  listen?: boolean;
  /**
   * Port
   * launch gradio with given server port, you need root/admin rights for ports < 1024, defaults to 7860 if available
   */
  port?: string;
  /**
   * Show Negative Prompt
   * does not do anything
   * @default false
   */
  show_negative_prompt?: boolean;
  /**
   * Ui Config File
   * filename to use for ui configuration
   * @default "/content/stable-diffusion-webui/ui-config.json"
   */
  ui_config_file?: string;
  /**
   * Hide Ui Dir Config
   * hide directory configuration from webui
   * @default false
   */
  hide_ui_dir_config?: boolean;
  /**
   * Freeze Settings
   * disable editing settings
   * @default false
   */
  freeze_settings?: boolean;
  /**
   * Ui Settings File
   * filename to use for ui settings
   * @default "/content/stable-diffusion-webui/config.json"
   */
  ui_settings_file?: string;
  /**
   * Gradio Debug
   * launch gradio with --debug option
   * @default false
   */
  gradio_debug?: boolean;
  /**
   * Gradio Auth
   * set gradio authentication like "username:password"; or comma-delimit multiple like "u1:p1,u2:p2,u3:p3"
   */
  gradio_auth?: string;
  /**
   * Gradio Auth Path
   * set gradio authentication file path ex. "/path/to/auth/file" same auth format as --gradio-auth
   */
  gradio_auth_path?: string;
  /**
   * Gradio Img2Img Tool
   * does not do anything
   */
  gradio_img2img_tool?: string;
  /**
   * Gradio Inpaint Tool
   * does not do anything
   */
  gradio_inpaint_tool?: string;
  /**
   * Opt Channelslast
   * change memory type for stable diffusion to channels last
   * @default false
   */
  opt_channelslast?: boolean;
  /**
   * Styles File
   * filename to use for styles
   * @default "/content/stable-diffusion-webui/styles.csv"
   */
  styles_file?: string;
  /**
   * Autolaunch
   * open the webui URL in the system's default browser upon launch
   * @default false
   */
  autolaunch?: boolean;
  /**
   * Theme
   * launches the UI with light or dark theme
   */
  theme?: string;
  /**
   * Use Textbox Seed
   * use textbox for seeds in UI (no up/down, but possible to input long seeds)
   * @default false
   */
  use_textbox_seed?: boolean;
  /**
   * Disable Console Progressbars
   * do not output progressbars to console
   * @default false
   */
  disable_console_progressbars?: boolean;
  /**
   * Enable Console Prompts
   * print prompts to console when generating with txt2img and img2img
   * @default false
   */
  enable_console_prompts?: boolean;
  /**
   * Vae Path
   * Checkpoint to use as VAE; setting this argument disables all settings related to VAE
   */
  vae_path?: string;
  /**
   * Disable Safe Unpickle
   * disable checking pytorch models for malicious code
   * @default false
   */
  disable_safe_unpickle?: boolean;
  /**
   * Api
   * use api=True to launch the API together with the webui (use --nowebui instead for only the API)
   * @default false
   */
  api?: boolean;
  /**
   * Api Auth
   * Set authentication for API like "username:password"; or comma-delimit multiple like "u1:p1,u2:p2,u3:p3"
   */
  api_auth?: string;
  /**
   * Api Log
   * use api-log=True to enable logging of all API requests
   * @default false
   */
  api_log?: boolean;
  /**
   * Nowebui
   * use api=True to launch the API instead of the webui
   * @default false
   */
  nowebui?: boolean;
  /**
   * Ui Debug Mode
   * Don't load model to quickly launch UI
   * @default false
   */
  ui_debug_mode?: boolean;
  /**
   * Device Id
   * Select the default CUDA device to use (export CUDA_VISIBLE_DEVICES=0,1,etc might be needed before)
   */
  device_id?: string;
  /**
   * Administrator
   * Administrator rights
   * @default false
   */
  administrator?: boolean;
  /**
   * Cors Allow Origins
   * Allowed CORS origin(s) in the form of a comma-separated list (no spaces)
   */
  cors_allow_origins?: string;
  /**
   * Cors Allow Origins Regex
   * Allowed CORS origin(s) in the form of a single regular expression
   */
  cors_allow_origins_regex?: string;
  /**
   * Tls Keyfile
   * Partially enables TLS, requires --tls-certfile to fully function
   */
  tls_keyfile?: string;
  /**
   * Tls Certfile
   * Partially enables TLS, requires --tls-keyfile to fully function
   */
  tls_certfile?: string;
  /**
   * Server Name
   * Sets hostname of server
   */
  server_name?: string;
  /**
   * Gradio Queue
   * Uses gradio queue; experimental option; breaks restart UI button
   * @default false
   */
  gradio_queue?: boolean;
  /**
   * Skip Version Check
   * Do not check versions of torch and xformers
   * @default false
   */
  skip_version_check?: boolean;
  /**
   * No Hashing
   * disable sha256 hashing of checkpoints to help loading performance
   * @default false
   */
  no_hashing?: boolean;
  /**
   * No Download Sd Model
   * don't download SD1.5 model even if no model is found in --ckpt-dir
   * @default false
   */
  no_download_sd_model?: boolean;
  /**
   * Addnet Max Model Count
   * The maximum number of additional network model can be used.
   * @default 5
   */
  addnet_max_model_count?: number;
  /**
   * Controlnet Dir
   * Path to directory with ControlNet models
   */
  controlnet_dir?: string;
  /**
   * No Half Controlnet
   * do not switch the ControlNet models to 16-bit floats (only needed without --no-half)
   */
  no_half_controlnet?: string;
  /**
   * Cloudflared
   * use trycloudflare, alternative to gradio --share
   * @default false
   */
  cloudflared?: boolean;
  /**
   * Localhostrun
   * use localhost.run, alternative to gradio --share
   * @default false
   */
  localhostrun?: boolean;
  /**
   * Remotemoe
   * use remote.moe, alternative to gradio --share
   * @default false
   */
  remotemoe?: boolean;
  /**
   * Googleusercontent
   * use googleusercontent.com, alternative to gradio --share
   * @default false
   */
  googleusercontent?: boolean;
  /**
   * Multiple
   * use cloudflared and remotemoe
   * @default false
   */
  multiple?: boolean;
  /**
   * Ldsr Models Path
   * Path to directory with LDSR model file(s).
   * @default "/content/stable-diffusion-webui/models/LDSR"
   */
  ldsr_models_path?: string;
  /**
   * Lora Dir
   * Path to directory with Lora networks.
   * @default "/content/stable-diffusion-webui/models/Lora"
   */
  lora_dir?: string;
  /**
   * Scunet Models Path
   * Path to directory with ScuNET model file(s).
   * @default "/content/stable-diffusion-webui/models/ScuNET"
   */
  scunet_models_path?: string;
  /**
   * Swinir Models Path
   * Path to directory with SwinIR model file(s).
   * @default "/content/stable-diffusion-webui/models/SwinIR"
   */
  swinir_models_path?: string;
}

/** HTTPValidationError */
export interface HTTPValidationError {
  /** Detail */
  detail?: ValidationError[];
}

/** HypernetworkItem */
export interface HypernetworkItem {
  /** Name */
  name: string;
  /** Path */
  path?: string;
}

/** ImageToImageResponse */
export interface ImageToImageResponse {
  /**
   * Image
   * The generated image in base64 format.
   */
  images?: string[];
  /** Parameters */
  parameters: object;
  /** Info */
  info: string;
}

/** InterrogateRequest */
export interface InterrogateRequest {
  /**
   * Image
   * Image to work on, must be a Base64 string containing the image's data.
   * @default ""
   */
  image?: string;
  /**
   * Model
   * The interrogate model used.
   * @default "clip"
   */
  model?: string;
}

/** MemoryResponse */
export interface MemoryResponse {
  /**
   * RAM
   * System memory stats
   */
  ram: object;
  /**
   * CUDA
   * nVidia CUDA memory stats
   */
  cuda: object;
}

/** Options */
export interface Options {
  /**
   * Samples Save
   * Always save all generated images
   * @default true
   */
  samples_save?: boolean;
  /**
   * Samples Format
   * File format for images
   * @default "png"
   */
  samples_format?: string;
  /**
   * Samples Filename Pattern
   * Images filename pattern
   * @default ""
   */
  samples_filename_pattern?: string;
  /**
   * Save Images Add Number
   * Add number to filename when saving
   * @default true
   */
  save_images_add_number?: boolean;
  /**
   * Grid Save
   * Always save all generated image grids
   * @default true
   */
  grid_save?: boolean;
  /**
   * Grid Format
   * File format for grids
   * @default "png"
   */
  grid_format?: string;
  /**
   * Grid Extended Filename
   * Add extended info (seed, prompt) to filename when saving grid
   * @default false
   */
  grid_extended_filename?: boolean;
  /**
   * Grid Only If Multiple
   * Do not save grids consisting of one picture
   * @default true
   */
  grid_only_if_multiple?: boolean;
  /**
   * Grid Prevent Empty Spots
   * Prevent empty spots in grid (when set to autodetect)
   * @default false
   */
  grid_prevent_empty_spots?: boolean;
  /**
   * N Rows
   * Grid row count; use -1 for autodetect and 0 for it to be same as batch size
   * @default -1
   */
  n_rows?: number;
  /**
   * Enable Pnginfo
   * Save text information about generation parameters as chunks to png files
   * @default true
   */
  enable_pnginfo?: boolean;
  /**
   * Save Txt
   * Create a text file next to every image with generation parameters.
   * @default false
   */
  save_txt?: boolean;
  /**
   * Save Images Before Face Restoration
   * Save a copy of image before doing face restoration.
   * @default false
   */
  save_images_before_face_restoration?: boolean;
  /**
   * Save Images Before Highres Fix
   * Save a copy of image before applying highres fix.
   * @default false
   */
  save_images_before_highres_fix?: boolean;
  /**
   * Save Images Before Color Correction
   * Save a copy of image before applying color correction to img2img results
   * @default false
   */
  save_images_before_color_correction?: boolean;
  /**
   * Jpeg Quality
   * Quality for saved jpeg images
   * @default 80
   */
  jpeg_quality?: number;
  /**
   * Export For 4Chan
   * If the saved image file size is above the limit, or its either width or height are above the limit, save a downscaled copy as JPG
   * @default true
   */
  export_for_4chan?: boolean;
  /**
   * Img Downscale Threshold
   * File size limit for the above option, MB
   * @default 4
   */
  img_downscale_threshold?: number;
  /**
   * Target Side Length
   * Width/height limit for the above option, in pixels
   * @default 4000
   */
  target_side_length?: number;
  /**
   * Use Original Name Batch
   * Use original name for output filename during batch process in extras tab
   * @default true
   */
  use_original_name_batch?: boolean;
  /**
   * Use Upscaler Name As Suffix
   * Use upscaler name as filename suffix in the extras tab
   * @default false
   */
  use_upscaler_name_as_suffix?: boolean;
  /**
   * Save Selected Only
   * When using 'Save' button, only save a single selected image
   * @default true
   */
  save_selected_only?: boolean;
  /**
   * Do Not Add Watermark
   * Do not add watermark to images
   * @default false
   */
  do_not_add_watermark?: boolean;
  /**
   * Temp Dir
   * Directory for temporary images; leave empty for default
   * @default ""
   */
  temp_dir?: string;
  /**
   * Clean Temp Dir At Start
   * Cleanup non-default temporary directory when starting webui
   * @default false
   */
  clean_temp_dir_at_start?: boolean;
  /**
   * Outdir Samples
   * Output directory for images; if empty, defaults to three directories below
   * @default ""
   */
  outdir_samples?: string;
  /**
   * Outdir Txt2Img Samples
   * Output directory for txt2img images
   * @default "outputs/txt2img-images"
   */
  outdir_txt2img_samples?: string;
  /**
   * Outdir Img2Img Samples
   * Output directory for img2img images
   * @default "outputs/img2img-images"
   */
  outdir_img2img_samples?: string;
  /**
   * Outdir Extras Samples
   * Output directory for images from extras tab
   * @default "outputs/extras-images"
   */
  outdir_extras_samples?: string;
  /**
   * Outdir Grids
   * Output directory for grids; if empty, defaults to two directories below
   * @default ""
   */
  outdir_grids?: string;
  /**
   * Outdir Txt2Img Grids
   * Output directory for txt2img grids
   * @default "outputs/txt2img-grids"
   */
  outdir_txt2img_grids?: string;
  /**
   * Outdir Img2Img Grids
   * Output directory for img2img grids
   * @default "outputs/img2img-grids"
   */
  outdir_img2img_grids?: string;
  /**
   * Outdir Save
   * Directory for saving images using the Save button
   * @default "log/images"
   */
  outdir_save?: string;
  /**
   * Save To Dirs
   * Save images to a subdirectory
   * @default true
   */
  save_to_dirs?: boolean;
  /**
   * Grid Save To Dirs
   * Save grids to a subdirectory
   * @default true
   */
  grid_save_to_dirs?: boolean;
  /**
   * Use Save To Dirs For Ui
   * When using "Save" button, save images to a subdirectory
   * @default false
   */
  use_save_to_dirs_for_ui?: boolean;
  /**
   * Directories Filename Pattern
   * Directory name pattern
   * @default "[date]"
   */
  directories_filename_pattern?: string;
  /**
   * Directories Max Prompt Words
   * Max prompt words for [prompt_words] pattern
   * @default 8
   */
  directories_max_prompt_words?: number;
  /**
   * Esrgan Tile
   * Tile size for ESRGAN upscalers. 0 = no tiling.
   * @default 192
   */
  ESRGAN_tile?: number;
  /**
   * Esrgan Tile Overlap
   * Tile overlap, in pixels for ESRGAN upscalers. Low values = visible seam.
   * @default 8
   */
  ESRGAN_tile_overlap?: number;
  /**
   * Realesrgan Enabled Models
   * Select which Real-ESRGAN models to show in the web UI. (Requires restart)
   * @default ["R-ESRGAN 4x+","R-ESRGAN 4x+ Anime6B"]
   */
  realesrgan_enabled_models?: any[];
  /**
   * Upscaler For Img2Img
   * Upscaler for img2img
   */
  upscaler_for_img2img?: null;
  /**
   * Face Restoration Model
   * Face restoration model
   * @default "CodeFormer"
   */
  face_restoration_model?: string;
  /**
   * Code Former Weight
   * CodeFormer weight parameter; 0 = maximum effect; 1 = minimum effect
   * @default 0.5
   */
  code_former_weight?: number;
  /**
   * Face Restoration Unload
   * Move face restoration model from VRAM into RAM after processing
   * @default false
   */
  face_restoration_unload?: boolean;
  /**
   * Show Warnings
   * Show warnings in console.
   * @default false
   */
  show_warnings?: boolean;
  /**
   * Memmon Poll Rate
   * VRAM usage polls per second during generation. Set to 0 to disable.
   * @default 8
   */
  memmon_poll_rate?: number;
  /**
   * Samples Log Stdout
   * Always print all generation info to standard output
   * @default false
   */
  samples_log_stdout?: boolean;
  /**
   * Multiple Tqdm
   * Add a second progress bar to the console that shows progress for an entire job.
   * @default true
   */
  multiple_tqdm?: boolean;
  /**
   * Print Hypernet Extra
   * Print extra hypernetwork information to console.
   * @default false
   */
  print_hypernet_extra?: boolean;
  /**
   * Unload Models When Training
   * Move VAE and CLIP to RAM when training if possible. Saves VRAM.
   * @default false
   */
  unload_models_when_training?: boolean;
  /**
   * Pin Memory
   * Turn on pin_memory for DataLoader. Makes training slightly faster but can increase memory usage.
   * @default false
   */
  pin_memory?: boolean;
  /**
   * Save Optimizer State
   * Saves Optimizer state as separate *.optim file. Training of embedding or HN can be resumed with the matching optim file.
   * @default false
   */
  save_optimizer_state?: boolean;
  /**
   * Save Training Settings To Txt
   * Save textual inversion and hypernet settings to a text file whenever training starts.
   * @default true
   */
  save_training_settings_to_txt?: boolean;
  /**
   * Dataset Filename Word Regex
   * Filename word regex
   * @default ""
   */
  dataset_filename_word_regex?: string;
  /**
   * Dataset Filename Join String
   * Filename join string
   * @default " "
   */
  dataset_filename_join_string?: string;
  /**
   * Training Image Repeats Per Epoch
   * Number of repeats for a single input image per epoch; used only for displaying epoch number
   * @default 1
   */
  training_image_repeats_per_epoch?: number;
  /**
   * Training Write Csv Every
   * Save an csv containing the loss to log directory every N steps, 0 to disable
   * @default 500
   */
  training_write_csv_every?: number;
  /**
   * Training Xattention Optimizations
   * Use cross attention optimizations while training
   * @default false
   */
  training_xattention_optimizations?: boolean;
  /**
   * Training Enable Tensorboard
   * Enable tensorboard logging.
   * @default false
   */
  training_enable_tensorboard?: boolean;
  /**
   * Training Tensorboard Save Images
   * Save generated images within tensorboard.
   * @default false
   */
  training_tensorboard_save_images?: boolean;
  /**
   * Training Tensorboard Flush Every
   * How often, in seconds, to flush the pending tensorboard events and summaries to disk.
   * @default 120
   */
  training_tensorboard_flush_every?: number;
  /**
   * Sd Model Checkpoint
   * Stable Diffusion checkpoint
   */
  sd_model_checkpoint?: null;
  /**
   * Sd Checkpoint Cache
   * Checkpoints to cache in RAM
   * @default 0
   */
  sd_checkpoint_cache?: number;
  /**
   * Sd Vae Checkpoint Cache
   * VAE Checkpoints to cache in RAM
   * @default 0
   */
  sd_vae_checkpoint_cache?: number;
  /**
   * Sd Vae
   * SD VAE
   * @default "Automatic"
   */
  sd_vae?: string;
  /**
   * Sd Vae As Default
   * Ignore selected VAE for stable diffusion checkpoints that have their own .vae.pt next to them
   * @default true
   */
  sd_vae_as_default?: boolean;
  /**
   * Inpainting Mask Weight
   * Inpainting conditioning mask strength
   * @default 1
   */
  inpainting_mask_weight?: number;
  /**
   * Initial Noise Multiplier
   * Noise multiplier for img2img
   * @default 1
   */
  initial_noise_multiplier?: number;
  /**
   * Img2Img Color Correction
   * Apply color correction to img2img results to match original colors.
   * @default false
   */
  img2img_color_correction?: boolean;
  /**
   * Img2Img Fix Steps
   * With img2img, do exactly the amount of steps the slider specifies (normally you'd do less with less denoising).
   * @default false
   */
  img2img_fix_steps?: boolean;
  /**
   * Img2Img Background Color
   * With img2img, fill image's transparent parts with this color.
   * @default "#ffffff"
   */
  img2img_background_color?: string;
  /**
   * Enable Quantization
   * Enable quantization in K samplers for sharper and cleaner results. This may change existing seeds. Requires restart to apply.
   * @default false
   */
  enable_quantization?: boolean;
  /**
   * Enable Emphasis
   * Emphasis: use (text) to make model pay more attention to text and [text] to make it pay less attention
   * @default true
   */
  enable_emphasis?: boolean;
  /**
   * Enable Batch Seeds
   * Make K-diffusion samplers produce same images in a batch as when making a single image
   * @default true
   */
  enable_batch_seeds?: boolean;
  /**
   * Comma Padding Backtrack
   * Increase coherency by padding from the last comma within n tokens when using more than 75 tokens
   * @default 20
   */
  comma_padding_backtrack?: number;
  /**
   * Clip Stop At Last Layers
   * Clip skip
   * @default 1
   */
  CLIP_stop_at_last_layers?: number;
  /**
   * Upcast Attn
   * Upcast cross attention layer to float32
   * @default false
   */
  upcast_attn?: boolean;
  /**
   * Use Old Emphasis Implementation
   * Use old emphasis implementation. Can be useful to reproduce old seeds.
   * @default false
   */
  use_old_emphasis_implementation?: boolean;
  /**
   * Use Old Karras Scheduler Sigmas
   * Use old karras scheduler sigmas (0.1 to 10).
   * @default false
   */
  use_old_karras_scheduler_sigmas?: boolean;
  /**
   * No Dpmpp Sde Batch Determinism
   * Do not make DPM++ SDE deterministic across different batch sizes.
   * @default false
   */
  no_dpmpp_sde_batch_determinism?: boolean;
  /**
   * Use Old Hires Fix Width Height
   * For hires fix, use width/height sliders to set final resolution rather than first pass (disables Upscale by, Resize width/height to).
   * @default false
   */
  use_old_hires_fix_width_height?: boolean;
  /**
   * Interrogate Keep Models In Memory
   * Interrogate: keep models in VRAM
   * @default false
   */
  interrogate_keep_models_in_memory?: boolean;
  /**
   * Interrogate Return Ranks
   * Interrogate: include ranks of model tags matches in results (Has no effect on caption-based interrogators).
   * @default false
   */
  interrogate_return_ranks?: boolean;
  /**
   * Interrogate Clip Num Beams
   * Interrogate: num_beams for BLIP
   * @default 1
   */
  interrogate_clip_num_beams?: number;
  /**
   * Interrogate Clip Min Length
   * Interrogate: minimum description length (excluding artists, etc..)
   * @default 24
   */
  interrogate_clip_min_length?: number;
  /**
   * Interrogate Clip Max Length
   * Interrogate: maximum description length
   * @default 48
   */
  interrogate_clip_max_length?: number;
  /**
   * Interrogate Clip Dict Limit
   * CLIP: maximum number of lines in text file (0 = No limit)
   * @default 1500
   */
  interrogate_clip_dict_limit?: number;
  /**
   * Interrogate Clip Skip Categories
   * CLIP: skip inquire categories
   * @default []
   */
  interrogate_clip_skip_categories?: any[];
  /**
   * Interrogate Deepbooru Score Threshold
   * Interrogate: deepbooru score threshold
   * @default 0.5
   */
  interrogate_deepbooru_score_threshold?: number;
  /**
   * Deepbooru Sort Alpha
   * Interrogate: deepbooru sort alphabetically
   * @default true
   */
  deepbooru_sort_alpha?: boolean;
  /**
   * Deepbooru Use Spaces
   * use spaces for tags in deepbooru
   * @default false
   */
  deepbooru_use_spaces?: boolean;
  /**
   * Deepbooru Escape
   * escape (\) brackets in deepbooru (so they are used as literal brackets and not for emphasis)
   * @default true
   */
  deepbooru_escape?: boolean;
  /**
   * Deepbooru Filter Tags
   * filter out those tags from deepbooru output (separated by comma)
   * @default ""
   */
  deepbooru_filter_tags?: string;
  /**
   * Extra Networks Default View
   * Default view for Extra Networks
   * @default "cards"
   */
  extra_networks_default_view?: string;
  /**
   * Extra Networks Default Multiplier
   * Multiplier for extra networks
   * @default 1
   */
  extra_networks_default_multiplier?: number;
  /**
   * Sd Hypernetwork
   * Add hypernetwork to prompt
   * @default "None"
   */
  sd_hypernetwork?: string;
  /**
   * Return Grid
   * Show grid in results for web
   * @default true
   */
  return_grid?: boolean;
  /**
   * Do Not Show Images
   * Do not show any images in results for web
   * @default false
   */
  do_not_show_images?: boolean;
  /**
   * Add Model Hash To Info
   * Add model hash to generation information
   * @default true
   */
  add_model_hash_to_info?: boolean;
  /**
   * Add Model Name To Info
   * Add model name to generation information
   * @default true
   */
  add_model_name_to_info?: boolean;
  /**
   * Disable Weights Auto Swap
   * When reading generation parameters from text into UI (from PNG info or pasted text), do not change the selected model/checkpoint.
   * @default true
   */
  disable_weights_auto_swap?: boolean;
  /**
   * Send Seed
   * Send seed when sending prompt or image to other interface
   * @default true
   */
  send_seed?: boolean;
  /**
   * Send Size
   * Send size when sending prompt or image to another interface
   * @default true
   */
  send_size?: boolean;
  /**
   * Font
   * Font for image grids that have text
   * @default ""
   */
  font?: string;
  /**
   * Js Modal Lightbox
   * Enable full page image viewer
   * @default true
   */
  js_modal_lightbox?: boolean;
  /**
   * Js Modal Lightbox Initially Zoomed
   * Show images zoomed in by default in full page image viewer
   * @default true
   */
  js_modal_lightbox_initially_zoomed?: boolean;
  /**
   * Show Progress In Title
   * Show generation progress in window title.
   * @default true
   */
  show_progress_in_title?: boolean;
  /**
   * Samplers In Dropdown
   * Use dropdown for sampler selection instead of radio group
   * @default true
   */
  samplers_in_dropdown?: boolean;
  /**
   * Dimensions And Batch Together
   * Show Width/Height and Batch sliders in same row
   * @default true
   */
  dimensions_and_batch_together?: boolean;
  /**
   * Keyedit Precision Attention
   * Ctrl+up/down precision when editing (attention:1.1)
   * @default 0.1
   */
  keyedit_precision_attention?: number;
  /**
   * Keyedit Precision Extra
   * Ctrl+up/down precision when editing <extra networks:0.9>
   * @default 0.05
   */
  keyedit_precision_extra?: number;
  /**
   * Quicksettings
   * Quicksettings list
   * @default "sd_model_checkpoint"
   */
  quicksettings?: string;
  /**
   * Ui Reorder
   * txt2img/img2img UI item order
   * @default "inpaint, sampler, checkboxes, hires_fix, dimensions, cfg, seed, batch, override_settings, scripts"
   */
  ui_reorder?: string;
  /**
   * Ui Extra Networks Tab Reorder
   * Extra networks tab order
   * @default ""
   */
  ui_extra_networks_tab_reorder?: string;
  /**
   * Localization
   * Localization (requires restart)
   * @default "None"
   */
  localization?: string;
  /**
   * Show Progressbar
   * Show progressbar
   * @default true
   */
  show_progressbar?: boolean;
  /**
   * Live Previews Enable
   * Show live previews of the created image
   * @default true
   */
  live_previews_enable?: boolean;
  /**
   * Show Progress Grid
   * Show previews of all images generated in a batch as a grid
   * @default true
   */
  show_progress_grid?: boolean;
  /**
   * Show Progress Every N Steps
   * Show new live preview image every N sampling steps. Set to -1 to show after completion of batch.
   * @default 10
   */
  show_progress_every_n_steps?: number;
  /**
   * Show Progress Type
   * Image creation progress preview mode
   * @default "Approx NN"
   */
  show_progress_type?: string;
  /**
   * Live Preview Content
   * Live preview subject
   * @default "Prompt"
   */
  live_preview_content?: string;
  /**
   * Live Preview Refresh Period
   * Progressbar/preview update period, in milliseconds
   * @default 1000
   */
  live_preview_refresh_period?: number;
  /**
   * Hide Samplers
   * Hide samplers in user interface (requires restart)
   * @default []
   */
  hide_samplers?: any[];
  /**
   * Eta Ddim
   * eta (noise multiplier) for DDIM
   * @default 0
   */
  eta_ddim?: number;
  /**
   * Eta Ancestral
   * eta (noise multiplier) for ancestral samplers
   * @default 1
   */
  eta_ancestral?: number;
  /**
   * Ddim Discretize
   * img2img DDIM discretize
   * @default "uniform"
   */
  ddim_discretize?: string;
  /**
   * S Churn
   * sigma churn
   * @default 0
   */
  s_churn?: number;
  /**
   * S Tmin
   * sigma tmin
   * @default 0
   */
  s_tmin?: number;
  /**
   * S Noise
   * sigma noise
   * @default 1
   */
  s_noise?: number;
  /**
   * Eta Noise Seed Delta
   * Eta noise seed delta
   * @default 0
   */
  eta_noise_seed_delta?: number;
  /**
   * Always Discard Next To Last Sigma
   * Always discard next-to-last sigma
   * @default false
   */
  always_discard_next_to_last_sigma?: boolean;
  /**
   * Postprocessing Enable In Main Ui
   * Enable postprocessing operations in txt2img and img2img tabs
   * @default []
   */
  postprocessing_enable_in_main_ui?: any[];
  /**
   * Postprocessing Operation Order
   * Postprocessing operation order
   * @default []
   */
  postprocessing_operation_order?: any[];
  /**
   * Upscaling Max Images In Cache
   * Maximum number of images in upscaling cache
   * @default 5
   */
  upscaling_max_images_in_cache?: number;
  /**
   * Disabled Extensions
   * Disable those extensions
   * @default []
   */
  disabled_extensions?: any[];
  /**
   * Sd Checkpoint Hash
   * SHA256 hash of the current checkpoint
   * @default ""
   */
  sd_checkpoint_hash?: string;
  /**
   * Sd Lora
   * Add Lora to prompt
   * @default "None"
   */
  sd_lora?: null;
  /**
   * Lora Apply To Outputs
   * Apply Lora to outputs rather than inputs when possible (experimental)
   * @default false
   */
  lora_apply_to_outputs?: null;
}

/** PNGInfoRequest */
export interface PNGInfoRequest {
  /**
   * Image
   * The base64 encoded PNG image
   */
  image: string;
}

/** PNGInfoResponse */
export interface PNGInfoResponse {
  /**
   * Image info
   * A string with the parameters used to generate the image
   */
  info: string;
  /**
   * Items
   * An object containing all the info the image had
   */
  items: object;
}

/** PredictBody */
export interface PredictBody {
  /** Session Hash */
  session_hash?: string;
  /** Event Id */
  event_id?: string;
  /** Data */
  data: any[];
  /** Fn Index */
  fn_index?: number;
  /**
   * Batched
   * @default false
   */
  batched?: boolean;
  /** Request */
  request?: object | object[] | (object & object[]);
}

/** PreprocessResponse */
export interface PreprocessResponse {
  /**
   * Preprocess info
   * Response string from preprocessing task.
   */
  info: string;
}

/** ProgressRequest */
export interface ProgressRequest {
  /**
   * Task ID
   * id of the task to get progress for
   */
  id_task?: string;
  /**
   * Live preview image ID
   * id of last received last preview image
   * @default -1
   */
  id_live_preview?: number;
}

/** PromptStyleItem */
export interface PromptStyleItem {
  /** Name */
  name: string;
  /** Prompt */
  prompt?: string;
  /** Negative Prompt */
  negative_prompt?: string;
}

/** RealesrganItem */
export interface RealesrganItem {
  /** Name */
  name: string;
  /** Path */
  path?: string;
  /** Scale */
  scale?: number;
}

/** ResetBody */
export interface ResetBody {
  /** Session Hash */
  session_hash: string;
  /** Fn Index */
  fn_index: number;
}

/** SDModelItem */
export interface SDModelItem {
  /** Title */
  title: string;
  /** Model Name */
  model_name: string;
  /** Short hash */
  hash?: string;
  /** sha256 hash */
  sha256?: string;
  /** Filename */
  filename: string;
  /** Config file */
  config?: string;
}

/** SamplerItem */
export interface SamplerItem {
  /** Name */
  name: string;
  /** Aliases */
  aliases: string[];
  /** Options */
  options: Record<string, string>;
}

/** StableDiffusionProcessingImg2Img */
export interface StableDiffusionProcessingImg2Img {
  /** Init Images */
  init_images?: any[];
  /**
   * Resize Mode
   * @default 0
   */
  resize_mode?: number;
  /**
   * Denoising Strength
   * @default 0.75
   */
  denoising_strength?: number;
  /** Image Cfg Scale */
  image_cfg_scale?: number;
  /** Mask */
  mask?: string;
  /**
   * Mask Blur
   * @default 4
   */
  mask_blur?: number;
  /**
   * Inpainting Fill
   * @default 0
   */
  inpainting_fill?: number;
  /**
   * Inpaint Full Res
   * @default true
   */
  inpaint_full_res?: boolean;
  /**
   * Inpaint Full Res Padding
   * @default 0
   */
  inpaint_full_res_padding?: number;
  /**
   * Inpainting Mask Invert
   * @default 0
   */
  inpainting_mask_invert?: number;
  /** Initial Noise Multiplier */
  initial_noise_multiplier?: number;
  /**
   * Prompt
   * @default ""
   */
  prompt?: string;
  /** Styles */
  styles?: string[];
  /**
   * Seed
   * @default -1
   */
  seed?: number;
  /**
   * Subseed
   * @default -1
   */
  subseed?: number;
  /**
   * Subseed Strength
   * @default 0
   */
  subseed_strength?: number;
  /**
   * Seed Resize From H
   * @default -1
   */
  seed_resize_from_h?: number;
  /**
   * Seed Resize From W
   * @default -1
   */
  seed_resize_from_w?: number;
  /** Sampler Name */
  sampler_name?: string;
  /**
   * Batch Size
   * @default 1
   */
  batch_size?: number;
  /**
   * N Iter
   * @default 1
   */
  n_iter?: number;
  /**
   * Steps
   * @default 50
   */
  steps?: number;
  /**
   * Cfg Scale
   * @default 7
   */
  cfg_scale?: number;
  /**
   * Width
   * @default 512
   */
  width?: number;
  /**
   * Height
   * @default 512
   */
  height?: number;
  /**
   * Restore Faces
   * @default false
   */
  restore_faces?: boolean;
  /**
   * Tiling
   * @default false
   */
  tiling?: boolean;
  /** Negative Prompt */
  negative_prompt?: string;
  /** Eta */
  eta?: number;
  /**
   * S Churn
   * @default 0
   */
  s_churn?: number;
  /** S Tmax */
  s_tmax?: number;
  /**
   * S Tmin
   * @default 0
   */
  s_tmin?: number;
  /**
   * S Noise
   * @default 1
   */
  s_noise?: number;
  /** Override Settings */
  override_settings?: object;
  /**
   * Override Settings Restore Afterwards
   * @default true
   */
  override_settings_restore_afterwards?: boolean;
  /**
   * Script Args
   * @default []
   */
  script_args?: any[];
  /**
   * Sampler Index
   * @default "Euler"
   */
  sampler_index?: string;
  /**
   * Include Init Images
   * @default false
   */
  include_init_images?: boolean;
  /** Script Name */
  script_name?: string;
}

/** StableDiffusionProcessingTxt2Img */
export interface StableDiffusionProcessingTxt2Img {
  /**
   * Enable Hr
   * @default false
   */
  enable_hr?: boolean;
  /**
   * Denoising Strength
   * @default 0
   */
  denoising_strength?: number;
  /**
   * Firstphase Width
   * @default 0
   */
  firstphase_width?: number;
  /**
   * Firstphase Height
   * @default 0
   */
  firstphase_height?: number;
  /**
   * Hr Scale
   * @default 2
   */
  hr_scale?: number;
  /** Hr Upscaler */
  hr_upscaler?: string;
  /**
   * Hr Second Pass Steps
   * @default 0
   */
  hr_second_pass_steps?: number;
  /**
   * Hr Resize X
   * @default 0
   */
  hr_resize_x?: number;
  /**
   * Hr Resize Y
   * @default 0
   */
  hr_resize_y?: number;
  /**
   * Prompt
   * @default ""
   */
  prompt?: string;
  /** Styles */
  styles?: string[];
  /**
   * Seed
   * @default -1
   */
  seed?: number;
  /**
   * Subseed
   * @default -1
   */
  subseed?: number;
  /**
   * Subseed Strength
   * @default 0
   */
  subseed_strength?: number;
  /**
   * Seed Resize From H
   * @default -1
   */
  seed_resize_from_h?: number;
  /**
   * Seed Resize From W
   * @default -1
   */
  seed_resize_from_w?: number;
  /** Sampler Name */
  sampler_name?: string;
  /**
   * Batch Size
   * @default 1
   */
  batch_size?: number;
  /**
   * N Iter
   * @default 1
   */
  n_iter?: number;
  /**
   * Steps
   * @default 50
   */
  steps?: number;
  /**
   * Cfg Scale
   * @default 7
   */
  cfg_scale?: number;
  /**
   * Width
   * @default 512
   */
  width?: number;
  /**
   * Height
   * @default 512
   */
  height?: number;
  /**
   * Restore Faces
   * @default false
   */
  restore_faces?: boolean;
  /**
   * Tiling
   * @default false
   */
  tiling?: boolean;
  /** Negative Prompt */
  negative_prompt?: string;
  /** Eta */
  eta?: number;
  /**
   * S Churn
   * @default 0
   */
  s_churn?: number;
  /** S Tmax */
  s_tmax?: number;
  /**
   * S Tmin
   * @default 0
   */
  s_tmin?: number;
  /**
   * S Noise
   * @default 1
   */
  s_noise?: number;
  /** Override Settings */
  override_settings?: object;
  /**
   * Override Settings Restore Afterwards
   * @default true
   */
  override_settings_restore_afterwards?: boolean;
  /**
   * Script Args
   * @default []
   */
  script_args?: any[];
  /**
   * Sampler Index
   * @default "Euler"
   */
  sampler_index?: string;
  /** Script Name */
  script_name?: string;
}

/** TextToImageResponse */
export interface TextToImageResponse {
  /**
   * Image
   * The generated image in base64 format.
   */
  images?: string[];
  /** Parameters */
  parameters: StableDiffusionProcessingTxt2Img;
  /** Info */
  info: string;
}

/** TrainResponse */
export interface TrainResponse {
  /**
   * Train info
   * Response string from train embedding or hypernetwork task.
   */
  info: string;
}

/** UpscalerItem */
export interface UpscalerItem {
  /** Name */
  name: string;
  /** Model Name */
  model_name?: string;
  /** Path */
  model_path?: string;
  /** URL */
  model_url?: string;
  /** Scale */
  scale?: number;
}

/** ValidationError */
export interface ValidationError {
  /** Location */
  loc: any[];
  /** Message */
  msg: string;
  /** Error Type */
  type: string;
}

/** ProgressResponse */
export interface ModulesApiModelsProgressResponse {
  /**
   * Progress
   * The progress with a range of 0 to 1
   */
  progress: number;
  /** ETA in secs */
  eta_relative: number;
  /**
   * State
   * The current state snapshot
   */
  state: object;
  /**
   * Current image
   * The current image in base64 format. opts.show_progress_every_n_steps is required for this to work.
   */
  current_image?: string;
  /**
   * Info text
   * Info text used by WebUI.
   */
  textinfo?: string;
}

/** ProgressResponse */
export interface ModulesProgressProgressResponse {
  /** Whether the task is being worked on right now */
  active: boolean;
  /** Whether the task is in queue */
  queued: boolean;
  /** Whether the task has already finished */
  completed: boolean;
  /**
   * Progress
   * The progress with a range of 0 to 1
   */
  progress?: number;
  /** ETA in secs */
  eta?: number;
  /**
   * Live preview image
   * Current live preview; a data: uri
   */
  live_preview?: string;
  /**
   * Live preview image ID
   * Send this together with next request to prevent receiving same image
   */
  id_live_preview?: number;
  /**
   * Info text
   * Info text used by WebUI.
   */
  textinfo?: string;
}

export type QueryParamsType = Record<string | number, any>;
export type ResponseFormat = keyof Omit<Body, "body" | "bodyUsed">;

export interface FullRequestParams extends Omit<RequestInit, "body"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseFormat;
  /** request body */
  body?: unknown;
  /** base url */
  baseUrl?: string;
  /** request cancellation token */
  cancelToken?: CancelToken;
}

export type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;

export interface ApiConfig<SecurityDataType = unknown> {
  baseUrl?: string;
  baseApiParams?: Omit<RequestParams, "baseUrl" | "cancelToken" | "signal">;
  securityWorker?: (securityData: SecurityDataType | null) => Promise<RequestParams | void> | RequestParams | void;
  customFetch?: typeof fetch;
}

export interface HttpResponse<D extends unknown, E extends unknown = unknown> extends Response {
  data: D;
  error: E;
}

type CancelToken = Symbol | string | number;

export enum ContentType {
  Json = "application/json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
  Text = "text/plain",
}

export class HttpClient<SecurityDataType = unknown> {
  public baseUrl: string = "";
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"];
  private abortControllers = new Map<CancelToken, AbortController>();
  private customFetch = (...fetchParams: Parameters<typeof fetch>) => fetch(...fetchParams);

  private baseApiParams: RequestParams = {
    credentials: "same-origin",
    headers: {},
    redirect: "follow",
    referrerPolicy: "no-referrer",
  };

  constructor(apiConfig: ApiConfig<SecurityDataType> = {}) {
    Object.assign(this, apiConfig);
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  protected encodeQueryParam(key: string, value: any) {
    const encodedKey = encodeURIComponent(key);
    return `${encodedKey}=${encodeURIComponent(typeof value === "number" ? value : `${value}`)}`;
  }

  protected addQueryParam(query: QueryParamsType, key: string) {
    return this.encodeQueryParam(key, query[key]);
  }

  protected addArrayQueryParam(query: QueryParamsType, key: string) {
    const value = query[key];
    return value.map((v: any) => this.encodeQueryParam(key, v)).join("&");
  }

  protected toQueryString(rawQuery?: QueryParamsType): string {
    const query = rawQuery || {};
    const keys = Object.keys(query).filter((key) => "undefined" !== typeof query[key]);
    return keys
      .map((key) => (Array.isArray(query[key]) ? this.addArrayQueryParam(query, key) : this.addQueryParam(query, key)))
      .join("&");
  }

  protected addQueryParams(rawQuery?: QueryParamsType): string {
    const queryString = this.toQueryString(rawQuery);
    return queryString ? `?${queryString}` : "";
  }

  private contentFormatters: Record<ContentType, (input: any) => any> = {
    [ContentType.Json]: (input: any) =>
      input !== null && (typeof input === "object" || typeof input === "string") ? JSON.stringify(input) : input,
    [ContentType.Text]: (input: any) => (input !== null && typeof input !== "string" ? JSON.stringify(input) : input),
    [ContentType.FormData]: (input: any) =>
      Object.keys(input || {}).reduce((formData, key) => {
        const property = input[key];
        formData.append(
          key,
          property instanceof Blob
            ? property
            : typeof property === "object" && property !== null
            ? JSON.stringify(property)
            : `${property}`,
        );
        return formData;
      }, new FormData()),
    [ContentType.UrlEncoded]: (input: any) => this.toQueryString(input),
  };

  protected mergeRequestParams(params1: RequestParams, params2?: RequestParams): RequestParams {
    return {
      ...this.baseApiParams,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...(this.baseApiParams.headers || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  protected createAbortSignal = (cancelToken: CancelToken): AbortSignal | undefined => {
    if (this.abortControllers.has(cancelToken)) {
      const abortController = this.abortControllers.get(cancelToken);
      if (abortController) {
        return abortController.signal;
      }
      return void 0;
    }

    const abortController = new AbortController();
    this.abortControllers.set(cancelToken, abortController);
    return abortController.signal;
  };

  public abortRequest = (cancelToken: CancelToken) => {
    const abortController = this.abortControllers.get(cancelToken);

    if (abortController) {
      abortController.abort();
      this.abortControllers.delete(cancelToken);
    }
  };

  public request = async <T = any, E = any>({
    body,
    secure,
    path,
    type,
    query,
    format,
    baseUrl,
    cancelToken,
    ...params
  }: FullRequestParams): Promise<HttpResponse<T, E>> => {
    const secureParams =
      ((typeof secure === "boolean" ? secure : this.baseApiParams.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const queryString = query && this.toQueryString(query);
    const payloadFormatter = this.contentFormatters[type || ContentType.Json];
    const responseFormat = format || requestParams.format;

    return this.customFetch(`${baseUrl || this.baseUrl || ""}${path}${queryString ? `?${queryString}` : ""}`, {
      ...requestParams,
      headers: {
        ...(requestParams.headers || {}),
        ...(type && type !== ContentType.FormData ? { "Content-Type": type } : {}),
      },
      signal: cancelToken ? this.createAbortSignal(cancelToken) : requestParams.signal,
      body: typeof body === "undefined" || body === null ? null : payloadFormatter(body),
    }).then(async (response) => {
      const r = response as HttpResponse<T, E>;
      r.data = null as unknown as T;
      r.error = null as unknown as E;

      const data = !responseFormat
        ? r
        : await response[responseFormat]()
            .then((data) => {
              if (r.ok) {
                r.data = data;
              } else {
                r.error = data;
              }
              return r;
            })
            .catch((e) => {
              r.error = e;
              return r;
            });

      if (cancelToken) {
        this.abortControllers.delete(cancelToken);
      }

      if (!response.ok) throw data;
      return data;
    });
  };
}

/**
 * @title FastAPI
 * @version 0.1.0
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @name MainGet
   * @summary Main
   * @request GET:/
   */
  mainGet = (params: RequestParams = {}) =>
    this.request<string, any>({
      path: `/`,
      method: "GET",
      ...params,
    });

  /**
   * No description
   *
   * @name MainHead
   * @summary Main
   * @request HEAD:/
   */
  mainHead = (params: RequestParams = {}) =>
    this.request<string, any>({
      path: `/`,
      method: "HEAD",
      ...params,
    });

  user = {
    /**
     * No description
     *
     * @name GetCurrentUserUserGet
     * @summary Get Current User
     * @request GET:/user/
     */
    getCurrentUserUserGet: (params: RequestParams = {}) =>
      this.request<string, any>({
        path: `/user/`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name GetCurrentUserUserGet2
     * @summary Get Current User
     * @request GET:/user
     * @originalName getCurrentUserUserGet
     * @duplicate
     */
    getCurrentUserUserGet2: (params: RequestParams = {}) =>
      this.request<string, any>({
        path: `/user`,
        method: "GET",
        format: "json",
        ...params,
      }),
  };
  loginCheck = {
    /**
     * No description
     *
     * @name LoginCheckLoginCheckGet
     * @summary Login Check
     * @request GET:/login_check/
     */
    loginCheckLoginCheckGet: (params: RequestParams = {}) =>
      this.request<any, any>({
        path: `/login_check/`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name LoginCheckLoginCheckGet2
     * @summary Login Check
     * @request GET:/login_check
     * @originalName loginCheckLoginCheckGet
     * @duplicate
     */
    loginCheckLoginCheckGet2: (params: RequestParams = {}) =>
      this.request<any, any>({
        path: `/login_check`,
        method: "GET",
        format: "json",
        ...params,
      }),
  };
  token = {
    /**
     * No description
     *
     * @name GetTokenTokenGet
     * @summary Get Token
     * @request GET:/token/
     */
    getTokenTokenGet: (params: RequestParams = {}) =>
      this.request<object, any>({
        path: `/token/`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name GetTokenTokenGet2
     * @summary Get Token
     * @request GET:/token
     * @originalName getTokenTokenGet
     * @duplicate
     */
    getTokenTokenGet2: (params: RequestParams = {}) =>
      this.request<object, any>({
        path: `/token`,
        method: "GET",
        format: "json",
        ...params,
      }),
  };
  appId = {
    /**
     * No description
     *
     * @name AppIdAppIdGet
     * @summary App Id
     * @request GET:/app_id/
     */
    appIdAppIdGet: (params: RequestParams = {}) =>
      this.request<object, any>({
        path: `/app_id/`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name AppIdAppIdGet2
     * @summary App Id
     * @request GET:/app_id
     * @originalName appIdAppIdGet
     * @duplicate
     */
    appIdAppIdGet2: (params: RequestParams = {}) =>
      this.request<object, any>({
        path: `/app_id`,
        method: "GET",
        format: "json",
        ...params,
      }),
  };
  login = {
    /**
     * No description
     *
     * @name LoginLoginPost
     * @summary Login
     * @request POST:/login/
     */
    loginLoginPost: (data: BodyLoginLoginPost, params: RequestParams = {}) =>
      this.request<any, HTTPValidationError>({
        path: `/login/`,
        method: "POST",
        body: data,
        type: ContentType.UrlEncoded,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name LoginLoginPost2
     * @summary Login
     * @request POST:/login
     * @originalName loginLoginPost
     * @duplicate
     */
    loginLoginPost2: (data: BodyLoginLoginPost, params: RequestParams = {}) =>
      this.request<any, HTTPValidationError>({
        path: `/login`,
        method: "POST",
        body: data,
        type: ContentType.UrlEncoded,
        format: "json",
        ...params,
      }),
  };
  config = {
    /**
     * No description
     *
     * @name GetConfigConfigGet
     * @summary Get Config
     * @request GET:/config
     */
    getConfigConfigGet: (params: RequestParams = {}) =>
      this.request<any, any>({
        path: `/config`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name GetConfigConfigGet2
     * @summary Get Config
     * @request GET:/config/
     * @originalName getConfigConfigGet
     * @duplicate
     */
    getConfigConfigGet2: (params: RequestParams = {}) =>
      this.request<any, any>({
        path: `/config/`,
        method: "GET",
        format: "json",
        ...params,
      }),
  };
  static = {
    /**
     * No description
     *
     * @name StaticResourceStaticPathGet
     * @summary Static Resource
     * @request GET:/static/{path}
     */
    staticResourceStaticPathGet: (path: string, params: RequestParams = {}) =>
      this.request<any, HTTPValidationError>({
        path: `/static/${path}`,
        method: "GET",
        format: "json",
        ...params,
      }),
  };
  assets = {
    /**
     * No description
     *
     * @name BuildResourceAssetsPathGet
     * @summary Build Resource
     * @request GET:/assets/{path}
     */
    buildResourceAssetsPathGet: (path: string, params: RequestParams = {}) =>
      this.request<any, HTTPValidationError>({
        path: `/assets/${path}`,
        method: "GET",
        format: "json",
        ...params,
      }),
  };
  faviconIco = {
    /**
     * No description
     *
     * @name FaviconFaviconIcoGet
     * @summary Favicon
     * @request GET:/favicon.ico
     */
    faviconFaviconIcoGet: (params: RequestParams = {}) =>
      this.request<any, any>({
        path: `/favicon.ico`,
        method: "GET",
        format: "json",
        ...params,
      }),
  };
  filePath = {
    /**
     * No description
     *
     * @name FileFilePathGet
     * @summary File
     * @request GET:/file={path}
     */
    fileFilePathGet: (path: string, params: RequestParams = {}) =>
      this.request<any, HTTPValidationError>({
        path: `/file=${path}`,
        method: "GET",
        format: "json",
        ...params,
      }),
  };
  file = {
    /**
     * No description
     *
     * @name FileDeprecatedFilePathGet
     * @summary File Deprecated
     * @request GET:/file/{path}
     */
    fileDeprecatedFilePathGet: (path: string, params: RequestParams = {}) =>
      this.request<any, HTTPValidationError>({
        path: `/file/${path}`,
        method: "GET",
        format: "json",
        ...params,
      }),
  };
  reset = {
    /**
     * No description
     *
     * @name ResetIteratorResetPost
     * @summary Reset Iterator
     * @request POST:/reset
     */
    resetIteratorResetPost: (data: ResetBody, params: RequestParams = {}) =>
      this.request<any, HTTPValidationError>({
        path: `/reset`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name ResetIteratorResetPost2
     * @summary Reset Iterator
     * @request POST:/reset/
     * @originalName resetIteratorResetPost
     * @duplicate
     */
    resetIteratorResetPost2: (data: ResetBody, params: RequestParams = {}) =>
      this.request<any, HTTPValidationError>({
        path: `/reset/`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  api = {
    /**
     * No description
     *
     * @name PredictApiApiNamePost
     * @summary Predict
     * @request POST:/api/{api_name}/
     */
    predictApiApiNamePost: (apiName: string, data: PredictBody, params: RequestParams = {}) =>
      this.request<any, HTTPValidationError>({
        path: `/api/${apiName}/`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name PredictApiApiNamePost2
     * @summary Predict
     * @request POST:/api/{api_name}
     * @originalName predictApiApiNamePost
     * @duplicate
     */
    predictApiApiNamePost2: (apiName: string, data: PredictBody, params: RequestParams = {}) =>
      this.request<any, HTTPValidationError>({
        path: `/api/${apiName}`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  run = {
    /**
     * No description
     *
     * @name PredictRunApiNamePost
     * @summary Predict
     * @request POST:/run/{api_name}/
     */
    predictRunApiNamePost: (apiName: string, data: PredictBody, params: RequestParams = {}) =>
      this.request<any, HTTPValidationError>({
        path: `/run/${apiName}/`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name PredictRunApiNamePost2
     * @summary Predict
     * @request POST:/run/{api_name}
     * @originalName predictRunApiNamePost
     * @duplicate
     */
    predictRunApiNamePost2: (apiName: string, data: PredictBody, params: RequestParams = {}) =>
      this.request<any, HTTPValidationError>({
        path: `/run/${apiName}`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  queue = {
    /**
     * No description
     *
     * @name GetQueueStatusQueueStatusGet
     * @summary Get Queue Status
     * @request GET:/queue/status
     */
    getQueueStatusQueueStatusGet: (params: RequestParams = {}) =>
      this.request<Estimation, any>({
        path: `/queue/status`,
        method: "GET",
        format: "json",
        ...params,
      }),
  };
  startupEvents = {
    /**
     * No description
     *
     * @name StartupEventsStartupEventsGet
     * @summary Startup Events
     * @request GET:/startup-events
     */
    startupEventsStartupEventsGet: (params: RequestParams = {}) =>
      this.request<any, any>({
        path: `/startup-events`,
        method: "GET",
        format: "json",
        ...params,
      }),
  };
  robotsTxt = {
    /**
     * No description
     *
     * @name RobotsTxtRobotsTxtGet
     * @summary Robots Txt
     * @request GET:/robots.txt
     */
    robotsTxtRobotsTxtGet: (params: RequestParams = {}) =>
      this.request<string, any>({
        path: `/robots.txt`,
        method: "GET",
        ...params,
      }),
  };
  internal = {
    /**
     * No description
     *
     * @name ProgressapiInternalProgressPost
     * @summary Progressapi
     * @request POST:/internal/progress
     */
    progressapiInternalProgressPost: (data: ProgressRequest, params: RequestParams = {}) =>
      this.request<ModulesProgressProgressResponse, HTTPValidationError>({
        path: `/internal/progress`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  sdapi = {
    /**
     * No description
     *
     * @name Text2ImgapiSdapiV1Txt2ImgPost
     * @summary Text2Imgapi
     * @request POST:/sdapi/v1/txt2img
     */
    text2ImgapiSdapiV1Txt2ImgPost: (data: StableDiffusionProcessingTxt2Img, params: RequestParams = {}) =>
      this.request<TextToImageResponse, HTTPValidationError>({
        path: `/sdapi/v1/txt2img`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name Img2ImgapiSdapiV1Img2ImgPost
     * @summary Img2Imgapi
     * @request POST:/sdapi/v1/img2img
     */
    img2ImgapiSdapiV1Img2ImgPost: (data: StableDiffusionProcessingImg2Img, params: RequestParams = {}) =>
      this.request<ImageToImageResponse, HTTPValidationError>({
        path: `/sdapi/v1/img2img`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name ExtrasSingleImageApiSdapiV1ExtraSingleImagePost
     * @summary Extras Single Image Api
     * @request POST:/sdapi/v1/extra-single-image
     */
    extrasSingleImageApiSdapiV1ExtraSingleImagePost: (data: ExtrasSingleImageRequest, params: RequestParams = {}) =>
      this.request<ExtrasSingleImageResponse, HTTPValidationError>({
        path: `/sdapi/v1/extra-single-image`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name ExtrasBatchImagesApiSdapiV1ExtraBatchImagesPost
     * @summary Extras Batch Images Api
     * @request POST:/sdapi/v1/extra-batch-images
     */
    extrasBatchImagesApiSdapiV1ExtraBatchImagesPost: (data: ExtrasBatchImagesRequest, params: RequestParams = {}) =>
      this.request<ExtrasBatchImagesResponse, HTTPValidationError>({
        path: `/sdapi/v1/extra-batch-images`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name PnginfoapiSdapiV1PngInfoPost
     * @summary Pnginfoapi
     * @request POST:/sdapi/v1/png-info
     */
    pnginfoapiSdapiV1PngInfoPost: (data: PNGInfoRequest, params: RequestParams = {}) =>
      this.request<PNGInfoResponse, HTTPValidationError>({
        path: `/sdapi/v1/png-info`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name ProgressapiSdapiV1ProgressGet
     * @summary Progressapi
     * @request GET:/sdapi/v1/progress
     */
    progressapiSdapiV1ProgressGet: (
      query?: {
        /**
         * Skip Current Image
         * @default false
         */
        skip_current_image?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<ModulesApiModelsProgressResponse, HTTPValidationError>({
        path: `/sdapi/v1/progress`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name InterrogateapiSdapiV1InterrogatePost
     * @summary Interrogateapi
     * @request POST:/sdapi/v1/interrogate
     */
    interrogateapiSdapiV1InterrogatePost: (data: InterrogateRequest, params: RequestParams = {}) =>
      this.request<any, HTTPValidationError>({
        path: `/sdapi/v1/interrogate`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name InterruptapiSdapiV1InterruptPost
     * @summary Interruptapi
     * @request POST:/sdapi/v1/interrupt
     */
    interruptapiSdapiV1InterruptPost: (params: RequestParams = {}) =>
      this.request<any, any>({
        path: `/sdapi/v1/interrupt`,
        method: "POST",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name SkipSdapiV1SkipPost
     * @summary Skip
     * @request POST:/sdapi/v1/skip
     */
    skipSdapiV1SkipPost: (params: RequestParams = {}) =>
      this.request<any, any>({
        path: `/sdapi/v1/skip`,
        method: "POST",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name GetConfigSdapiV1OptionsGet
     * @summary Get Config
     * @request GET:/sdapi/v1/options
     */
    getConfigSdapiV1OptionsGet: (params: RequestParams = {}) =>
      this.request<Options, any>({
        path: `/sdapi/v1/options`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name SetConfigSdapiV1OptionsPost
     * @summary Set Config
     * @request POST:/sdapi/v1/options
     */
    setConfigSdapiV1OptionsPost: (data: object, params: RequestParams = {}) =>
      this.request<any, HTTPValidationError>({
        path: `/sdapi/v1/options`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name GetCmdFlagsSdapiV1CmdFlagsGet
     * @summary Get Cmd Flags
     * @request GET:/sdapi/v1/cmd-flags
     */
    getCmdFlagsSdapiV1CmdFlagsGet: (params: RequestParams = {}) =>
      this.request<Flags, any>({
        path: `/sdapi/v1/cmd-flags`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name GetSamplersSdapiV1SamplersGet
     * @summary Get Samplers
     * @request GET:/sdapi/v1/samplers
     */
    getSamplersSdapiV1SamplersGet: (params: RequestParams = {}) =>
      this.request<SamplerItem[], any>({
        path: `/sdapi/v1/samplers`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name GetUpscalersSdapiV1UpscalersGet
     * @summary Get Upscalers
     * @request GET:/sdapi/v1/upscalers
     */
    getUpscalersSdapiV1UpscalersGet: (params: RequestParams = {}) =>
      this.request<UpscalerItem[], any>({
        path: `/sdapi/v1/upscalers`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name GetSdModelsSdapiV1SdModelsGet
     * @summary Get Sd Models
     * @request GET:/sdapi/v1/sd-models
     */
    getSdModelsSdapiV1SdModelsGet: (params: RequestParams = {}) =>
      this.request<SDModelItem[], any>({
        path: `/sdapi/v1/sd-models`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name GetHypernetworksSdapiV1HypernetworksGet
     * @summary Get Hypernetworks
     * @request GET:/sdapi/v1/hypernetworks
     */
    getHypernetworksSdapiV1HypernetworksGet: (params: RequestParams = {}) =>
      this.request<HypernetworkItem[], any>({
        path: `/sdapi/v1/hypernetworks`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name GetFaceRestorersSdapiV1FaceRestorersGet
     * @summary Get Face Restorers
     * @request GET:/sdapi/v1/face-restorers
     */
    getFaceRestorersSdapiV1FaceRestorersGet: (params: RequestParams = {}) =>
      this.request<FaceRestorerItem[], any>({
        path: `/sdapi/v1/face-restorers`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name GetRealesrganModelsSdapiV1RealesrganModelsGet
     * @summary Get Realesrgan Models
     * @request GET:/sdapi/v1/realesrgan-models
     */
    getRealesrganModelsSdapiV1RealesrganModelsGet: (params: RequestParams = {}) =>
      this.request<RealesrganItem[], any>({
        path: `/sdapi/v1/realesrgan-models`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name GetPromptStylesSdapiV1PromptStylesGet
     * @summary Get Prompt Styles
     * @request GET:/sdapi/v1/prompt-styles
     */
    getPromptStylesSdapiV1PromptStylesGet: (params: RequestParams = {}) =>
      this.request<PromptStyleItem[], any>({
        path: `/sdapi/v1/prompt-styles`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name GetEmbeddingsSdapiV1EmbeddingsGet
     * @summary Get Embeddings
     * @request GET:/sdapi/v1/embeddings
     */
    getEmbeddingsSdapiV1EmbeddingsGet: (params: RequestParams = {}) =>
      this.request<EmbeddingsResponse, any>({
        path: `/sdapi/v1/embeddings`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name RefreshCheckpointsSdapiV1RefreshCheckpointsPost
     * @summary Refresh Checkpoints
     * @request POST:/sdapi/v1/refresh-checkpoints
     */
    refreshCheckpointsSdapiV1RefreshCheckpointsPost: (params: RequestParams = {}) =>
      this.request<any, any>({
        path: `/sdapi/v1/refresh-checkpoints`,
        method: "POST",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name CreateEmbeddingSdapiV1CreateEmbeddingPost
     * @summary Create Embedding
     * @request POST:/sdapi/v1/create/embedding
     */
    createEmbeddingSdapiV1CreateEmbeddingPost: (data: object, params: RequestParams = {}) =>
      this.request<CreateResponse, HTTPValidationError>({
        path: `/sdapi/v1/create/embedding`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name CreateHypernetworkSdapiV1CreateHypernetworkPost
     * @summary Create Hypernetwork
     * @request POST:/sdapi/v1/create/hypernetwork
     */
    createHypernetworkSdapiV1CreateHypernetworkPost: (data: object, params: RequestParams = {}) =>
      this.request<CreateResponse, HTTPValidationError>({
        path: `/sdapi/v1/create/hypernetwork`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name PreprocessSdapiV1PreprocessPost
     * @summary Preprocess
     * @request POST:/sdapi/v1/preprocess
     */
    preprocessSdapiV1PreprocessPost: (data: object, params: RequestParams = {}) =>
      this.request<PreprocessResponse, HTTPValidationError>({
        path: `/sdapi/v1/preprocess`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name TrainEmbeddingSdapiV1TrainEmbeddingPost
     * @summary Train Embedding
     * @request POST:/sdapi/v1/train/embedding
     */
    trainEmbeddingSdapiV1TrainEmbeddingPost: (data: object, params: RequestParams = {}) =>
      this.request<TrainResponse, HTTPValidationError>({
        path: `/sdapi/v1/train/embedding`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name TrainHypernetworkSdapiV1TrainHypernetworkPost
     * @summary Train Hypernetwork
     * @request POST:/sdapi/v1/train/hypernetwork
     */
    trainHypernetworkSdapiV1TrainHypernetworkPost: (data: object, params: RequestParams = {}) =>
      this.request<TrainResponse, HTTPValidationError>({
        path: `/sdapi/v1/train/hypernetwork`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name GetMemorySdapiV1MemoryGet
     * @summary Get Memory
     * @request GET:/sdapi/v1/memory
     */
    getMemorySdapiV1MemoryGet: (params: RequestParams = {}) =>
      this.request<MemoryResponse, any>({
        path: `/sdapi/v1/memory`,
        method: "GET",
        format: "json",
        ...params,
      }),
  };
  controlnet = {
    /**
     * No description
     *
     * @name ControlnetTxt2ImgControlnetTxt2ImgPost
     * @summary Controlnet Txt2Img
     * @request POST:/controlnet/txt2img
     */
    controlnetTxt2ImgControlnetTxt2ImgPost: (
      data: ControlNetStableDiffusionProcessingTxt2Img,
      params: RequestParams = {},
    ) =>
      this.request<TextToImageResponse, HTTPValidationError>({
        path: `/controlnet/txt2img`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name ControlnetImg2ImgControlnetImg2ImgPost
     * @summary Controlnet Img2Img
     * @request POST:/controlnet/img2img
     */
    controlnetImg2ImgControlnetImg2ImgPost: (
      data: ControlNetStableDiffusionProcessingImg2Img,
      params: RequestParams = {},
    ) =>
      this.request<ImageToImageResponse, HTTPValidationError>({
        path: `/controlnet/img2img`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name VersionControlnetVersionGet
     * @summary Version
     * @request GET:/controlnet/version
     */
    versionControlnetVersionGet: (params: RequestParams = {}) =>
      this.request<any, any>({
        path: `/controlnet/version`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name ModelListControlnetModelListGet
     * @summary Model List
     * @request GET:/controlnet/model_list
     */
    modelListControlnetModelListGet: (params: RequestParams = {}) =>
      this.request<any, any>({
        path: `/controlnet/model_list`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name ModuleListControlnetModuleListGet
     * @summary Module List
     * @request GET:/controlnet/module_list
     */
    moduleListControlnetModuleListGet: (params: RequestParams = {}) =>
      this.request<any, any>({
        path: `/controlnet/module_list`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name DetectControlnetDetectPost
     * @summary Detect
     * @request POST:/controlnet/detect
     */
    detectControlnetDetectPost: (data: BodyDetectControlnetDetectPost, params: RequestParams = {}) =>
      this.request<any, HTTPValidationError>({
        path: `/controlnet/detect`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  sdExtraNetworks = {
    /**
     * No description
     *
     * @name FetchFileSdExtraNetworksThumbGet
     * @summary Fetch File
     * @request GET:/sd_extra_networks/thumb
     */
    fetchFileSdExtraNetworksThumbGet: (
      query?: {
        /**
         * Filename
         * @default ""
         */
        filename?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, HTTPValidationError>({
        path: `/sd_extra_networks/thumb`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),
  };
}
