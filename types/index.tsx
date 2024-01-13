export type RootStack = {
	Navigation: undefined;
	Homepage: undefined;
	Menu: undefined;
};

export type NavigationProps = {
	navigate: (screen: string) => void;
};
export type NavigationBtnProps = { title: string; label: string };

// ---------------- USER ------------------------
export type UserProps = {
	_id?: string;
	username?: string;
	password?: string;
	token?: string;
	profileImage?: string;
	creations?: UserCreationsProps;
};

export type UserCreationsProps = {
	characters: [];
	classes: [];
	races: [];
	stats: [];
};

export type UserCheckProps = {
	username?: string;
	currentPassword?: string;
	newPassword?: string;
};

// ---------------- Other ------------------------
export type resProps = {
	user: UserProps;
	access_token: string;
	message: string;
};

// ---------------- Context ------------------------
export type AuthContextProps = {
	user: UserProps | undefined;
	setUser: (user: UserProps) => void;
	userStorage: boolean;
	setUserStorage: (value: boolean) => void;
	token: string;
	setToken: (value: string) => void;
	serverOpen: boolean;
	setOpen?: (value: boolean) => void;
	isLogged: boolean;
	setIsLogged?: (value: boolean) => void;
	load: boolean;
	setLoad: (value: boolean) => void;
	logout: () => void;
	initServer: () => void;
	authentification: (value: resProps) => void;
};
export type PageContextProps = {
	page: { name: string; data?: {} };
	setPage: ({ name, data }: { name: string; data?: {} }) => void;
	lastPage: { name: string; data?: {} };
	setLastPage: ({ name, data }: { name: string; data?: {} }) => void;
	parchmentDisplay: boolean;
	setParchmentDisplay: (value: boolean) => void;
	updatePage: (pageName: string, data?: {}) => void;
	getBack: () => void;
	urlRoute: string;
};
export type SetPageProps = {
	name: string;
	data?: {};
};
export type UpadatePageProps = {
	name: string;
	data?: {};
};
export type StyleContextProps = {
	styles: any;
};
// ---------------- MENU ------------------------
export type MenuSectionProps = {
	name: string;
	children?: any;
};
export type MenuErrorProps = {
	key?: string;
	message?: string;
};
export type MenuFieldProps = {
	title: string;
	label: string;
	value?: any;
	focus?: boolean;
	sub?: string;
	secure?: boolean;
	error?: MenuErrorProps[];
};
export type MenuTitleFieldProps = {
	title: string;
	label: string;
	sub?: boolean;
};

// ---------------- UTILS ------------------------

// ---------------- COMPONENT ------------------------
export type checktype = {
	label: string;
	action: () => void;
	checked: boolean;
};
export type SampleBtnProps = {
	children: any;
	action?: () => void;
	rad?: number;
	hide?: boolean;
	style?: any;
};
export type PressableBtnProps = {
	children: any;
	action: () => void;
	style?: {};
};
