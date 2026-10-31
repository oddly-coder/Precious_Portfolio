import { useEffect, useState } from 'react'
const read = () => (window.location.hash.startsWith('#/') ? window.location.hash.slice(2).split('?')[0] : '')
export default function useHashRoute() {
  const [route, setRoute] = useState(read())
  useEffect(() => {
    const onChange = () => {
      setRoute(read())
      // wait for the page to render, then jump to the section / top
      requestAnimationFrame(() => {
        const id = window.location.hash.replace('#', '')
        const el = id && !id.startsWith('/') ? document.getElementById(id) : null
        el ? el.scrollIntoView() : window.location.hash.startsWith('#/') && window.scrollTo(0, 0)
      })
    }
    window.addEventListener('hashchange', onChange)
    return () => window.removeEventListener('hashchange', onChange)
  }, [])
  return route
}
