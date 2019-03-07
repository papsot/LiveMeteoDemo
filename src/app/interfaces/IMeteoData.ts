export interface IMeteoData {
  formattedValue: string;
  rawValue: number;
  unitSymbol: string;
  method: string;
}

export interface IMeteoDataResponse {
  data: string;
  headers: {
    'set-cookie': string;
  };
  status: number;
  url: string;
}
