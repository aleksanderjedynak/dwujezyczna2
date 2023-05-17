'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { i18n } from '../i18n-config'

export default function LocaleSwitcher() {
  const pathName = usePathname()
  const redirectedPathName = (locale: string) => {
    if (!pathName) return '/'
    const segments = pathName.split('/')
    segments[1] = locale
    return segments.join('/')
  }

  return (
    <div>
      {/*<p>Locale switcher:</p>*/}
             <div className="hidden lg:flex lg:flex-1 lg:justify-end">
        {i18n.locales.map((locale) => {
          return (
            // <li key={locale}>
            //   <Link href={redirectedPathName(locale)}>{locale}</Link>
            // </li>

            <div key={locale} className="text-sm font-semibold leading-6 text-gray-900">
            <Link href={redirectedPathName(locale)}>{locale}</Link> <span aria-hidden="true">&rarr;</span>
            </div>

          )
        })}
      </div>
    </div>
  )
}
