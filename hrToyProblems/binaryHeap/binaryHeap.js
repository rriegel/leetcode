/**
 * A heap is a special kind of tree in which a parent node is ordered only in
 * respect to its immediate children. Unlike the binary search tree you may have
 * implemented, where the entire tree is ordered, in a heap the only order
 * guaranteed is between a node and its parent.
 *
 * In a binary heap each node should have only zero, one, or two children. Each node
 * must have 2 children before the next oldest node can have any children. Therefore
 * the 0th node will be the parent of the 1st and 2nd nodes, the 1st node will be the
 * parent of the 3rd and 4th nodes, and the 2nd node will be the parent of the 5th and
 * 6th nodes. In a specific kind of binary heap, the binary min heap, every node is
 * less than its immediate children:
 *
 *          0
 *     1         2
 *   3   4     5   6
 *  7
 *
 * There is only one place at any given time in a binary heap where a node can be
 * added or removed. In the example above, the next node will be inserted as the second
 * child of 3. If we were to remove a node instead, we would remove the 7. This mimics
 * the behavior of a stack and allows us to manage the heap in a very memory efficient way,
 * using a list or array. For example, the heap pictured above can be described as:
 *
 * [0, 1, 2, 3, 4, 5, 6, 7]
 *
 * where we always add to or remove from the end of the array.
 *
 * A well known fact, utilized with binary heaps stored in arrays, is that
 * we can calculate the index of a node's parent or children using math:
 *
 * parentIndex = Math.floor( (index - 1) / 2 )
 * childrenIndices = [index * 2 + 1, index * 2 + 2]
 *
 * When adding a new node to a binary min heap, it could be that we violate the property of the
 * heap whereby every node is of lower value than its children. Thus whenever we insert into
 * a binary min heap, we must compare the inserted node to its parent, and swap their positions
 * if it is less than its parent. After a swap it must compare itself to its new parent, continuing
 * until it is no longer less than its parent.
 *
 * Something similar happens when we want to remove the root node. Because we can only remove from the
 * end of the array we swap the position of the last node and the root node and then remove the now-last
 * node from the heap. The new root node now must be compared to its children and if it is not less than
 * both of them, be swapped with whichever of the two of them is the smallest. It is then compared with its
 * new children and this swapping continues until it is less than both its children.
 *
 * You can see a great visualization of a binary min heap in action here, play around with it until you can
 * easily guess how the heap will behave with both insertion and removal:
 * https://www.cs.usfca.edu/~galles/visualization/Heap.html
 */


// Below is a binary heap whose nodes are integers. Its storage is an array and
// its `getRoot` method is already written. `BinaryHeap`'s `this._compare` method is hard-coded to return
// whether the fist element passed into it is less than the second. Use it when comparing nodes.
//
// Implement the `insert` and `removeRoot` methods, each operating in logarithmic time relative
// to the size of the heap, and each restoring the heap's property of parent to child sorting. Use
// the equations above to navigate parent / child relationships in the storage array, and write any
// helper functions needed to assist you.
//
// Extra credit: `BinaryHeap`'s `this._compare` is hard-coded to assist in making a min heap, modify `BinaryHeap`
// to accept an optional argument which is a function used as the sorting mechanism for the heap.
// That way you can use your `BinaryHeap` class to construct a max heap or min heap or whatever.
//
// Extra extra credit: Implement `heapSort`. `heapSort` takes an array, constructs it into a `BinaryHeap`
// and then iteratively returns the root of the `BinaryHeap` until its empty, thus returning a sorted array.


var BinaryHeap = function () {
  this._heap = [];
  this._compare = function (i, j) { return i < j; };
};

BinaryHeap.prototype._getLesserChildIndex = function (parentIndex) {
  var childIndices = [parentIndex * 2 + 1, parentIndex * 2 + 2].filter(function (index) {
    return index < this._heap.length;
  }, this);
  // compare children nodes to get the index of the lesser of them
  if (this._compare(this._heap[childIndices[0]], this._heap[childIndices[1]])) {
    return childIndices[0];
  } else {
    return childIndices[1];
  }
};

BinaryHeap.prototype._swap = function (index, parentIndex) {
  var temp = this._heap[index];
  this._heap[index] = this._heap[parentIndex];
  this._heap[parentIndex] = temp;
};

BinaryHeap.prototype.insert = function (node) {
  // add node to end of heap
  this._heap.push(node);
  // locate node’s parent
  var index = this._heap.length - 1;
  var parentIndex = Math.floor( (index - 1) / 2 );
  // while node has parent and is less than parent
  while ( index > 0 && ( this._compare(this._heap[index], this._heap[parentIndex]) ) ) {
    // swap node and parent
    this._swap(index, parentIndex, this);
    index = parentIndex;
    parentIndex = Math.floor( (index - 1) / 2);
  }
};

BinaryHeap.prototype.removeRoot = function () {
  // swap root node with last node
  this._swap(this._heap.length - 1, 0, this);
  // remove last node and store it to be returned later
  var originalRoot = this._heap.pop();
  var temporaryRootIndex = 0;
  // compare children nodes to get the index of the lesser of them
  var lesserChildIndex = this._getLesserChildIndex(temporaryRootIndex);
  // while there are children nodes and the lesser of them is less than the new root
  while ( lesserChildIndex && this._compare(this._heap[lesserChildIndex], this._heap[temporaryRootIndex]) ) {
    // swap the root node with the lesser of its children
    this._swap(lesserChildIndex, temporaryRootIndex, this);
    temporaryRootIndex = lesserChildIndex;
    lesserChildIndex = this._getLesserChildIndex(temporaryRootIndex);
  }
  // return original root node we stored earlier
  return originalRoot;
};