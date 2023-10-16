import { DocumentInterface } from 'interfaces/document';
import { SearchInterface } from 'interfaces/search';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface OrganizationInterface {
  id?: string;
  description?: string;
  address?: string;
  city?: string;
  state?: string;
  zip_code?: string;
  country?: string;
  name: string;
  created_at?: any;
  updated_at?: any;
  user_id: string;
  tenant_id: string;
  document?: DocumentInterface[];
  search?: SearchInterface[];
  user?: UserInterface;
  _count?: {
    document?: number;
    search?: number;
  };
}

export interface OrganizationGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  address?: string;
  city?: string;
  state?: string;
  zip_code?: string;
  country?: string;
  name?: string;
  user_id?: string;
  tenant_id?: string;
}
