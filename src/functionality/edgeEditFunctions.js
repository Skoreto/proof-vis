/**
 * Function for adding new edge to GraphVis.
 */
export function addEdge(edgeData, callback) {
  // Set new edge properties
  edgeData.label = '';
  callback(edgeData);
}

/**
 * Displays dialog with form for editing selected edge.
 */
export function showEditEdgeDialog(edgeData, callback) {
  // Fill edge edit dialog's inputs by selected edge data
  document.getElementById('inpEdgeLabel').value = edgeData.label;
  document.getElementById('inpEdgeColor').value = '#000000';
  document.getElementById('inpEdgeWidth').value = 2;
  // Bind saveEdge and cancelEdgeEdit functions
  document.getElementById('btnSaveEdge').onclick = 
    saveEdge.bind(this, edgeData, document, callback);
  document.getElementById('btnCancelEdgeEdit').onclick = 
    cancelEdgeEdit.bind(this, document, callback);
  document.getElementById('editEdgeDialog').style.display = 'block';
}

/**
 * Sets inputed data to the selected edge, saves the edge and hides the Edge Edit dialog.
 */
function saveEdge(edgeData, document, callback) {
  edgeData.label = document.getElementById('inpEdgeLabel').value;
  edgeData.color = { 
    color: document.getElementById('inpEdgeColor').value, 
    hover: document.getElementById('inpEdgeColor').value
  };
  edgeData.width = document.getElementById('inpEdgeWidth').value;

  clearEditEdgeDialog(document);
  callback(edgeData);
}

/**
 * Cancels editing of edge and hides Edit Edge dialog.
 */
function cancelEdgeEdit(document, callback) {
  clearEditEdgeDialog(document);
  callback(null);
};

/**
 * Clears and hides Edit Edge dialog.
 */
function clearEditEdgeDialog(document) {
  document.getElementById('btnSaveEdge').onclick = null;
  document.getElementById('btnCancelEdgeEdit').onclick = null;
  document.getElementById('editEdgeDialog').style.display = 'none';
}
