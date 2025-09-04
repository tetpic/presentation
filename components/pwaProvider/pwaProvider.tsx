'use client'
import { PWAProvider } from "next-pwa-pack";

interface Props {
  children: React.ReactNode
}

export default function ClientPWAProvider (props: Props) {

  return (<PWAProvider>
    {props.children}
  </PWAProvider>)
}