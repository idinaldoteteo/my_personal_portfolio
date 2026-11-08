export type Stack = 'java' | 'csharp';

export interface StackProps {
	value : Stack;
}

export interface CardContainer {
    id: number;
    src: string;
    alt: string;
    title: string;
    stack: Stack;
    description: string;
}