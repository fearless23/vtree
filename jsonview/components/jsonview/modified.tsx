import React from 'react';
import { VisualizeOutput, visualize } from '../vtree';

interface JsonViewProps {
  height?: number,
  width?: number,
  json: unknown,
  autoRender?: boolean,
  onRender?: (v: VisualizeOutput) => void,
  getSvg?: (svg: string) => void,
}

// this is optimized, json can keep changing
// it will not create TreeNode for every json
// only create svg once Visualize called
const JsonView: React.FC<JsonViewProps> = (params) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const [visualizer, set_visualizer] = React.useState<VisualizeOutput>()

  const onRender = () => {
    const container = containerRef.current as HTMLDivElement;
    if (container) {
      container.innerHTML = ''
      console.log(params,'params');
      const x = visualize({ ...params, container })
      set_visualizer(x)
      x.render()
      console.log(x.tree,'x.tree');
      if (params.onRender) params.onRender(x)
    }
  }

  const onCopySvg = () => {
    if (visualizer) {
      // TODO: copy svg string to clipboard
      if (params.getSvg) params.getSvg(visualizer.get_svg())
    }
  }

  return (
    <>
      <div style={{ border: '1px solid black', background: 'white' }} ref={containerRef}></div>
      <button onClick={onRender}>Render</button>
      <button onClick={onCopySvg}>Copy SVG</button>
    </>
  )
}

export default JsonView;