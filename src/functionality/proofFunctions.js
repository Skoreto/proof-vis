import { Tools } from 'react-sketch';

/**
 * Increases or decreases currentStep in component state after a step was executed by increment.
 * @param {number} stateCurrentStep - Current step number in component state.
 * @param {number} increment - Number to increment to the current state.
 */
export function updateCurrentStep(stateCurrentStep, increment) {
  this.setState({ currentStep: stateCurrentStep += increment });
}

/**
 * Clears all used Timeouts and Intervals.
 * @param state State of the updated component.
 */
export function clearAllTimers(state) {
  if (state.timeouts.length > 0) {
    state.timeouts.forEach(function (value, index) {
      clearTimeout(value);
    });
  }
  if (state.intervals.length > 0) {
    state.intervals.forEach(function (value, index) {
      clearInterval(value);
    });
  }
}

/**
 * Handler for activating drawing over graph.
 * @param state - State of the component.
 */
export function handlerSketchAllowance(state) {
  if (state.isSketchAllowed) {
    return ({
      isSketchAllowed: false,
      btnSketchA: false,
      btnSketchC: '',
      btnPencilD: true,
      btnLineD: true,
      btnCircleD: true,
    })
  } else {
    const isAnyToolActive = state.btnLineA || state.btnCircleA;
    return ({
      isSketchAllowed: true,
      btnSketchA: true,
      btnSketchC: 'btnSketchActive',
      btnPencilA: !isAnyToolActive,
      btnPencilD: false,
      btnLineD: false,
      btnCircleD: false,
    })
  }
}

/**
 * Handler for changing drawing tool.
 * Activates the right tool button and deactivates others.
 * @param {number} tool - Number for assigned tool.
 */
export function handlerSelectedTool(tool) {
  switch (tool) {
    case 1: {
      return ({
        sketchTool: Tools.Pencil,
        btnPencilA: true,
        btnLineA: false,
        btnCircleA: false,
      });
    }
    case 2: {
      return ({
        sketchTool: Tools.Line,
        btnPencilA: false,
        btnLineA: true,
        btnCircleA: false,
      });
    }
    case 3: {
      return ({
        sketchTool: Tools.Circle,
        btnPencilA: false,
        btnLineA: false,
        btnCircleA: true,
      });
    }
    default: {
      return ({
        sketchTool: Tools.Pencil,
        btnPencilA: true,
        btnLineA: false,
        btnCircleA: false,
      });
    }
  }
}

/**
 * Handle opening and closing of Drawing Dialog.
 */
export const handlerDrawingDialog = isDrawingDialogOpen => {
  return { isDrawingDialogOpen: !isDrawingDialogOpen };
};

/**
 * Returns proofBox scroll options to element corrected by actual scroll position of window.
 * @param {number} windowScrollY - Y scroll position of window in pixels.
 */
export function getScrollOptions(windowScrollY) {
  return {
    duration: 800,
    delay: 0,
    smooth: 'linear',
    containerId: 'proof-steps-box',
    offset: (-230 + windowScrollY),
    // Prevent canceling of scroll by fast switching between steps
    ignoreCancelEvents: true,
  }
}
