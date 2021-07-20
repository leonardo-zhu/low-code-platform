type PageData = {
  $class: string,
  elementId: string,
  data: any,
}


interface Window {
  pageData: PageData
}

interface Document {
  pageContext: {
    [elementId: string]: React.Component
  }
}
