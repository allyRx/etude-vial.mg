import { useSyncExternalStore } from 'react'
import { normalizePath, ROUTES } from './routes'

type Listener = () => void

const PATH_EVENT = 'app:pathchange'

const getPathname = () => {
  if (typeof window === 'undefined') {
    return ROUTES.home
  }

  return normalizePath(window.location.pathname)
}

const subscribe = (listener: Listener) => {
  if (typeof window === 'undefined') {
    return () => {}
  }

  const handlePopState = () => listener()
  const handlePathChange = () => listener()

  window.addEventListener('popstate', handlePopState)
  window.addEventListener(PATH_EVENT, handlePathChange)

  return () => {
    window.removeEventListener('popstate', handlePopState)
    window.removeEventListener(PATH_EVENT, handlePathChange)
  }
}

export const navigate = (to: string) => {
  if (typeof window === 'undefined') {
    return
  }

  const target = normalizePath(to || ROUTES.home)
  const current = normalizePath(window.location.pathname)

  if (current === target) {
    return
  }

  window.history.pushState({}, '', target)
  window.dispatchEvent(new Event(PATH_EVENT))
}

export const usePathname = () => useSyncExternalStore(subscribe, getPathname, () => '/')
