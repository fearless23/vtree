import React from 'react';
// import { visualize } from '../vtree';
import { visualize } from '@jaspreet23/json-vtree';

interface JsonViewProps {
  height?: number,
  width?: number,
  json: unknown,
  getSvg?: (svg: string) => void,
}

// this is optimized, json can keep changing
// it will not create TreeNode for every json
// only create svg once Visualize called
const JsonView: React.FC<JsonViewProps> = (params) => {
  const containerRef = React.useRef<HTMLDivElement>(null); 
  const onRender = () => {
    const container = containerRef.current as HTMLDivElement;
    if (container) {
      container.innerHTML = ''
      const x = visualize({ ...params, container })
      x.render()
      if (params.getSvg) params.getSvg(x.get_svg())
    }
  }
  return (
    <>
      <div style={{ border: '1px solid black', background: 'white' }} ref={containerRef}></div>
      <button onClick={onRender}>Render</button>
    </>
  )
}

export default JsonView;