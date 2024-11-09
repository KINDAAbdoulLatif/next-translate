// "use client"

import { PropsWithChildren } from "react";
import { I18nProviderClient } from "../../locales/client";

export default function Providers(props: PropsWithChildren< {locale: string}>) {
  return (
    <I18nProviderClient locale={props.locale}>{props.children} </I18nProviderClient>
  )
}

// export interface ProvidersProps {
//   locale: "en" | "fr";
// }

// export default function Providers({ locale, children }: PropsWithChildren<ProvidersProps>) {
//   return <I18nProviderClient locale={locale}>{children}</I18nProviderClient>;
// }
