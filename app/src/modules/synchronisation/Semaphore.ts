class Semaphore {
  taken: number;

  max: number;

  waiting: {resolve: () => void; reject: () => void}[] = [];

  constructor(count: number) {
    this.taken = 0;

    this.max = count;
  }

  take(): Promise<void> {
    return new Promise((resolve, reject) => {
      this.waiting.push({resolve, reject});

      this.runNext();
    });
  }

  give(): void {
    this.taken -= 1;

    this.runNext();
  }

  available(): boolean {
    return this.taken < this.max;
  }

  poison(): void {
    while (this.waiting.length > 0) {
      const item = this.waiting.shift();
      item?.reject();
    }

    this.taken = 0;
  }

  private runNext() {
    if (this.taken >= this.max) return;

    const item = this.waiting.shift();

    if (item) {
      this.taken += 1;
      item.resolve();
    }
  }
}

export default Semaphore;
