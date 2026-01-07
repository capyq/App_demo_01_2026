import { describe, expect, it, vi, beforeEach, afterEach } from "vitest";
import { getFeatureList } from "./featureList";
import type { Feature } from "../model/featureList";

const mockFeatures: Feature[] = [
  { id: 1, name: "Feature A", description: "Desc A" },
  { id: 2, name: "Feature B", description: "Desc B" },
];

describe("getFeatureList", () => {
  beforeEach(() => {
    vi.resetAllMocks();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("fetches and returns the feature list", async () => {
    const json = vi.fn().mockResolvedValue(mockFeatures);
    const fetchMock = vi.fn().mockResolvedValue({ json } as unknown as Response);
    vi.stubGlobal("fetch", fetchMock);

    const result = await getFeatureList();

    expect(fetchMock).toHaveBeenCalledWith("/api/data.json");
    expect(json).toHaveBeenCalled();
    expect(result).toEqual(mockFeatures);
  });

  it("throws when fetch rejects", async () => {
    const fetchMock = vi.fn().mockRejectedValue(new Error("network error"));
    vi.stubGlobal("fetch", fetchMock);

    await expect(getFeatureList()).rejects.toThrow("network error");
  });
});
