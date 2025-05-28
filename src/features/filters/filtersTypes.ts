export type AirlinesFilter = string[];
export type StopsFilter = number[];

export interface Filters {
  airlinesFilter: AirlinesFilter;
  stops: StopsFilter;
}