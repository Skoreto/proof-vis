import imHelp from 'immutability-helper';
import {Tools} from 'react-sketch';

/**
 * Method for updating node properties.
 * @param nodesState - Array of nodes from the state of component.
 * @param nodeIndex - Index of node in the array.
 * @param background - Fill color of the node.
 * @param label - Text inside the node.
 * @returns {ReadonlyArray<any> | ReadonlySet<any> | ReadonlyMap<any, any> | any}
 */
export function updateNode(nodesState, nodeIndex, background, label) {
    return imHelp(nodesState, {[nodeIndex]: {color: {$set: {background: background}}, label: {$set: label}}});
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
    return imHelp(edgesState, {[edgeIndex]: {color: {$set: {color: color, highlight: color, hover: color}},
            width: {$set: width}, dashes: {$set: dashes}, label: {$set: label}}});
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
export function updateEdgeWithArrow(edgesState, edgeIndex, color, width, dashes, label, enableArrowTo, enableArrowFrom) {
    return imHelp(edgesState, {[edgeIndex]: {color: {$set: {color: color, highlight: color, hover: color}},
            width: {$set: width}, dashes: {$set: dashes}, label: {$set: label},
            arrows: {$set: {to: {enabled: enableArrowTo}, from: {enabled: enableArrowFrom}}}}});
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
export function updateEdgeSmooth(edgesState, edgeIndex, color, width, dashes, label, enableArrowTo, enableArrowFrom,
    enableSmooth, smoothType, roundness) {
    return imHelp(edgesState, {[edgeIndex]: {color: {$set: {color: color, highlight: color, hover: color}},
            width: {$set: width}, dashes: {$set: dashes}, label: {$set: label},
            arrows: {$set: {to: {enabled: enableArrowTo}, from: {enabled: enableArrowFrom}}},
            smooth: {$set: {enabled: enableSmooth, type: smoothType, roundness: roundness}}}});
}

/**
 * Method for pushing new array of nodes or edges into current array.
 * @param {Object[]} objectsState - Array of nodes or edges from the state of component.
 * @param {Object[]} newObjectsArray - Array of new node or edge objects.
 * @returns {ReadonlyArray<any> | ReadonlySet<any> | ReadonlyMap<any, any> | any}
 */
export function addObjectArray(objectsState, newObjectsArray) {
    return imHelp(objectsState, {$push: newObjectsArray});
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
            btnCircleD: true
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
            btnCircleD: false
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
                btnCircleA: false
            });
        }
        case 2: {
            return ({
                sketchTool: Tools.Line,
                btnPencilA: false,
                btnLineA: true,
                btnCircleA: false
            });
        }
        case 3: {
            return ({
                sketchTool: Tools.Circle,
                btnPencilA: false,
                btnLineA: false,
                btnCircleA: true
            });
        }
        default: {
            return ({
                sketchTool: Tools.Pencil,
                btnPencilA: true,
                btnLineA: false,
                btnCircleA: false
            });
        }
    }
}

/**
 * Czech localization for graphVis editing bar.
 */
export const graphVisLocales = {
    cs: {
        edit: 'Upravit',
        del: 'Smazat vybrané',
        back: 'Zpět',
        addNode: 'Přidat vrchol',
        addEdge: 'Přidat hranu',
        editNode: 'Upravit vrchol',
        editEdge: 'Upravit hranu',
        addDescription: 'Klikněte do prázdného prostoru pro umístění nového vrcholu.',
        edgeDescription: 'Táhnutím hrany od vybraného vrcholu ji spojte s jiným vrcholem.',
        editEdgeDescription: 'Přetáhněte konec hrany na vrchol, se kterým ji chcete spojit.',
        createEdgeError: 'Nelze připojit hrany ke clusteru.',
        deleteClusterError: 'Clustery nemohou být smazány.',
        editClusterError: 'Clustery nemohou být upraveny.'
    }
};

/**
 * Default presets for graphVis.
 */
export const graphVisOptions = {
        autoResize: true,
        height: '100%',
        width: '100%',
        locale: 'cs',
        locales: graphVisLocales,
        clickToUse: false,
        physics: false,
        layout: {},
        nodes: {
            shape: 'circle',
            color: {background: '#ffff08', border: '#000000'},
            label: '   ',
            margin: 12,
            font: {size: 18}
        },
        edges: {
            arrows: {
                to: {enabled: false, scaleFactor: 2},
                from: {enabled: false, scaleFactor: 2}
            },
            color: {color: '#000000', hover: '#000000'},
            width: 1,
            dashes: false,
            label: '   ',
            font: {align: 'top', size: 18}
        },
        configure: {
            enabled: false,
            filter: 'nodes,edges',
            showButton: true
        },
        manipulation: {
            enabled: true,
            initiallyActive: false,
            addNode: function(nodeData, callback) {
                // Nastaveni parametru noveho vrcholu
                let color = {background:'#FFFF00', border:'#000000'};
                let shadow = {enabled: false};
                nodeData.shape = 'dot';
                nodeData.size = 21;
                nodeData.label = null;
                nodeData.color = color;
                nodeData.borderWidth = 1;
                nodeData.shadow = shadow;
                callback(nodeData);
            },
            editEdge: true,
            deleteNode: true,
            deleteEdge: true,
            controlNodeStyle: {}
        },
        interaction: {
            dragNodes: true,
            dragView: false,
            hideEdgesOnDrag: false,
            hideNodesOnDrag: false,
            hover: true,
            hoverConnectedEdges: false,
            keyboard: {
                enabled: false,
                speed: {x: 10, y: 10, zoom: 0.02},
                bindToWindow: true
            },
            multiselect: true,
            navigationButtons: true,
            selectable: true,
            selectConnectedEdges: false,
            tooltipDelay: 300,
            zoomView: false
        }
};