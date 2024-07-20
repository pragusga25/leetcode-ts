// Problem: https://leetcode.com/problems/delete-leaves-with-a-given-value/
// Doc: https://leetcode.com/problems/delete-leaves-with-a-given-value/solutions/5504665/efficient-leaf-node-removal-in-a-binary-tree/
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

function removeLeafNodes(
  root: TreeNode | null,
  target: number
): TreeNode | null {
  if (!root) return root;
  root.left = removeLeafNodes(root.left, target);
  root.right = removeLeafNodes(root.right, target);

  if (root.val === target && !root.left && !root.right) {
    root = null;
  }

  return root;
}

const getValues = (root: TreeNode | null): (number | null)[] => {
  if (!root) return [null];

  return [root.val, ...getValues(root.left), ...getValues(root.right)];
};

describe('Delete Leaves With a Given Value', () => {
  it('#1 should remove leaf nodes with value 3', () => {
    const root = new TreeNode(
      1,
      new TreeNode(2, new TreeNode(2), null),
      new TreeNode(3, new TreeNode(2), new TreeNode(4))
    );
    const target = 3;

    const result = removeLeafNodes(root, target);

    const actual = getValues(result);
    const expected = getValues(
      new TreeNode(
        1,
        new TreeNode(2, new TreeNode(2), null),
        new TreeNode(3, new TreeNode(2), new TreeNode(4))
      )
    );

    expect(actual).toEqual(expected);
  });

  it('#2 should remove leaf nodes with value 1', () => {
    const root = new TreeNode(1, new TreeNode(1), new TreeNode(1));
    const target = 1;

    const result = removeLeafNodes(root, target);

    const actual = getValues(result);
    const expected = getValues(null);

    expect(actual).toEqual(expected);
  });

  it('#3 should remove leaf nodes with value 1', () => {
    const root = new TreeNode(
      1,
      new TreeNode(2, new TreeNode(2), null),
      new TreeNode(1, new TreeNode(2), new TreeNode(1))
    );
    const target = 1;

    const result = removeLeafNodes(root, target);

    const actual = getValues(result);
    const expected = getValues(
      new TreeNode(
        1,
        new TreeNode(2, new TreeNode(2), null),
        new TreeNode(1, new TreeNode(2), null)
      )
    );

    expect(actual).toEqual(expected);
  });
});
