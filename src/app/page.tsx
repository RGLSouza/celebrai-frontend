import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Celebraí - Pagina Principal",
  description: "A busca pela festa ideal",
  icons: "/Vector.svg",
  openGraph: {
    title: "Celebraí - Pagina Principal",
    description: "A busca pela festa ideal",
    images: "/Vector.svg"
  },
  robots:{
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true
    }
  }
}

export default function Home(){
  return (
    <div>
      <h1>PAGINA HOME</h1>
    </div>
  )
}