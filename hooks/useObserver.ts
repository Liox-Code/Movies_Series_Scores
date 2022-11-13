import { useEffect, useRef, useState, Dispatch, SetStateAction } from 'react'

const useObserver = ({
  root = null,
  rootMargin = '0%',
  threshold = 0
}): [
  IntersectionObserver | null,
  Dispatch<SetStateAction<HTMLElement | null>>,
  IntersectionObserverEntry | null
] => {
  const [entry, setEntry] = useState<IntersectionObserverEntry | null>(null)
  const [element, setElement] = useState<HTMLElement | null>(null)
  const observer = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    if (observer.current) observer.current.disconnect()
    observer.current = new window.IntersectionObserver(
      ([observerEntries]) => {
        return setEntry(observerEntries)
      },
      { root, rootMargin, threshold }
    )
    const { current: currentObserver } = observer

    if (element) currentObserver.observe(element)

    return () => {
      currentObserver.disconnect()
    }
  }, [element, root, rootMargin, threshold])

  return [observer.current, setElement, entry]
}

export default useObserver
