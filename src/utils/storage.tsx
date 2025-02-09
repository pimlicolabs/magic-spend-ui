import { createStorage } from "wagmi";

export class PimlicoStorage {
	private storage: ReturnType<typeof createStorage<{
		"pimlico-api-key": string;
	}>>;

	constructor() {
		this.storage = createStorage({
			storage: typeof window !== 'undefined' ? window.localStorage : undefined,
			key: "pimlico-magic-spend",
		});
	}

	async getApiKey(): Promise<string | null> {
		return this.storage.getItem("pimlico-api-key") as Promise<string | null>;
	}

	async setApiKey(key: string): Promise<void> {
		return this.storage.setItem("pimlico-api-key", key);
	}

	async removeApiKey(): Promise<void> {
		return this.storage.removeItem("pimlico-api-key");
	}
}

export const pimlicoStorage = new PimlicoStorage(); 