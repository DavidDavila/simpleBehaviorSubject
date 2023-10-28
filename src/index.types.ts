export interface SimpleBehaviorSubjectI<T> {
  subscribe: (observer: (value: T) => void) => void;
  update(newValue: T): void;
  getValue(): T;
}
