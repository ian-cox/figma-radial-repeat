figma.showUI(__html__)

figma.ui.onmessage = async (rotation) => {
  
  for (const node of figma.currentPage.selection) {
    node.clone()
    node.rotation += parseInt(rotation)
  }

}