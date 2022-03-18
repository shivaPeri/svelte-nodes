// input types
export type Range = {
  value: number;
  min?: number;
  max?: number;
};
export type Selection = string[];
export type Input = boolean | Selection | Range;
export type MultiInput = any;

// node stuff here
export interface Node {
  input: any;
  output: any;
}
