type Airport = {
  shortname: string,
  name: string
}

export type Flight = {
  id: string,
  company: string,
  departure: Airport,
  arrival: Airport,
  unixDateTimeFrom: number,
  unixDateTimeTo: number,
  connectionsCount: number,
  price: number
}

export type Flights = Flight[];