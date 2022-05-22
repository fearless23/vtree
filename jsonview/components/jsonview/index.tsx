import React from 'react';
import { useJsonVisualizer } from './hook';

interface JsonViewProps {
  height?: number,
  width?: number,
  json: unknown,
  onRender?: () => void,
  getSvg: (svg:string) => void,
}

const JsonView: React.FC<JsonViewProps> = (params) => {
  const { ref, visualizer } = useJsonVisualizer(params)

  const onRender = () => {
    if(visualizer){
      visualizer.render()
      params.onRender && params.onRender()
    }
  }

  const ongetSvg = () => {
    if(visualizer){
      params.getSvg(visualizer.get_svg())
    }
  }

  return (
    <>
      <div style={{ border: '1px solid black', background: 'white' }} ref={ref}></div>
      <button onClick={onRender}>Render</button>
      <button onClick={ongetSvg}>SVG</button>
    </>
  )
}

export default JsonView;