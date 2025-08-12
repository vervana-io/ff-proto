import {resolve} from "app-root-path";



export const proto = (name: string) => {
  const path = resolve(`/proto/${name}/${name}.proto`)
  return path;
}



console.log(proto("users"))