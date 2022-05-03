export type ContactType = "location" | "email" | "cell";

export type ContactInfoType = {
    readonly type: ContactType;
    readonly value: string;
}
