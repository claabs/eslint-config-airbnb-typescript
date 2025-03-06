import type { Linter } from 'eslint';

declare const eslintConfigAirbnbTypescript: Linter.LegacyConfig & {
	configs: {
		base: Linter.Config[];
		react: Linter.Config[];
	};
};

export = eslintConfigAirbnbTypescript;