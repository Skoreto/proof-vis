import React from "react";
import GraphVis from "react-graph-vis";
import {
  palette,
  graphVisLocales
} from "../../../functionality/globalProofConstants";
import {
  addNode,
  showEditNodeDialog
} from "../../../functionality/nodeEditFunctions";
import {
  addEdge,
  showEditEdgeDialog
} from "../../../functionality/edgeEditFunctions";
import EditNodeDialog from "../../../UI/EditNodeDialog/EditNodeDialog";
import EditEdgeDialog from "../../../UI/EditEdgeDialog/EditEdgeDialog";

class DialogDrawing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      graphVis: { nodes: [], edges: [] },
      options: {
        autoResize: true,
        width: "606",
        height: "400",
        // Set localization to Czech language and pass object with Czech translations.
        locale: "cs",
        locales: graphVisLocales,
        nodes: {
          font: { size: 18 }
        },
        edges: {
          arrows: {
            to: { enabled: false },
            from: { enabled: false }
          },
          color: { color: palette.black, hover: palette.black },
          width: 2,
          hoverWidth: function(width) {
            return width * 2;
          },
          selectionWidth: function(width) {
            return width * 2;
          },
          font: { align: "top", size: 18 }
        },
        manipulation: {
          enabled: true,
          initiallyActive: true,
          addNode: addNode,
          editNode: showEditNodeDialog,
          addEdge: addEdge,
          editEdge: showEditEdgeDialog,
          deleteNode: true,
          deleteEdge: true
        },
        interaction: {
          dragNodes: true,
          dragView: true,
          // Use node hover colors when to mouse moves over it
          hover: true,
          hoverConnectedEdges: false,
          // Longheld click or CTRT+click will add to the selection
          multiselect: true,
          navigationButtons: true,
          selectable: true,
          // Do not highlight connecting edges on selecting a node
          selectConnectedEdges: false,
          zoomView: false
        },
        // Turn automatic graph rearranging off
        physics: false,
        // Turn configuration panel off
        configure: false
      }
    };
  }

  render() {
    return (
      <div>
        <GraphVis
          graph={this.state.graphVis}
          options={this.state.options}
          events={{}}
        />
        <EditNodeDialog />
        <EditEdgeDialog />
      </div>
    );
  }
}

export default DialogDrawing;
