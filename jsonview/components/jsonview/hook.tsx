import React from 'react';
import { visualize, VisualizeOutput } from '../vtree';

interface UseJsonVisualizerProps {
  height?: number,
  width?: number,
  json: unknown,
}

export const useJsonVisualizer = (params: UseJsonVisualizerProps) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const [visualizer, set_visualizer] = React.useState<VisualizeOutput>()

  React.useEffect(() => {
    const container = containerRef.current as HTMLDivElement;
    if (container) {
      container.innerHTML = ''
      const x = visualize({ ...params, container })
      set_visualizer(x)
    }
    return () => { }
  }, [params])

  return {
    visualizer,
    ref: containerRef
  };
}