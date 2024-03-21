import React from "react"

export type User={

    email: string,
  password: string,
  firstName: string,
  lastName: string,
  displayName: string,
  bio?: string,
  publicData?: {
    age?:number
  },
  protectedData?: {
    phoneNumber?: string
  },
  privateData?: {
    discoveredServiceVia?: string
  }

}