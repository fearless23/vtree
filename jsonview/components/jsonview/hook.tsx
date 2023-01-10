import React from 'react';
import { visualize, VisualizeOutput } from '@jaspreet23/json-vtree';

interface UseJsonVisualizerProps {
  height?: number,
  width?: number,
  json: unknown,
  // autoRender?:boolean
}

export const useJsonVisualizer = (params: UseJsonVisualizerProps) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const [visualizer, set_visualizer] = React.useState<VisualizeOutput>()

  React.useEffect(() => {
    const container = containerRef.current as HTMLDivElement;
    if (container) {
      container.innerHTML = ''
      const x = visualize({ ...params, container })
      // if(params.autoRender) x.render()
      set_visualizer(x)
    }
    return () => { }
  }, [params])

  return {
    visualizer,
    ref: containerRef
  };
}