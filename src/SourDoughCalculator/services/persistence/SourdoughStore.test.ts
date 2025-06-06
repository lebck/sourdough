import { describe, it, expect, beforeEach, vi, Mock } from "vitest";
import { SourdoughStore } from "./SourdoughStore";
import type { BaseParams } from "~/SourDoughCalculator/components/Calculator/types/SourDough";

const defaultData: BaseParams = {
  amountDoughGrams: 500,
  hydrationPercent: 60,
  amountSaltPercent: 2,
  amountStarterPercent: 20,
};

interface MockStorage {
  getItem: Mock;
  setItem: Mock;
  removeItem: Mock;
  clear: Mock;
  key: Mock;
  length: number;
}

describe("SourdoughStore", () => {
  let mockStorage: MockStorage;
  let sourDoughStore: SourdoughStore;

  beforeEach(() => {
    vi.resetAllMocks();
    mockStorage = {
      getItem: vi.fn(),
      setItem: vi.fn(),
      removeItem: vi.fn(),
      clear: vi.fn(),
      key: vi.fn(),
      length: 0,
    };
    sourDoughStore = new SourdoughStore(mockStorage as Storage);
  });

  it("returns default data if nothing is in localStorage", () => {
    mockStorage.getItem.mockReturnValue(null);
    expect(sourDoughStore.get()).toEqual(defaultData);
  });

  it("returns parsed data from localStorage if present", () => {
    const stored: BaseParams = {
      amountDoughGrams: 1000,
      hydrationPercent: 70,
      amountSaltPercent: 2.5,
      amountStarterPercent: 15,
    };
    mockStorage.getItem.mockReturnValue(JSON.stringify(stored));
    expect(sourDoughStore.get()).toEqual(stored);
  });

  it("sets data to localStorage as JSON", () => {
    const data: BaseParams = {
      amountDoughGrams: 800,
      hydrationPercent: 65,
      amountSaltPercent: 2.2,
      amountStarterPercent: 18,
    };
    sourDoughStore.set(data);
    expect(mockStorage.setItem).toHaveBeenCalledWith(
      "sourDoughCalculator",
      JSON.stringify(data),
    );
  });
});
