export interface IMeasure {
    "image_url": string,
    "measure_value": number,
    "measure_uuid": string
}

export interface InputMeasure {
    "image": "base64",
    "customer_code": "string",
    "measure_datetime": "datetime",
    "measure_type": "WATER" | "GAS"
}