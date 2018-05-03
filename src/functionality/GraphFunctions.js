import imUpdate from 'immutability-helper';

/**
 * Method for updating node properties.
 * @param nodes Array of nodes from the state of component.
 * @param nodeIndex Index of node in the array.
 * @param background Fill color of the node.
 * @param label Text inside the node.
 * @returns {ReadonlyArray<any> | ReadonlySet<any> | ReadonlyMap<any, any> | any}
 */
export function updateNode(nodes, nodeIndex, background, label) {
    return imUpdate(nodes, {[nodeIndex]: {color: {$set: {background: background}}, label: {$set: label}}});
}

/**
 * Method for updating edge properties.
 * @param {Object[]} edges - Array of edges from the state of component.
 * @param {number} edgeIndex - Index of edge in the array.
 * @param {string} color - Color of the edge.
 * @param {number} width - Number determining width of the edge.
 * @param {Object[]} dashes - Array of numbers determining length of lines and spaces or value false for full line.
 * @param {string} label - Text above the edge.
 * @returns {ReadonlyArray<any> | ReadonlySet<any> | ReadonlyMap<any, any> | any}
 */
export function updateEdge(edges, edgeIndex, color, width, dashes, label) {
    return imUpdate(edges, {[edgeIndex]: {color: {$set: {color: color, highlight: color, hover: color}},
            width: {$set: width}, dashes: {$set: dashes}, label: {$set: label}}});
}

/**
 * Method for updating edge properties.
 * @param {Object[]} edges - Array of edges from the state of component.
 * @param {number} edgeIndex - Index of edge in the array.
 * @param {string} color - Color of the edge.
 * @param {number} width - Number determining width of the edge.
 * @param {Object[]} dashes - Array of numbers determining length of lines and spaces or value false for full line.
 * @param {string} label - Text above the edge.
 * @param {boolean} enableArrowTo - Determines whether to show arrow pointing from starting node to ending node.
 * @param {boolean} enableArrowFrom - Determines whether to show arrow pointing from ending node to starting node.
 * @returns {ReadonlyArray<any> | ReadonlySet<any> | ReadonlyMap<any, any> | any}
 */
export function updateEdgeWithArrow(edges, edgeIndex, color, width, dashes, label, enableArrowTo, enableArrowFrom) {
    return imUpdate(edges, {[edgeIndex]: {color: {$set: {color: color, highlight: color, hover: color}},
            width: {$set: width}, dashes: {$set: dashes}, label: {$set: label},
            arrows: {$set: {to: {enabled: enableArrowTo}, from: {enabled: enableArrowFrom}}}}});
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