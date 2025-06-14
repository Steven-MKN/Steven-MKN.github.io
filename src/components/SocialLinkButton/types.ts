export type SocialLinkType = {
  readonly type: SocialIconType;
  readonly link: string;
};

export type SocialIconType =
  | "twitter"
  | "linkedin"
  | "whatsapp"
  | "email"
  | "cell"
  | "github";

export type SocialLinkButtonIconPropType = {
  color: `#${string}`;
  ":hover": {
    color: `#${string}`;
  }
};
