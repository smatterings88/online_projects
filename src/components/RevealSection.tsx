import { type ReactNode, useEffect, useRef, useState } from 'react'

type RevealSectionProps = {
  children: ReactNode
  className?: string
  as?: 'section' | 'div' | 'footer'
  id?: string
}

export function RevealSection({
  children,
  className = '',
  as: Tag = 'section',
  id,
}: RevealSectionProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setVisible(true)
          io.disconnect()
        }
      },
      { threshold: 0.08, rootMargin: '0px 0px -8% 0px' },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <Tag id={id}>
      <div
        ref={ref}
        className={[
          'transition-all duration-[850ms] ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform',
          visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0',
          className,
        ].join(' ')}
      >
        {children}
      </div>
    </Tag>
  )
}
