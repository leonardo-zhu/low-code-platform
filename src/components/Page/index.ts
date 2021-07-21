export { default } from "./Page";


export type PageData = {
  navigation: any,
  content: any
}

export interface PageProps {
  data: PageData
}
