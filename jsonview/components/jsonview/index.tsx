import React from 'react';
import { VisualizeOutput } from '../vtree';
import { useJsonVisualizer } from './hook';

interface JsonViewProps {
  height?: number,
  width?: number,
  json: unknown,
  autoRender?: boolean,
  onRender?: (v: VisualizeOutput) => void,
  getSvg?: (svg:string) => void,
}

const JsonView: React.FC<JsonViewProps> = (params) => {
  const { ref, visualizer } = useJsonVisualizer(params)

  const onRender = () => {
    if(visualizer){
      visualizer.render()
      if(params.onRender) params.onRender(visualizer)
    }
  }

  const onCopySvg = () => {
    if(visualizer){
      // TODO: copy svg string to clipboard
      if(params.getSvg) params.getSvg(visualizer.get_svg())
    }
  }

  return (
    <>
      <div style={{ border: '1px solid black', background: 'white' }} ref={ref}></div>
      <button onClick={onRender}>Render</button>
      <button onClick={onCopySvg}>Copy SVG</button>
    </>
  )
}

export default JsonView;