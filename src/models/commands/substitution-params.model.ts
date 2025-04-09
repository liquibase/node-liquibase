export interface ParamsModel {
	[key: string]: any;
}

export type SubstitutionParamsModel = ParamsModel;

type HasSubstitutionParams = {
	substitutionParams: SubstitutionParamsModel;
};

export type WithSubstitutionParams<T> = HasSubstitutionParams & T;

export type WithOptionalSubstitutionParams<T> = Partial<HasSubstitutionParams> & T;
