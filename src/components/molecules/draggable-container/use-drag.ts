import { writable } from 'svelte/store';

interface DragState {
  isDragging: boolean;
  startX: number;
  startY: number;
  scrollLeft: number;
  scrollTop: number;
}

export function createDragStore() {
  const { subscribe, set, update } = writable<DragState>({
    isDragging: false,
    startX: 0,
    startY: 0,
    scrollLeft: 0,
    scrollTop: 0
  });

  const handleMouseDown = (e: MouseEvent, container: HTMLDivElement) => {
    update(state => ({
      isDragging: true,
      startX: e.pageX - container.offsetLeft,
      startY: e.pageY - container.offsetTop,
      scrollLeft: container.scrollLeft,
      scrollTop: container.scrollTop
    }));
    
    document.body.style.userSelect = 'none';
  };

  const handleMouseUp = () => {
    update(state => ({ ...state, isDragging: false }));
    document.body.style.userSelect = '';
  };

  const handleMouseMove = (e: MouseEvent, container: HTMLDivElement, state: DragState) => {
    if (!state.isDragging) return;
    
    e.preventDefault();
    const x = e.pageX - container.offsetLeft;
    const y = e.pageY - container.offsetTop;
    const walkX = (x - state.startX) * 1.5;
    const walkY = (y - state.startY) * 1.5;
    
    container.scrollLeft = state.scrollLeft - walkX;
    container.scrollTop = state.scrollTop - walkY;
  };

  return {
    subscribe,
    handleMouseDown,
    handleMouseUp,
    handleMouseMove
  };
}