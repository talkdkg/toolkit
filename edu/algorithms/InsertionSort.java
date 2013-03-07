ublic class InsertionSort {

	public static void sort(Object[] a, Comparator comparator) {

		int N = a.length;
		for (int i=0; i < N; i++) {
			for (int j = i; j > 0; j--) {
				if (less(a[j], a[j-1), comparator) {
					exchange(a, j, j-1);
				} else {
					break;
				}
			}
		}
	}


	private static boolean less(Object v, Object w, Comparator c) {
		return c.compare(v, w) < 0;
	}

	private static void exchange(Object[] a, int i, int j) {
		Object swap = a[i];
		a[i] = a[j];
		a[j] = swap;
	}
}
