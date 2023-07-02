'use client'

import { createPromiseClient } from "@bufbuild/connect"
import { createConnectTransport } from "@bufbuild/connect-web"
import { GreetService } from "@/gen/greet/v1/greet_connect"
import { useState } from "react"

const transport = createConnectTransport({
  baseUrl: "http://localhost:8080"
})
const client = createPromiseClient(GreetService, transport)


async function greeting(name: string): Promise<string> {
  const res = await client.greet({
    name: name
  })
  return res.greeting
}

export default function Greet() {
  const [name, setName] = useState("");
  const [res, setRes] = useState("")
  const click = async (name: string) => {
    const resGreeting = await greeting(name)
    setRes(resGreeting)
  }
  return (
    <>
      <input value={name} onChange={(event) => setName(event.target.value)}></input>
      <div>{res}</div>
      <button onClick={() => click(name)}>send</button>
    </>
  )
}