public class Queue {

	private Node first;
	private Node last;

	private class Node {
		String item;
		Node next;
	}

	public boolean isEmpty() {
		return first == null; 
	}

	public void enqueue(String item) {
		Node x = new Node();
		x.item = item;
		x.next = null;
		if (isEmpty()) {
			first = x;
			last = x;
		} else {
			last.next = x;
			last = x;
		}

	public String dequeue() {
		String item = first.item;
		first = first.next;
		return item;
	}
}	
