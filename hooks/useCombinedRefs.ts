import { useEffect, useRef, Ref } from 'react'

const useCombinedRefs = (...refs: Ref<HTMLElement | null>[]) => {
  const targetRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    refs.forEach((ref: Ref<HTMLElement | null>) => {
      if (!ref) return

      if (typeof ref === 'function') {
        ref(targetRef.current)
      } else {
        let { current } = ref
        current = targetRef.current
      }
    })
  }, [refs])

  return targetRef
}

export default useCombinedRefs
