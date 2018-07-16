// Checkpoint 4 problem 1
function subtractLinkedList(head) {
  const mid = findMid(head);
  let original = head;
  let reversed = reverseLinkedList(clone(head));
  let count = 0;

  while (count < mid) {
    original.value = reversed.value - original.value;
    original = original.next;
    reversed = reversed.next;
    count++;
  }

  return head;
}

function findMid(head) {
  let node = head;
  let count = 0;

  while (node.next) {
    count++;
    node = node.next;
  }

  return Math.floor(count/2);
}

function reverseLinkedList(head) {
  let newHead = head;
  let oldHead = head.next;
  newHead.next = null;
  while (oldHead) {
    const current = oldHead;
    oldHead = oldHead.next;
    current.next = newHead;
    newHead = current;
  }

  return newHead;
}

function clone(hash) {
  var json = JSON.stringify(hash);
  var object = JSON.parse(json);

  return object;
}

const testLinkedList = {
  head: {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null
        }
      }
    }
  }
};

subtractLinkedList(testLinkedList.head);
