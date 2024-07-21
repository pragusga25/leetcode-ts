class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

function recoverFromPreorder(traversal: string): TreeNode | null {
  const depthTreeNode: Record<number, TreeNode[]> = {};
  const trs = traversal.split(/(?<=-)(?=\d)|(?<=\d)(?=-)/);

  let depth = 0;
  for (let i = 0; i < trs.length; i++) {
    const char = trs[i];
    if (isNaN(Number(char))) {
      depth = char.length;
      continue;
    }

    if (!(depth in depthTreeNode)) {
      depthTreeNode[depth] = [];
    }

    const newNode = new TreeNode(Number(char));
    depthTreeNode[depth].push(newNode);

    if (depth > 0) {
      const prevDepth = depth - 1;
      const parentNode = depthTreeNode[prevDepth].pop() as TreeNode;

      if (!parentNode.left) parentNode.left = newNode;
      else parentNode.right = newNode;

      depthTreeNode[prevDepth].push(parentNode);
    }

    depth = 0;
  }

  return depthTreeNode[0].pop() as TreeNode;
}
