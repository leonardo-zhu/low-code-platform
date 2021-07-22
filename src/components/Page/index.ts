export { default } from "./Page";


export type PageData = {
  navigation: any,
  contents: any[]
}

export interface PageProps {
  data: PageData
}
