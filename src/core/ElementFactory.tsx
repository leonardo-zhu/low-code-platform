import React from 'react'


export default (() => {
  const components: Record<string, React.ComponentType> = {}
  return {
    get comps() {
      return components
    },
    register(name: string, comp: React.ComponentType<any>) {
      components[name] = comp
    },
    createElement(data: any): React.ReactElement {
      const Comp = data ? components[data.$class] : <></>

      if (Comp) {
        // @ts-ignore
        return <Comp data={data}/>
      }
      console.log(`${data.$class} not found`)
      return <></>;
    }
  }
})()
