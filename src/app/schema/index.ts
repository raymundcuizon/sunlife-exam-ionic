export interface UserInfo {
  _id?: string;
  name?: string;
  img?: string;
}

export interface Assset {
  _id?: string;
  title?: string;
  value?: number;
}

export interface CoveragePolicy {
  _id?: string;
  life?: string;
  critical?: string;
  medical?: string;
  accident?: string;
}

export interface Fund {
  _id?: string;
  title?: string;
  value?: number;
}

export interface Policy {
  _id?: string;
  title?: string;
  policyno?: string;
  status?: string;
  premium?: boolean;
  premiumText?: string;
  funds?: Fund[];
}

export interface PolicyValue {
  _id?: string;
  title?: string;
  value?: string;
}

export interface Policies {
  _id?: string;
  title?: string;
  expanded?: boolean;
  values?: [PolicyValue];
}

export interface PolicyServicing {
  _id?: string;
  icon?: string;
  title?: string;
  policies?: [Policies];
}