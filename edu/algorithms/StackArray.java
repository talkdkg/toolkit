public class StackArray<Item> {

	private Item[] s;
	private int N = 0;

	public StackArray(int cap) {
		s = (Item[]) new Object[cap];
	}

	public boolean isEmpty() {
		return N == 0;
	}

	public void push(Item item) {
		if (N >= s.length) { resize(); }
		s[N++] = item;
	}

	public String pop() {
		Item item = s[N-1];
		s[N-1] = null;
		N--;
		return item;
	}
	
	private  void resize(int max) {
		Item[] dup = new Item[max];
		for (int i=0; i < N; i++) {
			dup[i] = s[i];
		}
		s = dup;
	}
}
