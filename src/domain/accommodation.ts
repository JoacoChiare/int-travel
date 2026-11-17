class Accommodation {
  #cost!: number;
  #name!: string;

  constructor(name: unknown, cost: unknown) {
    this.setName(name);
    this.setCost(cost);
  }

  setName(name: unknown): void {
    if (typeof name !== "string" || name.trim() === "") {
      throw new Error("Name is required");
    }
    this.#name = name.trim();
  }

  getName(): string {
    return this.#name;
  }

  setCost(cost: unknown): void {
    if (typeof cost !== "number" || !Number.isFinite(cost)) {
      throw new Error("Cost must be a number");
    }
    if (cost < 0) {
      throw new Error("Cost must be >= 0");
    }
    this.#cost = cost;
  }

  getCost(): number {
    return this.#cost;
  }
}
export default Accommodation;
