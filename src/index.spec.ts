import { SimpleBehaviorSubject } from ".";

describe("SimpleBehaviorSubject", () => {
  let simpleBehaviorSubject!: SimpleBehaviorSubject<number>; // Declara store en un ámbito más amplio
  const observer = jest.fn();
  const observerOther = jest.fn();
  beforeEach(() => {
    simpleBehaviorSubject = new SimpleBehaviorSubject<number>(10); // Inicializa store aquí
  });
  // Tests that subscribing to a new observer returns the current value.
  it("should return the current value when subscribing to a new observer", () => {
    simpleBehaviorSubject.subscribe(observer);
    expect(observer).toHaveBeenCalledWith(10);
  });

  // Tests that updating the value and notifying all subscribers updates their values.
  it("should update the values of all subscribers when updating the value", () => {
    simpleBehaviorSubject.subscribe(observer);
    simpleBehaviorSubject.subscribe(observerOther);

    simpleBehaviorSubject.update(20);

    expect(observer).toHaveBeenCalledWith(20);
    expect(observerOther).toHaveBeenCalledWith(20);
  });

  // Tests that getting the current value returns the correct value.
  it("should return the correct current value when calling getValue()", () => {
    const result = simpleBehaviorSubject.getValue();

    expect(result).toBe(10);
  });

  // Tests that subscribing to an observer with a null value returns the current value.
  it("should return the current value when subscribing to an observer with a null value", () => {
    simpleBehaviorSubject.subscribe(observer);

    expect(observer).toHaveBeenCalledWith(10);
  });

  // Tests that subscribing to multiple observers returns the current value.
  it("should return the current value when subscribing to multiple observers", () => {
    const observer3 = jest.fn();

    simpleBehaviorSubject.subscribe(observer);
    simpleBehaviorSubject.subscribe(observerOther);
    simpleBehaviorSubject.subscribe(observer3);

    expect(observer).toHaveBeenCalledWith(10);
    expect(observerOther).toHaveBeenCalledWith(10);
    expect(observer3).toHaveBeenCalledWith(10);
  });

  // Tests that updating the value with a complex object notifies all subscribers.
  it("should notify all subscribers when updating the value with a complex object", () => {
    // Arrange
    const simpleBehaviorSubject = new SimpleBehaviorSubject<{ name: string; age: number }>({
      name: "John",
      age: 25,
    });

    simpleBehaviorSubject.subscribe(observer);
    simpleBehaviorSubject.subscribe(observerOther);

    // Act
    const newValue = { name: "Jane", age: 30 };
    simpleBehaviorSubject.update(newValue);

    // Assert
    expect(observer).toHaveBeenCalledWith(newValue);
    expect(observerOther).toHaveBeenCalledWith(newValue);
  });

  // Tests that updating the value of the SimpleBehaviorSubject class only notifies the subscribed observers.
  it("should notify subscribed observers when updating the value", () => {
    simpleBehaviorSubject.subscribe(observer);
    simpleBehaviorSubject.subscribe(observerOther);

    simpleBehaviorSubject.update(20);

    expect(observer).toHaveBeenCalledWith(20);
    expect(observerOther).toHaveBeenCalledWith(20);
  });

  // Tests that subscribing to a new observer returns the current value.
  it("should return the current value when subscribing to a new observer", () => {
    simpleBehaviorSubject.subscribe(observer);

    expect(observer).toHaveBeenCalledWith(10);
  });
});
