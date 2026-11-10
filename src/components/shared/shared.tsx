export type Stack = 'java' | 'csharp';

export interface StackProps {
    value: Stack;
}

export interface CardContainer {
    id: number;
    src: string;
    alt: string;
    title: string;
    stack: Stack;
    gitUrl: string;
    brief: string;
    description: string;
}

export type JsonProps = {
    data: {
        personal: {
            banner : {
                title: string;
                subTitle: string;
            },
            aboutMe: {
                title: string;
                content: string;
            }
        },
        itens: [];
    };
};