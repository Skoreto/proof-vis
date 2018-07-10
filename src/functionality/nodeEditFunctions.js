

export const saveNode = (nodeData, document, callback) => {
  // data.id = document.getElementById('node-id').value;
  nodeData.label = document.getElementById('inpNodeLabel').value;
  nodeData.color.background = document.getElementById('inpColorBackground').value;
  clearPopUp(document);
  callback(nodeData);
}

/**
 * Cancels editing of node and hides the dialog.
 */
export const cancelNodeEdit = (document, callback) => {
  clearPopUp(document);
  callback(null);
};

const clearPopUp = (document) => {
  // document.getElementById('saveButton').onclick = null;
  // document.getElementById('cancelButton').onclick = null;
  document.getElementById('editNodeDialog').style.display = 'none';
}