import { SearchInterface } from 'interfaces/search';
import { UserInterface } from 'interfaces/user';
import { OrganizationInterface } from 'interfaces/organization';
import { GetQueryInterface } from 'interfaces';

export interface DocumentInterface {
  id?: string;
  title: string;
  content: string;
  document_type?: string;
  status?: string;
  user_id: string;
  organization_id: string;
  created_at?: any;
  updated_at?: any;
  search?: SearchInterface[];
  user?: UserInterface;
  organization?: OrganizationInterface;
  _count?: {
    search?: number;
  };
}

export interface DocumentGetQueryInterface extends GetQueryInterface {
  id?: string;
  title?: string;
  content?: string;
  document_type?: string;
  status?: string;
  user_id?: string;
  organization_id?: string;
}
