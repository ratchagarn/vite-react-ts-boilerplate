/// <reference types="vite/client" />

/**
 * https://vitejs.dev/guide/env-and-mode.html#intellisense-for-typescript
 */
interface ImportMetaEnv {
  readonly VITE_APP_SERVER_PORT: number
  readonly VITE_APP_TITLE: string
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
