import React from "react";

export { default } from './Navigation'


export interface NavigationItem {
  elementId: string,
  title: string,
  icon: React.ReactNode
}

export type NavigationData = {
  items: NavigationItem[]
}


export interface NavigationProps {
  data: NavigationData
}
