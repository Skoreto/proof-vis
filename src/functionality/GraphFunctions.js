import imUpdate from 'immutability-helper';

/**
 * Method for updating node properties.
 * @param nodes Array of nodes from the state of component.
 * @param nodeIndex Index of node in the array.
 * @param background Fill color of the node.
 * @param label String text.
 * @returns {ReadonlyArray<any> | ReadonlySet<any> | ReadonlyMap<any, any> | any}
 */
export function updateNode (nodes, nodeIndex, background, label) {
    return imUpdate(nodes, {[nodeIndex]: {color: {$set: {background: background}}, label: {$set: label}}});
}

/**
 * Method for updating edge properties.
 * @param edges Array of edges from the state of component.
 * @param edgeIndex Index of edge in the array.
 * @param color
 * @param width
 * @param dashes
 * @param label
 * @returns {ReadonlyArray<any> | ReadonlySet<any> | ReadonlyMap<any, any> | any}
 */
export function updateEdge (edges, edgeIndex, color, width, dashes, label) {
    return imUpdate(edges, {[edgeIndex]: {color: {$set: {color: color, highlight: color, hover: color}},
            width: {$set: width}, dashes: {$set: dashes}, label: {$set: label}}});
}