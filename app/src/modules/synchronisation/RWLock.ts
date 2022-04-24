import Semaphore from './Semaphore';

class RWLock {
  private readers: {resolve: () => void}[];

  private writeSemaphore: Semaphore;

  constructor() {
    this.readers = [];
    this.writeSemaphore = new Semaphore(1);
  }

  checkRead(): Promise<void> {
    if (this.writeSemaphore.available()) {
      return Promise.resolve();
    }

    return new Promise(resolve => {
      this.readers.push({resolve});
    });
  }

  async withWriteLock<T>(callback: () => Promise<T>): Promise<void> {
    await this.writeSemaphore.take();

    try {
      await callback();
    } finally {
      this.readers.forEach(reader => reader.resolve());
      this.readers = [];

      this.writeSemaphore.give();
    }
  }
}

export default RWLock;
