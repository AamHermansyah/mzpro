import { Cormorant } from "next/font/google";

const sora = Cormorant({ subsets: ['latin'], weight: ['400']});

type typeProps = {
  children: React.ReactNode,
  className?: string
}

function PSerifFont({ children, className }: typeProps) {
  return (
    <p className={`${sora.className} ${className}`}>
      {children}
    </p>
  )
}

export default PSerifFont