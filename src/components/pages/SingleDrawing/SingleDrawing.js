import GraphVis from 'react-graph-vis'
import React, {Component} from 'react';

const locales = {
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

class SingleDrawing extends Component {
    constructor(props) {
        super(props);
        this.state = {
            graphVis: {
                nodes: [],
                edges: []
            },
            options: {
                autoResize: true,
                height: '100%',
                width: '100%',
                locale: 'cs',
                locales: locales,
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
                    initiallyActive: true,
                    addNode: function(nodeData, callback) {
                        // Nastaveni parametru noveho vrcholu
                        let color = { background:'#FFFF00', border:'#000000' };
                        let shadow = { enabled: false };
                        nodeData.shape = 'dot';
                        nodeData.size = 18;
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
                    dragView: true,
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
            },
        };
    }

    render() {
        const events = {
            select: function(event) {}
        };

        return (
            <div>
                <GraphVis graph={this.state.graphVis} options={this.state.options} events={events}
                          style={{width: "100%", height: window.innerHeight - 120}} />
            </div>
        );
    }
}

export default SingleDrawing;