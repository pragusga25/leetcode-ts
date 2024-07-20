// Problem: https://leetcode.com/problems/binary-tree-inorder-traversal/
// Doc: https://leetcode.com/problems/binary-tree-inorder-traversal/solutions/5505544/inorder-traversal-of-binary-tree-iterative-approach/
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

function inorderTraversal(root: TreeNode | null): number[] {
  if (!root) return [];
  const stack: TreeNode[] = [];
  const result: number[] = [];

  while (stack.length > 0 || root) {
    while (root) {
      stack.push(root);
      root = root.left;
    }

    const popped = stack.pop();
    if (!popped) break;
    result.push(popped.val);
    root = popped.right;
  }

  return result;
}

describe('Binary Tree Inorder Traversal', () => {
  it('#1 should return [1, 3, 2]', () => {
    const root = new TreeNode(1, null, new TreeNode(2, new TreeNode(3)));
    expect(inorderTraversal(root)).toStrictEqual([1, 3, 2]);
  });

  it('#2 should return []', () => {
    expect(inorderTraversal(null)).toStrictEqual([]);
  });

  it('#3 should return [1]', () => {
    const root = new TreeNode(1);
    expect(inorderTraversal(root)).toStrictEqual([1]);
  });

  it('#4 should return [1, 2]', () => {
    const root = new TreeNode(1, null, new TreeNode(2));
    expect(inorderTraversal(root)).toStrictEqual([1, 2]);
  });

  it('#5 should return [2, 3, 1]', () => {
    const root = new TreeNode(1, new TreeNode(3, new TreeNode(2)), null);
    expect(inorderTraversal(root)).toStrictEqual([2, 3, 1]);
  });

  it('#6 should return [2, 4, 1, 5, 3]', () => {
    const root = new TreeNode(
      1,
      new TreeNode(2, null, new TreeNode(4)),
      new TreeNode(3, new TreeNode(5))
    );
    expect(inorderTraversal(root)).toStrictEqual([2, 4, 1, 5, 3]);
  });
});
