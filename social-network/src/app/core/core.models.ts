export interface AuthInfo {
  accessToken: string;
  email: string;
  expiresIn: number;
  refreshToken: string;
  uuid: string;
}

export interface Friend {
  _id: string;
  uuid: string;
  confirmed: boolean;
  createdAt: Date;
  confirmedAt: Date;
  rejectedAt?: any;
}

export interface Preferences {
  isPublicProfile: boolean;
  linkedIn?: string;
  twitter?: string;
  github?: string;
  description: string;
}

export interface SocialNetworkUser {
  uuid: string;
  fullName: string;
  email: string;
  friends: Friend[];
  avatarUrl: string;
  preferences: Preferences;
}
