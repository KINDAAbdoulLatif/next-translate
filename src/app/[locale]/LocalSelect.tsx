"use client"

import { useChangeLocale, useCurrentLocale } from "../../locales/client"

export default function LocalSelect() {
    const locale = useCurrentLocale()
    const changeLocale = useChangeLocale()
  return (
    <select
        className="bg-white border border-x-gray-300 rounded-md px-2 py-1 text-sm focus:outline-none"
            value={locale}
            onChange={(e)=> changeLocale(e.target.value as "fr" | "en")}>
                <option value="en">English</option>
                <option value="fr">Francais</option>
    </select>
  )
}