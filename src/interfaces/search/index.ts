import { UserInterface } from 'interfaces/user';
import { DocumentInterface } from 'interfaces/document';
import { OrganizationInterface } from 'interfaces/organization';
import { GetQueryInterface } from 'interfaces';

export interface SearchInterface {
  id?: string;
  query: string;
  results?: string;
  user_id: string;
  document_id: string;
  organization_id: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  document?: DocumentInterface;
  organization?: OrganizationInterface;
  _count?: {};
}

export interface SearchGetQueryInterface extends GetQueryInterface {
  id?: string;
  query?: string;
  results?: string;
  user_id?: string;
  document_id?: string;
  organization_id?: string;
}
