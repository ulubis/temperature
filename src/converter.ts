export interface Converter {
  celcius: string
  kelvin: string
  fahrenheit: string
  reamur: string
  convert: (initial: number, from: 'c' | 'f' | 'r' | 'k') => void
}

const converterUtils: Converter = {
  celcius: "",
  kelvin: "",
  fahrenheit: "",
  reamur: "",
  convert: function (initial: number, from: "c" | "f" | "r" | "k"): void {
    throw new Error("Function not implemented.")
  }
}