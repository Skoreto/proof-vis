import imHelp from "immutability-helper";

/**
 * Method for updating node properties.
 * @param nodesState - Array of nodes from the state of component.
 * @param nodeIndex - Index of node in the array.
 * @param background - Fill color of the node.
 * @param label - Text inside the node.
 * @returns {ReadonlyArray<any> | ReadonlySet<any> | ReadonlyMap<any, any> | any}
 */
export function updateNode(nodesState, nodeIndex, background, label) {
  return imHelp(nodesState, {
    [nodeIndex]: {
      color: { $set: { background: background } },
      label: { $set: label }
    }
  });
}

/**
 * Method for updating node properties and its label font properties.
 * @param nodesState - Array of nodes from the state of component.
 * @param nodeIndex - Index of node in the array.
 * @param background - Fill color of the node.
 * @param label - Text inside the node.
 * @param margin - Label margin inside the node.
 * @param fontSize - Font size of the label.
 * @returns {ReadonlyArray<any> | ReadonlySet<any> | ReadonlyMap<any, any> | any}
 */
export function updateNodeFont(
  nodesState,
  nodeIndex,
  background,
  label,
  margin,
  fontSize
) {
  return imHelp(nodesState, {
    [nodeIndex]: {
      color: { $set: { background: background } },
      label: { $set: label },
      margin: { $set: margin },
      font: { $set: { size: fontSize } }
    }
  });
}

/**
 * Method for updating node properties and its label font properties.
 * @param nodesState - Array of nodes from the state of component.
 * @param nodeIndex - Index of node in the array.
 * @param background - Fill color of the node.
 * @param label - Text inside the node.
 * @param shape - Shape of the node.
 * @param size - Size of the node.
 * @returns {ReadonlyArray<any> | ReadonlySet<any> | ReadonlyMap<any, any> | any}
 */
export function updateNodeShape(
  nodesState,
  nodeIndex,
  background,
  label,
  vadjust,
  shape,
  size
) {
  return imHelp(nodesState, {
    [nodeIndex]: {
      color: { $set: { background: background } },
      label: { $set: label },
      font: { $set: { vadjust: vadjust } },
      shape: { $set: shape },
      size: { $set: size }
    }
  });
}

/**
 * Function for updating node position.
 * @param nodesState - Array of nodes from the state of component.
 * @param nodeIndex - Index of node in the array.
 * @param newX - New X coordinate of the node.
 * @param newY - New Y coordinate of the node.
 */
export function updateNodePosition(nodesState, nodeIndex, newX, newY) {
  return imHelp(nodesState, {
    [nodeIndex]: {
      x: { $set: newX },
      y: { $set: newY }
    }
  });
}

/**
 * Method for updating edge properties.
 * @param {Object[]} edgesState - Array of edges from the state of component.
 * @param {number} edgeIndex - Index of edge in the array.
 * @param {string} color - Color of the edge.
 * @param {number} width - Number determining width of the edge.
 * @param {Object[]} dashes - Array of numbers determining length of lines and spaces or value false for full line.
 * @param {string} label - Text above the edge.
 * @returns {ReadonlyArray<any> | ReadonlySet<any> | ReadonlyMap<any, any> | any}
 */
export function updateEdge(edgesState, edgeIndex, color, width, dashes, label) {
  return imHelp(edgesState, {
    [edgeIndex]: {
      color: { $set: { color: color, highlight: color, hover: color } },
      width: { $set: width },
      dashes: { $set: dashes },
      label: { $set: label }
    }
  });
}

/**
 * Method for updating edge properties.
 * @param {Object[]} edgesState - Array of edges from the state of component.
 * @param {number} edgeIndex - Index of edge in the array.
 * @param {string} color - Color of the edge.
 * @param {number} width - Number determining width of the edge.
 * @param {Object[]} dashes - Array of numbers determining length of lines and spaces or value false for full line.
 * @param {string} label - Text above the edge.
 * @param {boolean} enableArrowTo - Determines whether to show arrow pointing from starting node to ending node.
 * @param {boolean} enableArrowFrom - Determines whether to show arrow pointing from ending node to starting node.
 * @returns {ReadonlyArray<any> | ReadonlySet<any> | ReadonlyMap<any, any> | any}
 */
export function updateEdgeWithArrow(
  edgesState,
  edgeIndex,
  color,
  width,
  dashes,
  label,
  enableArrowTo,
  enableArrowFrom
) {
  return imHelp(edgesState, {
    [edgeIndex]: {
      color: { $set: { color: color, highlight: color, hover: color } },
      width: { $set: width },
      dashes: { $set: dashes },
      label: { $set: label },
      arrows: {
        $set: {
          to: { enabled: enableArrowTo },
          from: { enabled: enableArrowFrom }
        }
      }
    }
  });
}

/**
 * Method for updating edge properties.
 * @param {Object[]} edgesState - Array of edges from the state of component.
 * @param {number} edgeIndex - Index of edge in the array.
 * @param {string} color - Color of the edge.
 * @param {number} width - Number determining width of the edge.
 * @param {Object[]} dashes - Array of numbers determining length of lines and spaces or value false for full line.
 * @param {string} label - Text above the edge.
 * @param {boolean} enableArrowTo - Determines whether to show arrow pointing from starting node to ending node.
 * @param {boolean} enableArrowFrom - Determines whether to show arrow pointing from ending node to starting node.
 * @param {*} enableSmooth
 * @param {*} smoothType
 * @param {*} roundness
 */
export function updateEdgeSmooth(
  edgesState,
  edgeIndex,
  color,
  width,
  dashes,
  label,
  enableArrowTo,
  enableArrowFrom,
  enableSmooth,
  smoothType,
  roundness
) {
  return imHelp(edgesState, {
    [edgeIndex]: {
      color: { $set: { color: color, highlight: color, hover: color } },
      width: { $set: width },
      dashes: { $set: dashes },
      label: { $set: label },
      arrows: {
        $set: {
          to: { enabled: enableArrowTo },
          from: { enabled: enableArrowFrom }
        }
      },
      smooth: {
        $set: { enabled: enableSmooth, type: smoothType, roundness: roundness }
      }
    }
  });
}

/**
 * Method for pushing new array of nodes or edges into current array.
 * @param {Object[]} objectsState - Array of nodes or edges from the state of component.
 * @param {Object[]} newObjectsArray - Array of new node or edge objects.
 * @returns {ReadonlyArray<any> | ReadonlySet<any> | ReadonlyMap<any, any> | any}
 */
export function addObjectArray(objectsState, newObjectsArray) {
  return imHelp(objectsState, { $push: newObjectsArray });
}

/**
 * Returns an array of nodes with new postitions, which might change by user's interaction.
 * @param {Object[]} nodesPositions - Actual nodes positions in canvas.
 * @param {Object[]} nodesState - Array of nodes from the state of component.
 */
export function getNodesWithNewPositions(nodesPositions, stateNodes) {
  let newNodes = stateNodes;

  if (Object.keys(nodesPositions).length > 0) {
    for (let i = 0; i < Object.keys(nodesPositions).length; i++) {
      let newX = Object.entries(nodesPositions)[i][1].x;
      let newY = Object.entries(nodesPositions)[i][1].y;
      newNodes = updateNodePosition(newNodes, i, newX, newY);
    }
  }
  return newNodes;
}

/**
 * Updates state with array of nodes with user's positions.
 * @param {Object[]} nodesPositions - Actual nodes positions in canvas.
 * @param {Object[]} nodesState - Array of nodes from the state of component.
 */
export function updateNodesWithNewPositions(nodesPositions, stateNodes) {
  // Update positions only when nodes array is not empty
  if (stateNodes.length > 0)
    this.setState({
      nodes: getNodesWithNewPositions(nodesPositions, stateNodes)
    });
}
