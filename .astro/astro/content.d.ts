declare module 'astro:content' {
	interface RenderResult {
		Content: import('astro/runtime/server/index.js').AstroComponentFactory;
		headings: import('astro').MarkdownHeading[];
		remarkPluginFrontmatter: Record<string, any>;
	}
	interface Render {
		'.md': Promise<RenderResult>;
	}

	export interface RenderedContent {
		html: string;
		metadata?: {
			imagePaths: Array<string>;
			[key: string]: unknown;
		};
	}
}

declare module 'astro:content' {
	type Flatten<T> = T extends { [K: string]: infer U } ? U : never;

	export type CollectionKey = keyof AnyEntryMap;
	export type CollectionEntry<C extends CollectionKey> = Flatten<AnyEntryMap[C]>;

	export type ContentCollectionKey = keyof ContentEntryMap;
	export type DataCollectionKey = keyof DataEntryMap;

	type AllValuesOf<T> = T extends any ? T[keyof T] : never;
	type ValidContentEntrySlug<C extends keyof ContentEntryMap> = AllValuesOf<
		ContentEntryMap[C]
	>['slug'];

	/** @deprecated Use `getEntry` instead. */
	export function getEntryBySlug<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		// Note that this has to accept a regular string too, for SSR
		entrySlug: E,
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;

	/** @deprecated Use `getEntry` instead. */
	export function getDataEntryById<C extends keyof DataEntryMap, E extends keyof DataEntryMap[C]>(
		collection: C,
		entryId: E,
	): Promise<CollectionEntry<C>>;

	export function getCollection<C extends keyof AnyEntryMap, E extends CollectionEntry<C>>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => entry is E,
	): Promise<E[]>;
	export function getCollection<C extends keyof AnyEntryMap>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => unknown,
	): Promise<CollectionEntry<C>[]>;

	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(entry: {
		collection: C;
		slug: E;
	}): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(entry: {
		collection: C;
		id: E;
	}): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		slug: E,
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(
		collection: C,
		id: E,
	): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;

	/** Resolve an array of entry references from the same collection */
	export function getEntries<C extends keyof ContentEntryMap>(
		entries: {
			collection: C;
			slug: ValidContentEntrySlug<C>;
		}[],
	): Promise<CollectionEntry<C>[]>;
	export function getEntries<C extends keyof DataEntryMap>(
		entries: {
			collection: C;
			id: keyof DataEntryMap[C];
		}[],
	): Promise<CollectionEntry<C>[]>;

	export function render<C extends keyof AnyEntryMap>(
		entry: AnyEntryMap[C][string],
	): Promise<RenderResult>;

	export function reference<C extends keyof AnyEntryMap>(
		collection: C,
	): import('astro/zod').ZodEffects<
		import('astro/zod').ZodString,
		C extends keyof ContentEntryMap
			? {
					collection: C;
					slug: ValidContentEntrySlug<C>;
				}
			: {
					collection: C;
					id: keyof DataEntryMap[C];
				}
	>;
	// Allow generic `string` to avoid excessive type errors in the config
	// if `dev` is not running to update as you edit.
	// Invalid collection names will be caught at build time.
	export function reference<C extends string>(
		collection: C,
	): import('astro/zod').ZodEffects<import('astro/zod').ZodString, never>;

	type ReturnTypeOrOriginal<T> = T extends (...args: any[]) => infer R ? R : T;
	type InferEntrySchema<C extends keyof AnyEntryMap> = import('astro/zod').infer<
		ReturnTypeOrOriginal<Required<ContentConfig['collections'][C]>['schema']>
	>;

	type ContentEntryMap = {
		"blog": {
"activos-fisicos-tokenizados.md": {
	id: "activos-fisicos-tokenizados.md";
  slug: "activos-fisicos-tokenizados";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"almacena-y-proteger.md": {
	id: "almacena-y-proteger.md";
  slug: "almacena-y-proteger";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"alquila-tus-nfts.md": {
	id: "alquila-tus-nfts.md";
  slug: "alquila-tus-nfts";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"arte-cripto.md": {
	id: "arte-cripto.md";
  slug: "arte-cripto";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"arte-generativo-y-los-nfts.md": {
	id: "arte-generativo-y-los-nfts.md";
  slug: "arte-generativo-y-los-nfts";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"autenticidad.md": {
	id: "autenticidad.md";
  slug: "autenticidad";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"beem.md": {
	id: "beem.md";
  slug: "beem";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"blockchain.md": {
	id: "blockchain.md";
  slug: "blockchain";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"buildtree.md": {
	id: "buildtree.md";
  slug: "buildtree";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"casio-gshock.md": {
	id: "casio-gshock.md";
  slug: "casio-gshock";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"casos-de-uso.md": {
	id: "casos-de-uso.md";
  slug: "casos-de-uso";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"collab-land.md": {
	id: "collab-land.md";
  slug: "collab-land";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"como-determino-el-valor-de-un-nft.md": {
	id: "como-determino-el-valor-de-un-nft.md";
  slug: "como-determino-el-valor-de-un-nft";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"conferencianfc2023.md": {
	id: "conferencianfc2023.md";
  slug: "conferencianfc2023";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"crea-en-zora-tu-colecion-de-nft-sin-pagar-coste-de-gas.md": {
	id: "crea-en-zora-tu-colecion-de-nft-sin-pagar-coste-de-gas.md";
  slug: "crea-en-zora-tu-colecion-de-nft-sin-pagar-coste-de-gas";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"crea-tu-nft.md": {
	id: "crea-tu-nft.md";
  slug: "crea-tu-nft";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"crossmint.md": {
	id: "crossmint.md";
  slug: "crossmint";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"cryptokitties.md": {
	id: "cryptokitties.md";
  slug: "cryptokitties";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"defi-y-nft.md": {
	id: "defi-y-nft.md";
  slug: "defi-y-nft";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"derechos-de-autor-y-procedencia-en-nfts.md": {
	id: "derechos-de-autor-y-procedencia-en-nfts.md";
  slug: "derechos-de-autor-y-procedencia-en-nfts";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"derechosdeautores.md": {
	id: "derechosdeautores.md";
  slug: "derechosdeautores";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"eas.md": {
	id: "eas.md";
  slug: "eas";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"el-mercado-de-los-nfts-muestra-signos-de-recuperacion.md": {
	id: "el-mercado-de-los-nfts-muestra-signos-de-recuperacion.md";
  slug: "el-mercado-de-los-nfts-muestra-signos-de-recuperacion";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"el-uso-de-los-nfts.md": {
	id: "el-uso-de-los-nfts.md";
  slug: "el-uso-de-los-nfts";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"ethereum-lanza-su.md": {
	id: "ethereum-lanza-su.md";
  slug: "ethereum-lanza-su";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"experimenta-con-nft.md": {
	id: "experimenta-con-nft.md";
  slug: "experimenta-con-nft";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"explorando-erc-404-una-nueva-frontera-en-los-estandares-de-tokens.md": {
	id: "explorando-erc-404-una-nueva-frontera-en-los-estandares-de-tokens.md";
  slug: "explorando-erc-404-una-nueva-frontera-en-los-estandares-de-tokens";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"explorando-ton-la-blockchain-y-token-de-telegram.md": {
	id: "explorando-ton-la-blockchain-y-token-de-telegram.md";
  slug: "explorando-ton-la-blockchain-y-token-de-telegram";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"fire.md": {
	id: "fire.md";
  slug: "fire";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"fxhash.md": {
	id: "fxhash.md";
  slug: "fxhash";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"godaddy.md": {
	id: "godaddy.md";
  slug: "godaddy";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"herramienta.md": {
	id: "herramienta.md";
  slug: "herramienta";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"imprime-y-enmarca-tu-nft.md": {
	id: "imprime-y-enmarca-tu-nft.md";
  slug: "imprime-y-enmarca-tu-nft";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"impuestos.md": {
	id: "impuestos.md";
  slug: "impuestos";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"industria-de-la-musica.md": {
	id: "industria-de-la-musica.md";
  slug: "industria-de-la-musica";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"informe-completo-del-mercado-nft-en-octubre-2023.md": {
	id: "informe-completo-del-mercado-nft-en-octubre-2023.md";
  slug: "informe-completo-del-mercado-nft-en-octubre-2023";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"juegopixels.md": {
	id: "juegopixels.md";
  slug: "juegopixels";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"las-regalias-sobre-nft.md": {
	id: "las-regalias-sobre-nft.md";
  slug: "las-regalias-sobre-nft";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"los-nfts-son-una-criptomoneda.md": {
	id: "los-nfts-son-una-criptomoneda.md";
  slug: "los-nfts-son-una-criptomoneda";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"los-soulbounds-token-sbt.md": {
	id: "los-soulbounds-token-sbt.md";
  slug: "los-soulbounds-token-sbt";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"loyalty-web3.md": {
	id: "loyalty-web3.md";
  slug: "loyalty-web3";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"mercados.md": {
	id: "mercados.md";
  slug: "mercados";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"metacannes-film3-festival.md": {
	id: "metacannes-film3-festival.md";
  slug: "metacannes-film3-festival";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"metamask-lanza.md": {
	id: "metamask-lanza.md";
  slug: "metamask-lanza";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"mirror-y-como-usarlo.md": {
	id: "mirror-y-como-usarlo.md";
  slug: "mirror-y-como-usarlo";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"nash21.md": {
	id: "nash21.md";
  slug: "nash21";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"nfts-dinamicos.md": {
	id: "nfts-dinamicos.md";
  slug: "nfts-dinamicos";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"nftse-14-15-julio-valencia.md": {
	id: "nftse-14-15-julio-valencia.md";
  slug: "nftse-14-15-julio-valencia";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"niftyisland.md": {
	id: "niftyisland.md";
  slug: "niftyisland";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"nodemonkes-la-coleccion-principal-nft-de-bitcoin.md": {
	id: "nodemonkes-la-coleccion-principal-nft-de-bitcoin.md";
  slug: "nodemonkes-la-coleccion-principal-nft-de-bitcoin";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"non-fungible-conference-2024.md": {
	id: "non-fungible-conference-2024.md";
  slug: "non-fungible-conference-2024";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"ordinals.md": {
	id: "ordinals.md";
  slug: "ordinals";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"phygital.md": {
	id: "phygital.md";
  slug: "phygital";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"phygitals.md": {
	id: "phygitals.md";
  slug: "phygitals";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"protege-tus-nfts.md": {
	id: "protege-tus-nfts.md";
  slug: "protege-tus-nfts";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"que-son-los-nft.md": {
	id: "que-son-los-nft.md";
  slug: "que-son-los-nft";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"que-son-los-pfps.md": {
	id: "que-son-los-pfps.md";
  slug: "que-son-los-pfps";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"riesgo.md": {
	id: "riesgo.md";
  slug: "riesgo";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"roba-fotos-con-stealcam.md": {
	id: "roba-fotos-con-stealcam.md";
  slug: "roba-fotos-con-stealcam";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"rwa.md": {
	id: "rwa.md";
  slug: "rwa";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"simplepage.md": {
	id: "simplepage.md";
  slug: "simplepage";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"solana.md": {
	id: "solana.md";
  slug: "solana";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"timeguardian.md": {
	id: "timeguardian.md";
  slug: "timeguardian";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"ultimas-tendencias-del-mercado.md": {
	id: "ultimas-tendencias-del-mercado.md";
  slug: "ultimas-tendencias-del-mercado";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"untitled.md": {
	id: "untitled.md";
  slug: "untitled";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"videojuegos.md": {
	id: "videojuegos.md";
  slug: "videojuegos";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
};
"pages": {
"entrevistas.md": {
	id: "entrevistas.md";
  slug: "entrevistas";
  body: string;
  collection: "pages";
  data: InferEntrySchema<"pages">
} & { render(): Render[".md"] };
"noticias.md": {
	id: "noticias.md";
  slug: "noticias";
  body: string;
  collection: "pages";
  data: InferEntrySchema<"pages">
} & { render(): Render[".md"] };
"sobremi.md": {
	id: "sobremi.md";
  slug: "sobremi";
  body: string;
  collection: "pages";
  data: InferEntrySchema<"pages">
} & { render(): Render[".md"] };
"tutoriales.md": {
	id: "tutoriales.md";
  slug: "tutoriales";
  body: string;
  collection: "pages";
  data: InferEntrySchema<"pages">
} & { render(): Render[".md"] };
};

	};

	type DataEntryMap = {
		
	};

	type AnyEntryMap = ContentEntryMap & DataEntryMap;

	export type ContentConfig = typeof import("./../../src/content/config.js");
}
